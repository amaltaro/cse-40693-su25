import Parse from 'parse';

// Field mapping from URL query parameters to database field names
const FIELD_MAPPING = {
    workflow: 'RequestName',
    status: 'RequestStatus',
    type: 'RequestType',
    campaign: 'Campaign',
    cmssw: 'CMSSWVersion'
};

export const getAllWorkflows = async () => {
    try {
        const Workflow = Parse.Object.extend('Workflow');
        const query = new Parse.Query(Workflow);
        const workflows = await query.find();

        console.log("Parse workflows found:", workflows.length);
        // Convert Parse objects to JSON object
        return workflows.map(workflow => workflow.toJSON());
    } catch (error) {
        console.error("Error fetching from Parse:", error);
        return [];
    }
};

/* Function that accepts multiple query parameters and returns
 a list of workflows that match the query */
export const getWorkflowsByQuery = async (queryParams = {}) => {
    try {
        const Workflow = Parse.Object.extend('Workflow');
        const query = new Parse.Query(Workflow);

        // Apply filters based on query parameters
        if (queryParams.workflow) {
            // Case-insensitive search for workflow name
            query.matches(FIELD_MAPPING.workflow, queryParams.workflow, 'i');
        }

        if (queryParams.status) {
            // Case-insensitive search for status
            query.matches(FIELD_MAPPING.status, queryParams.status, 'i');
        }

        if (queryParams.type) {
            // Case-insensitive search for type
            query.matches(FIELD_MAPPING.type, queryParams.type, 'i');
        }

        if (queryParams.campaign) {
            // Case-insensitive search for campaign
            query.matches(FIELD_MAPPING.campaign, queryParams.campaign, 'i');
        }

        if (queryParams.cmssw) {
            // Case-insensitive search for CMSSW version
            query.matches(FIELD_MAPPING.cmssw, queryParams.cmssw, 'i');
        }

        const workflows = await query.find();

        console.log(`Parse workflows found with filters: ${workflows.length}`);
        console.log("Applied filters:", queryParams);

        // Convert Parse objects to JSON object
        return workflows.map(workflow => workflow.toJSON());
    } catch (error) {
        console.error("Error fetching workflows with query:", error);
        return [];
    }
};

/* Function that accepts a workflow name and returns a list of workflows that match the name */
export const getWorkflowsByWorkflowName = async (workflowName) => {
    try {
        const Workflow = Parse.Object.extend('Workflow');
        const query = new Parse.Query(Workflow);

        // Case-insensitive search for workflow name
        query.matches(FIELD_MAPPING.workflow, workflowName, 'i');

        const workflows = await query.find();

        console.log(`Parse workflows found with workflow name "${workflowName}": ${workflows.length}`);

        return workflows.map(workflow => workflow.toJSON());
    } catch (error) {
        console.error("Error fetching workflows by workflow name:", error);
        return [];
    }
};

/* Function that accepts a workflowstatus and returns a list of workflows that match the status */
export const getWorkflowsByStatus = async (status) => {
    try {
        const Workflow = Parse.Object.extend('Workflow');
        const query = new Parse.Query(Workflow);

        // Case-insensitive search for status
        query.matches(FIELD_MAPPING.status, status, 'i');

        const workflows = await query.find();

        console.log(`Parse workflows found with status "${status}": ${workflows.length}`);

        return workflows.map(workflow => workflow.toJSON());
    } catch (error) {
        console.error("Error fetching workflows by status:", error);
        return [];
    }
};

/* Function that accepts a workflow type and returns a list of workflows that match the type */
export const getWorkflowsByType = async (type) => {
    try {
        const Workflow = Parse.Object.extend('Workflow');
        const query = new Parse.Query(Workflow);

        // Case-insensitive search for type
        query.matches(FIELD_MAPPING.type, type, 'i');

        const workflows = await query.find();

        console.log(`Parse workflows found with type "${type}": ${workflows.length}`);

        return workflows.map(workflow => workflow.toJSON());
    } catch (error) {
        console.error("Error fetching workflows by type:", error);
        return [];
    }
};

/* Function that accepts a campaign and returns a list of workflows that match the campaign */
export const getWorkflowsByCampaign = async (campaign) => {
    try {
        const Workflow = Parse.Object.extend('Workflow');
        const query = new Parse.Query(Workflow);

        // Case-insensitive search for campaign
        query.matches(FIELD_MAPPING.campaign, campaign, 'i');

        const workflows = await query.find();

        console.log(`Parse workflows found with campaign "${campaign}": ${workflows.length}`);

        return workflows.map(workflow => workflow.toJSON());
    } catch (error) {
        console.error("Error fetching workflows by campaign:", error);
        return [];
    }
};

/* Function that accepts a CMSSW version and returns a list of workflows that match the version */
export const getWorkflowsByCMSSWVersion = async (cmsswVersion) => {
    try {
        const Workflow = Parse.Object.extend('Workflow');
        const query = new Parse.Query(Workflow);

        // Case-insensitive search for CMSSW version
        query.matches(FIELD_MAPPING.cmssw, cmsswVersion, 'i');

        const workflows = await query.find();

        console.log(`Parse workflows found with CMSSW version "${cmsswVersion}": ${workflows.length}`);

        return workflows.map(workflow => workflow.toJSON());
    } catch (error) {
        console.error("Error fetching workflows by CMSSW version:", error);
        return [];
    }
};