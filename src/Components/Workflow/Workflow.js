import { useEffect, useState } from "react";
import { getAllWorkflows } from "../../Services/WorkflowService";
import Header from '../Header/Header';
import WorkflowForm from "./WorkflowForm.js";
import WorkflowList from "./WorkflowList.js";
import { initializeTableFeatures } from "../../Services/TableFunctions.js";

const Workflow = () => {
console.log("Executing Workflow module");
const [workflows, setWorkflows] = useState([]);

useEffect(() => {
    getAllWorkflows().then((workflows) => {
    setWorkflows(workflows);
    });
}, []);

// Initialize table features after workflows are loaded and rendered
useEffect(() => {
    if (workflows.length > 0) {
        // Use setTimeout to ensure the DOM is updated after the render
        setTimeout(() => {
            initializeTableFeatures();
        }, 10);
    }
}, [workflows]);

return (
    <section>
        <Header title="WM Workflow" />
        <WorkflowForm />
        {/* This table will eventually be populated with dynamic data */}
<div className="container-fluid">
    <div className="table-responsive">
    <table
        id="workflowTable"
        className="table table-light table-striped table-hover table-bordered table-sm"
    >
        <thead className="table-light">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Workflow</th>
            <th scope="col">Status</th>
            <th scope="col">Type</th>
            <th scope="col">Priority</th>
            <th scope="col">Created</th>
            <th scope="col">Pending</th>
            <th scope="col">Running</th>
            <th scope="col">Success</th>
            <th scope="col">Failure</th>
        </tr>
        </thead>
        <WorkflowList workflows={workflows} />
        </table>
    </div>
</div>
    </section>
);
};

export default Workflow;
