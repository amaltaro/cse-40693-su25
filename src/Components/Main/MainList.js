import { useState, useEffect } from 'react';
import { getAllWorkflows } from '../../Services/WorkflowService.js';

const MainList = () => {
    const [workflows, setWorkflows] = useState([]);

    useEffect(() => {
        getAllWorkflows().then(workflows => {
            console.log('workflows: ', workflows);
            setWorkflows(workflows);
        });
    }, []);

    console.log("state", w);
    const workflowArray = Array.isArray(workflows) ? workflows : [];
    return (
        <div>
            <tr>
                {workflows.map(workflow => (
                <th scope="row">${index + 1}</th>
                <td key={workflow.id} data-column="workflow">
                    {workflow.get('RequestName')}
                </td>
                <td data-column="status">${workflow.RequestStatus}</td>
                <td data-column="type">${workflow.RequestType}</td>
                <td data-column="priority">${workflow.RequestPriority}</td>
                <td data-column="created">${workflow.jobs_created}</td>
                <td data-column="pending">${workflow.jobs_pending}</td>
                <td data-column="running">${workflow.jobs_running}</td>
                <td data-column="success">${workflow.jobs_success}</td>
                <td data-column="failure">${workflow.jobs_failed}</td>
                ))}
            </tr>
        </div>
    );
};

export default MainList;