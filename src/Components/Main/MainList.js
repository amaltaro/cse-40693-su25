import { useState, useEffect } from 'react';
import { getAllWorkflows } from '../../Services/WorkflowService';

const MainList = () => {
    const [workflows, setWorkflows] = useState([]);

    useEffect(() => {
        getAllWorkflows().then(workflows => {
            console.log('workflows: ', workflows);
            setWorkflows(workflows);
        });
    }, []);

    return (
        <div>
            <hr />
            This is the main list parent components.
            <h1>Workflows</h1>
            <div>
                {workflows.length > 0 &&
                <ul>
                    {workflows.map(workflow => (
                        <li key={workflow.id}>
                            {workflow.get('RequestName')}
                        </li>
                    ))}
                </ul>
                }
            </div>
        </div>
    );
};

export default MainList;