import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { getAllWorkflows, getWorkflowsByQuery } from "../../Services/WorkflowService";
import Header from '../Header/Header';
import WorkflowForm from "./WorkflowForm.js";
import WorkflowList from "./WorkflowList.js";
import { initializeTableFeatures, sortWorkflows } from "../../Services/TableFunctions.js";
import "./Workflow.css";

const Workflow = () => {
    console.log("Executing Workflow module");
    const [workflows, setWorkflows] = useState([]);
    const [searchParams] = useSearchParams();
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [lastRefresh, setLastRefresh] = useState(new Date());

    useEffect(() => {
        // Extract query parameters from URL
        const queryParams = {};

        // Check for each possible query parameter
        const workflow = searchParams.get('workflow');
        const status = searchParams.get('status');
        const type = searchParams.get('type');
        const campaign = searchParams.get('campaign');
        const cmssw = searchParams.get('cmssw');
        const agent = searchParams.get('agent');
        const teamname = searchParams.get('teamname');
        const site = searchParams.get('site');
        const inputdataset = searchParams.get('inputdataset');
        const outputdataset = searchParams.get('outputdataset');

        // Only add parameters that are actually present
        if (workflow) queryParams.workflow = workflow;
        if (status) queryParams.status = status;
        if (type) queryParams.type = type;
        if (campaign) queryParams.campaign = campaign;
        if (cmssw) queryParams.cmssw = cmssw;
        if (agent) queryParams.agent = agent;
        if (teamname) queryParams.teamname = teamname;
        if (site) queryParams.site = site;
        if (inputdataset) queryParams.inputdataset = inputdataset;
        if (outputdataset) queryParams.outputdataset = outputdataset;

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

    // Function to load workflows
    const loadWorkflows = async () => {
        try {
            getAllWorkflows().then((workflows) => {
                setWorkflows(workflows);
            });
            setLastRefresh(new Date());
        } catch (error) {
            console.error("Error loading workflows:", error);
        }
    };

    // Initialize table features after workflows are loaded and rendered
    useEffect(() => {
        if (workflows.length > 0) {
            // Use setTimeout to ensure the DOM is updated after the render
            setTimeout(() => {
                initializeTableFeatures();
            }, 10);
        }
    }, [workflows]);


    // Load agents on component mount
    useEffect(() => {
        loadWorkflows();
    }, []);

    // Set up automatic refresh every 10 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            loadWorkflows();
        }, 10000); // 10 seconds
        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Helper function to display current filters
    const getActiveFilters = () => {
        const filters = [];
        if (searchParams.get('workflow')) filters.push({ name: 'Workflow', value: searchParams.get('workflow') });
        if (searchParams.get('status')) filters.push({ name: 'Status', value: searchParams.get('status') });
        if (searchParams.get('type')) filters.push({ name: 'Type', value: searchParams.get('type') });
        if (searchParams.get('campaign')) filters.push({ name: 'Campaign', value: searchParams.get('campaign') });
        if (searchParams.get('cmssw')) filters.push({ name: 'CMSSW', value: searchParams.get('cmssw') });
        if (searchParams.get('agent')) filters.push({ name: 'Agent', value: searchParams.get('agent') });
        if (searchParams.get('teamname')) filters.push({ name: 'Team Name', value: searchParams.get('teamname') });
        if (searchParams.get('site')) filters.push({ name: 'Site', value: searchParams.get('site') });
        if (searchParams.get('inputdataset')) filters.push({ name: 'Input Dataset', value: searchParams.get('inputdataset') });
        if (searchParams.get('outputdataset')) filters.push({ name: 'Output Dataset', value: searchParams.get('outputdataset') });
        return filters;
    };

    const activeFilters = getActiveFilters();

    // Handle column sorting
    const handleSort = (columnKey) => {
        let direction = 'asc';
        if (sortConfig.key === columnKey && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key: columnKey, direction });
    };

    // Sort workflows based on current configuration
    const sortedWorkflows = sortWorkflows(workflows, sortConfig.key, sortConfig.direction);

    return (
        <section>
            <Header title="WM Workflow" />
            <div className="container-fluid workflow-form-section">
                <div className="workflow-form-wrapper">
                    <div className="workflow-form-card">
                        <div className="workflow-form-header">
                            <h3 className="workflow-form-title">
                                <i className="bi bi-arrow-clockwise me-2"></i>
                                Real-time workflow monitoring with automatic refresh every 10 seconds.
                            </h3>
                            {/* Last refresh timestamp */}
                            {lastRefresh && (
                                <p className="last-refresh-text">
                                    <i className="bi bi-clock me-1"></i>
                                    Last refresh: {lastRefresh.toLocaleTimeString()}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid workflow-form-section">
                <WorkflowForm />
            </div>
            {/* Display active filters if any */}
            {activeFilters.length > 0 && (
                <div className="container-fluid active-filters-container">
                    <div className="active-filters-bar">
                        <div>
                            <span className="active-filters-label">Active Filters:</span>
                            <span className="active-filters-content">
                                {activeFilters.map((filter, index) => (
                                    <span key={index}>
                                        <span className="filter-name">{filter.name}:</span> {filter.value}
                                        {index < activeFilters.length - 1 && ', '}
                                    </span>
                                ))}
                            </span>
                        </div>
                        <a href="/workflow" className="clear-filters-btn">
                            <i className="bi bi-x-circle"></i>
                            Clear Filters
                        </a>
                    </div>
                </div>
            )}

            {/* This table will eventually be populated with dynamic data */}
            <div className="container-fluid">
                <div className="table-responsive workflow-table-container">
                    <table
                        id="workflowTable"
                        className="table table-light table-striped table-hover table-bordered table-sm workflow-table"
                    >
                        <thead className="table-light">
                            <tr>
                                <th scope="col">#</th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('RequestName')}
                                >
                                    Workflow
                                    {sortConfig.key === 'RequestName' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1`} style={{ color: 'white', fontSize: '0.9rem' }}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('RequestStatus')}
                                >
                                    Status
                                    {sortConfig.key === 'RequestStatus' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1`} style={{ color: 'white', fontSize: '0.9rem' }}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('RequestType')}
                                >
                                    Type
                                    {sortConfig.key === 'RequestType' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1`} style={{ color: 'white', fontSize: '0.9rem' }}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('RequestPriority')}
                                >
                                    Priority
                                    {sortConfig.key === 'RequestPriority' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1 sort-indicator active`}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1 sort-indicator inactive"></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('jobs_created')}
                                >
                                    Created
                                    {sortConfig.key === 'jobs_created' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1 sort-indicator active`}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1 sort-indicator inactive"></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('jobs_pending')}
                                >
                                    Pending
                                    {sortConfig.key === 'jobs_pending' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1 sort-indicator active`}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1 sort-indicator inactive"></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('jobs_running')}
                                >
                                    Running
                                    {sortConfig.key === 'jobs_running' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1 sort-indicator active`}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1 sort-indicator inactive"></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('jobs_success')}
                                >
                                    Success
                                    {sortConfig.key === 'jobs_success' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1 sort-indicator active`}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1 sort-indicator inactive"></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('jobs_failed')}
                                >
                                    Failure
                                    {sortConfig.key === 'jobs_failed' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1 sort-indicator active`}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1 sort-indicator inactive"></i>
                                    )}
                                </th>
                            </tr>
                        </thead>
                        <WorkflowList workflows={sortedWorkflows} />
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
