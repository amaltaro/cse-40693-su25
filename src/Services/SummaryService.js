// Summary Service for aggregating workflow data
// This service provides functions to group and summarize workflow data by different fields

// Field mapping for aggregation
const AGGREGATION_FIELDS = {
    campaign: 'Campaign',
    cmssw: 'CMSSWVersion',
    type: 'RequestType',
    status: 'RequestStatus',
    teamname: 'Team'
};

// Helper function to safely get field value
const getFieldValue = (workflow, fieldKey) => {
    const fieldName = AGGREGATION_FIELDS[fieldKey];
    if (!fieldName) return 'Unknown';

    let value = workflow[fieldName];
    // Handle Parse objects (pointers to other objects)
    if (value && typeof value === 'object' && value.objectId) {
        value = value.objectId;
        console.log("Found a Pointer data type for field: ", fieldName, "with objectId value: ", value);
    }

    return value || 'Unknown';
};

// Helper function to aggregate numeric fields
const aggregateNumericFields = (workflows) => {
    return workflows.reduce((acc, workflow) => {
        acc.jobs_created += workflow.jobs_created || 0;
        acc.jobs_pending += workflow.jobs_pending || 0;
        acc.jobs_running += workflow.jobs_running || 0;
        acc.jobs_success += workflow.jobs_success || 0;
        acc.jobs_failed += workflow.jobs_failed || 0;
        return acc;
    }, {
        jobs_created: 0,
        jobs_pending: 0,
        jobs_running: 0,
        jobs_success: 0,
        jobs_failed: 0
    });
};

// Main aggregation function
export const aggregateWorkflowsByField = (workflows, aggregationField) => {
    if (!workflows || workflows.length === 0) {
        return [];
    }

    const groupedData = {};

    // Group workflows by the specified field
    workflows.forEach(workflow => {
        const groupKey = getFieldValue(workflow, aggregationField);
        
        if (!groupedData[groupKey]) {
            groupedData[groupKey] = [];
        }
        
        groupedData[groupKey].push(workflow);
    });

    // Convert grouped data to summary objects
    const summaryData = Object.entries(groupedData).map(([groupValue, groupWorkflows]) => {
        const aggregated = aggregateNumericFields(groupWorkflows);
        
        return {
            groupField: aggregationField,
            groupValue: groupValue,
            count: groupWorkflows.length,
            ...aggregated
        };
    });

    // Sort by count (descending) then by group value (ascending)
    return summaryData.sort((a, b) => {
        if (b.count !== a.count) {
            return b.count - a.count;
        }
        return a.groupValue.localeCompare(b.groupValue);
    });
};

// Get field display name for table headers
export const getFieldDisplayName = (fieldKey) => {
    const fieldNames = {
        campaign: 'Campaign',
        cmssw: 'CMSSW',
        type: 'Type',
        status: 'Status',
        teamname: 'Team Name'
    }
    return fieldNames[fieldKey] || fieldKey;
}; 