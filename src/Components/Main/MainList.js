import { useState, useEffect } from 'react';
import { getAllWorkflows } from '../../Services/WorkflowService.js';
import WorkflowTable from './WorkflowTable.js';

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
            <WorkflowTable workflows={workflowArray} />
        </div>
    );
};

export default MainList;