/**
 * CSV Service for downloading table data as CSV files
 */

/**
 * Downloads workflow data as CSV
 * @param {Array} workflows - Array of workflow objects
 */
export const downloadWorkflowsAsCSV = (workflows) => {
    if (!workflows || workflows.length === 0) {
        console.log("No data to download");
        return;
    }

    const headers = [
        '#',
        'Workflow',
        'Status',
        'Type',
        'Priority',
        'Created',
        'Pending',
        'Running',
        'Success',
        'Failure'
    ];

    const data = workflows.map((workflow, index) => ({
        '#': index + 1,
        'Workflow': workflow.RequestName || '',
        'Status': workflow.RequestStatus || '',
        'Type': workflow.RequestType || '',
        'Priority': workflow.RequestPriority || '',
        'Created': workflow.jobs_created || 0,
        'Pending': workflow.jobs_pending || 0,
        'Running': workflow.jobs_running || 0,
        'Success': workflow.jobs_success || 0,
        'Failure': workflow.jobs_failed || 0
    }));

    // Create CSV rows
    const csvRows = [
        headers.join(','), // Header row
        ...data.map(row => {
            const values = headers.map(header => {
                const value = row[header] || '';
                // Escape quotes and wrap in quotes if contains comma or newline
                const escapedValue = String(value).replace(/"/g, '""');
                return escapedValue.includes(',') || escapedValue.includes('\n') ? `"${escapedValue}"` : escapedValue;
            });
            return values.join(',');
        })
    ];

    // Create CSV content
    const csvContent = csvRows.join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    
    // Generate filename with date and timestamp
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0].replace(/:/g, '-');
    const filename = `workflows_${date}_${time}.csv`;
    
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

/**
 * Downloads summary data as CSV
 * @param {Array} summaryData - Array of summary objects
 * @param {string} fieldDisplayName - Display name for the aggregation field
 */
export const downloadSummaryAsCSV = (summaryData, fieldDisplayName) => {
    if (!summaryData || summaryData.length === 0) {
        console.log("No data to download");
        return;
    }

    const headers = [
        '#',
        fieldDisplayName,
        'Count',
        'Created',
        'Pending',
        'Running',
        'Success',
        'Failure'
    ];

    const data = summaryData.map((row, index) => ({
        '#': index + 1,
        [fieldDisplayName]: row.groupValue || '',
        'Count': row.count || 0,
        'Created': row.jobs_created || 0,
        'Pending': row.jobs_pending || 0,
        'Running': row.jobs_running || 0,
        'Success': row.jobs_success || 0,
        'Failure': row.jobs_failed || 0
    }));

    // Create CSV rows
    const csvRows = [
        headers.join(','), // Header row
        ...data.map(row => {
            const values = headers.map(header => {
                const value = row[header] || '';
                // Escape quotes and wrap in quotes if contains comma or newline
                const escapedValue = String(value).replace(/"/g, '""');
                return escapedValue.includes(',') || escapedValue.includes('\n') ? `"${escapedValue}"` : escapedValue;
            });
            return values.join(',');
        })
    ];

    // Create CSV content
    const csvContent = csvRows.join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    
    // Generate filename with date and timestamp
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0].replace(/:/g, '-');
    const filename = `summary_${date}_${time}.csv`;
    
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}; 