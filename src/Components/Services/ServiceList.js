const ServiceList = ({ workflows = [] }) => {
  console.log("Executing ServiceList function");
  console.log("services:", workflows); // Debug log to see what's being passed

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
          <tr key={index}>
            <td>{index + 1}</td>
            <td data-column="service">{workflow.service}</td>
            <td data-column="status">{workflow.status}</td>
            <td data-column="timestamp">{workflow.timestamp}</td>
            <td data-column="createdAt">{workflow.createdAt}</td>
            <td data-column="updatedAt">{workflow.updatedAt}</td>
            <td data-column="objectId">{workflow.objectId}</td>
          </tr>
        ))}
      </tbody>
);
};

export default ServiceList;