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

    console.log("state", workflows);
    const workflowArray = Array.isArray(workflows) ? workflows : [];

    return (
        <div>
            {workflowArray.map((workflow, index) => (
                <tr key={workflow.id}>
                    <th scope="row">{index + 1}</th>
                    <td data-column="workflow">
                        {workflow.get('RequestName')}
                    </td>
                    <td data-column="status">{workflow.get('RequestStatus')}</td>
                    <td data-column="type">{workflow.get('RequestType')}</td>
                    <td data-column="priority">{workflow.get('RequestPriority')}</td>
                    <td data-column="created">{workflow.get('jobs_created')}</td>
                    <td data-column="pending">{workflow.get('jobs_pending')}</td>
                    <td data-column="running">{workflow.get('jobs_running')}</td>
                    <td data-column="success">{workflow.get('jobs_success')}</td>
                    <td data-column="failure">{workflow.get('jobs_failed')}</td>
                </tr>
            ))}
        </div>
    );
};

export default MainList;