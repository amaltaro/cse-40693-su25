const WorkflowList = ({ workflows = [] }) => {
  console.log("Executing WorkflowList function");
  console.log("workflows:", workflows); // Debug log to see what's being passed

  // Check if workflows is an array, if not, convert or provide fallback
  const workflowArray = Array.isArray(workflows) ? workflows : [];
  
  // Debug: Log the first workflow object to see its structure
  if (workflowArray.length > 0) {
    console.log("First workflow object:", workflowArray[0]);
    console.log("Available keys:", Object.keys(workflowArray[0]));
  }

  return (
      <tbody id="app">
        {workflowArray.map((workflow, index) => (
          // These specific data-* attributes are required in order to
          // be able to apply filters to the table
          <tr key={index}
              data-campaign={workflow.Campaign || ''}
              data-agent={workflow.Agent || ''}
              data-teamname={workflow.Team || ''}
              data-site={workflow.SiteWhitelist ? workflow.SiteWhitelist.join(', ') : ''}
              data-inputdataset={workflow.InputDataset || ''}
              data-outputdataset={workflow.OutputDatasets ? workflow.OutputDatasets.join(', ') : ''}>
            <td>{index + 1}</td>
            <td data-column="workflow">{workflow.RequestName}</td>
            <td data-column="status">{workflow.RequestStatus}</td>
            <td data-column="type">{workflow.RequestType}</td>
            <td data-column="priority">{workflow.RequestPriority}</td>
            <td data-column="created">{workflow.jobs_created}</td>
            <td data-column="pending">{workflow.jobs_pending}</td>
            <td data-column="running">{workflow.jobs_running}</td>
            <td data-column="success">{workflow.jobs_success}</td>
            <td data-column="failure">{workflow.jobs_failed}</td>
          </tr>
        ))}
      </tbody>
);
};

export default WorkflowList;