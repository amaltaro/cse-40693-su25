import React from 'react';

const WorkflowTable = ({ workflows }) => (
  <div className="table-responsive">
    <table className="table table-light table-striped table-hover table-bordered table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Workflow</th>
          <th>Status</th>
          <th>Type</th>
          <th>Priority</th>
          <th>Created</th>
          <th>Pending</th>
          <th>Running</th>
          <th>Success</th>
          <th>Failure</th>
        </tr>
      </thead>
      <tbody>
        {workflows.map((workflow, index) => (
          <tr key={workflow.id}>
            <th scope="row">{index + 1}</th>
            <td>{workflow.get('RequestName')}</td>
            <td>{workflow.get('RequestStatus')}</td>
            <td>{workflow.get('RequestType')}</td>
            <td>{workflow.get('RequestPriority')}</td>
            <td>{workflow.get('jobs_created')}</td>
            <td>{workflow.get('jobs_pending')}</td>
            <td>{workflow.get('jobs_running')}</td>
            <td>{workflow.get('jobs_success')}</td>
            <td>{workflow.get('jobs_failed')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default WorkflowTable;