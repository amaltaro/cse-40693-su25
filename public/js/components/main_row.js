import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const MainRow = ({ workflows = [] }) => {
  console.log("Executing MainRow function");
  console.log("workflows:", workflows); // Debug log to see what's being passed

  // Check if workflows is an array, if not, convert or provide fallback
  const workflowArray = Array.isArray(workflows) ? workflows : [];

  // FIXME: the static row below needs to be removed, once we
  // confirm it is behaving as expected
  // <tr>
  //     <th scope="row">1</th>
  //     <td>Workflow_abc</td>
  //     <td>acquired</td>
  //     <td>TaskChain</td>
  //     <td>100000</td>
  //     <td>0</td>
  //     <td>0</td>
  //     <td>0</td>
  //     <td>0</td>
  //     <td>0</td>
  //   </tr>
  return html`
    ${workflowArray.map(
      (workflow, index) =>
        html` <tr>
          <th scope="row">${index + 1}</th>
          <td data-column="workflow">${workflow.RequestName}</td>
          <td data-column="status">${workflow.RequestStatus}</td>
          <td data-column="type">${workflow.RequestType}</td>
          <td data-column="priority">${workflow.RequestPriority}</td>
          <td data-column="created">${workflow.jobs_created}</td>
          <td data-column="pending">${workflow.jobs_pending}</td>
          <td data-column="running">${workflow.jobs_running}</td>
          <td data-column="success">${workflow.jobs_success}</td>
          <td data-column="failure">${workflow.jobs_failed}</td>
        </tr>`
    )}
  `;
};

export default MainRow;