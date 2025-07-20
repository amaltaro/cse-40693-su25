import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllWorkflows, getWorkflowsByQuery } from "../../Services/WorkflowService";
import Header from '../Header/Header';
import WorkflowForm from "./WorkflowForm.js";
import WorkflowList from "./WorkflowList.js";
import { initializeTableFeatures } from "../../Services/TableFunctions.js";

const Workflow = () => {
    console.log("Executing Workflow module");
    const [workflows, setWorkflows] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        // Extract query parameters from URL
        const queryParams = {};

        // Check for each possible query parameter
        const workflow = searchParams.get('workflow');
        const status = searchParams.get('status');
        const type = searchParams.get('type');
        const campaign = searchParams.get('campaign');
        const cmssw = searchParams.get('cmssw');

        // Only add parameters that are actually present
        if (workflow) queryParams.workflow = workflow;
        if (status) queryParams.status = status;
        if (type) queryParams.type = type;
        if (campaign) queryParams.campaign = campaign;
        if (cmssw) queryParams.cmssw = cmssw;

        console.log("Query parameters:", queryParams);

        // If we have query parameters, use the filtered function
        if (Object.keys(queryParams).length > 0) {
            getWorkflowsByQuery(queryParams).then((workflows) => {
                setWorkflows(workflows);
            });
        } else {
            // Otherwise, get all workflows
            getAllWorkflows().then((workflows) => {
                setWorkflows(workflows);
            });
        }
    }, [searchParams]); // Re-run when search params change

// Initialize table features after workflows are loaded and rendered
useEffect(() => {
    if (workflows.length > 0) {
        // Use setTimeout to ensure the DOM is updated after the render
        setTimeout(() => {
            initializeTableFeatures();
        }, 10);
    }
}, [workflows]);

    // Helper function to display current filters
    const getActiveFilters = () => {
        const filters = [];
        if (searchParams.get('workflow')) filters.push(`Workflow: ${searchParams.get('workflow')}`);
        if (searchParams.get('status')) filters.push(`Status: ${searchParams.get('status')}`);
        if (searchParams.get('type')) filters.push(`Type: ${searchParams.get('type')}`);
        if (searchParams.get('campaign')) filters.push(`Campaign: ${searchParams.get('campaign')}`);
        if (searchParams.get('cmssw')) filters.push(`CMSSW: ${searchParams.get('cmssw')}`);
        return filters;
    };

    const activeFilters = getActiveFilters();

    return (
        <section>
            <Header title="WM Workflow" />
            <WorkflowForm />

            {/* Display active filters if any */}
            {activeFilters.length > 0 && (
                <div className="container-fluid mb-3">
                    <div className="alert alert-info">
                        <strong>Active Filters:</strong> {activeFilters.join(', ')}
                        <span className="ms-2">
                            <a href="/workflow" className="btn btn-sm btn-outline-secondary">
                                Clear Filters
                            </a>
                        </span>
                    </div>
                </div>
            )}

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
