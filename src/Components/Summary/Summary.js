import { useEffect, useState } from "react";

import { getAllWorkflows } from "../../Services/WorkflowService";
import { aggregateWorkflowsByField, getFieldDisplayName } from "../../Services/SummaryService";
import Header from '../Header/Header';
import SummaryAgg from "./SummaryAgg.js";
import SummaryList from "./SummaryList.js";
import "./Summary.css";

const Summary = () => {
    console.log("Executing Summary module");
    const [workflows, setWorkflows] = useState([]);
    const [aggregationField, setAggregationField] = useState('campaign');
    const [summaryData, setSummaryData] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    // Load all workflows on component mount
    useEffect(() => {
        const loadWorkflows = async () => {
            try {
                const workflows = await getAllWorkflows();
                console.log("Loaded workflows:", workflows.length);
                if (workflows.length > 0) {
                    console.log("First workflow object:", workflows[0]);
                console.log("Available fields in workflow:", Object.keys(workflows[0]));
                console.log("Campaign field:", workflows[0].Campaign);
                console.log("CMSSWVersion field:", workflows[0].CMSSWVersion);
                
                // Check if there are any fields that might be Campaign or CMSSW related
                const allFields = Object.keys(workflows[0]);
                const campaignFields = allFields.filter(field => 
                    field.toLowerCase().includes('campaign') || 
                    field.toLowerCase().includes('camp')
                );
                const cmsswFields = allFields.filter(field => 
                    field.toLowerCase().includes('cmssw') || 
                    field.toLowerCase().includes('version') ||
                    field.toLowerCase().includes('sw')
                );
                
                console.log("Fields that might be Campaign related:", campaignFields);
                console.log("Fields that might be CMSSW related:", cmsswFields);
                
                // Let's also check if any of the existing fields contain Campaign or CMSSW information
                console.log("RequestName (might contain campaign info):", workflows[0].RequestName);
                console.log("Team (might contain campaign info):", workflows[0].Team);
                console.log("InputDataset (might contain version info):", workflows[0].InputDataset);
                }
                setWorkflows(workflows);
            } catch (error) {
                console.error("Error loading workflows:", error);
                setWorkflows([]);
            }
        };
        
        loadWorkflows();
    }, []);

    // Update summary data when workflows or aggregation field changes
    useEffect(() => {
        if (workflows.length > 0) {
            console.log("Aggregating workflows by field:", aggregationField);
            console.log("Number of workflows:", workflows.length);
            const aggregated = aggregateWorkflowsByField(workflows, aggregationField);
            console.log("Aggregated data:", aggregated);
            setSummaryData(aggregated);
        }
    }, [workflows, aggregationField]);

    // Initialize table features after summary data is loaded and rendered
    useEffect(() => {
        if (summaryData.length > 0) {
            // Use setTimeout to ensure the DOM is updated after the render
            setTimeout(() => {
                // For summary table, we don't need the full table features initialization
                // Just update row numbers if needed
                const table = document.getElementById("summaryTable");
                if (table) {
                    const tbody = table.querySelector("tbody");
                    if (tbody) {
                        const rows = tbody.querySelectorAll("tr");
                        rows.forEach((row, index) => {
                            const firstCell = row.querySelector("td:first-child");
                            if (firstCell) {
                                firstCell.textContent = index + 1;
                            }
                        });
                    }
                }
            }, 10);
        }
    }, [summaryData]);

    // Handle aggregation field change
    const handleAggregationChange = (newAggregationField) => {
        setAggregationField(newAggregationField);
        setSortConfig({ key: null, direction: 'asc' }); // Reset sorting when aggregation changes
    };

    // Handle column sorting
    const handleSort = (columnKey) => {
        let direction = 'asc';
        if (sortConfig.key === columnKey && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key: columnKey, direction });
    };

    // Sort summary data based on current configuration
    const sortedSummaryData = [...summaryData].sort((a, b) => {
        if (!sortConfig.key) return 0;

        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        // Handle numeric sorting
        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
        }

        // Handle string sorting
        aValue = String(aValue || '').toLowerCase();
        bValue = String(bValue || '').toLowerCase();
        
        if (sortConfig.direction === 'asc') {
            return aValue.localeCompare(bValue);
        } else {
            return bValue.localeCompare(aValue);
        }
    });

    const fieldDisplayName = getFieldDisplayName(aggregationField);

    return (
        <section>
            <Header title="WM Summary" />
            <div className="container-fluid summary-form-section">
                <SummaryAgg 
                    onAggregationChange={handleAggregationChange} 
                    selectedAggregation={aggregationField}
                />
            </div>

            {/* Summary Statistics */}
            {summaryData.length > 0 && (
                <div className="container-fluid summary-stats-container">
                    <div className="summary-stats-bar">
                        <div>
                            <span className="summary-stats-label">Summary Statistics:</span>
                            <span className="summary-stats-content">
                                {summaryData.length} {fieldDisplayName} groups • {workflows.length} total workflows
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Summary Table */}
            <div className="container-fluid">
                <div className="table-responsive summary-table-container">
                    <table
                        id="summaryTable"
                        className="table table-light table-striped table-hover table-bordered table-sm summary-table"
                    >
                        <thead className="table-light">
                            <tr>
                                <th scope="col">#</th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('groupValue')}
                                >
                                    {fieldDisplayName}
                                    {sortConfig.key === 'groupValue' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1`} style={{color: 'white', fontSize: '0.9rem'}}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1" style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('count')}
                                >
                                    Count
                                    {sortConfig.key === 'count' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1`} style={{color: 'white', fontSize: '0.9rem'}}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1" style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('jobs_created')}
                                >
                                    Created
                                    {sortConfig.key === 'jobs_created' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1`} style={{color: 'white', fontSize: '0.9rem'}}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1" style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('jobs_pending')}
                                >
                                    Pending
                                    {sortConfig.key === 'jobs_pending' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1`} style={{color: 'white', fontSize: '0.9rem'}}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1" style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('jobs_running')}
                                >
                                    Running
                                    {sortConfig.key === 'jobs_running' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1`} style={{color: 'white', fontSize: '0.9rem'}}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1" style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('jobs_success')}
                                >
                                    Success
                                    {sortConfig.key === 'jobs_success' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1`} style={{color: 'white', fontSize: '0.9rem'}}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1" style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}></i>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="sortable-header"
                                    onClick={() => handleSort('jobs_failed')}
                                >
                                    Failure
                                    {sortConfig.key === 'jobs_failed' ? (
                                        <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1`} style={{color: 'white', fontSize: '0.9rem'}}></i>
                                    ) : (
                                        <i className="bi bi-arrow-up-down ms-1" style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}></i>
                                    )}
                                </th>
                            </tr>
                        </thead>
                        <SummaryList summaryData={sortedSummaryData} aggregationField={aggregationField} />
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Summary;
