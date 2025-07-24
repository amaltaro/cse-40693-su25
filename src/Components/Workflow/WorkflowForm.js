import { useSearchParams } from "react-router-dom";
import { getAllWorkflows } from "../../Services/WorkflowService";

export default function WorkflowForm({ onRefresh }) {
    console.log("Executing WorkflowForm module");
    const [searchParams, setSearchParams] = useSearchParams();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newSearchParams = new URLSearchParams(searchParams);

        if (value.trim()) {
            newSearchParams.set(name, value);
        } else {
            newSearchParams.delete(name);
        }

        setSearchParams(newSearchParams);
    };

    const handleReset = () => {
        console.log("Reset button clicked");
        // Clear all form inputs
        const form = document.querySelector('.workflow-form');
        if (form) {
            form.reset();
        }
        // Clear all search parameters and redirect to base workflow page
        setSearchParams({});
    };

    const handleRefresh = () => {
        console.log("Refresh button clicked in WorkflowForm");
        if (onRefresh) {
            onRefresh();
        }
    }

    return (
        <section>
            <div className="container-fluid workflow-form-wrapper">
                <div className="workflow-form-card">
                    <div className="workflow-form-header">
                        <h3 className="workflow-form-title">
                            <i className="bi bi-funnel-fill me-2"></i>
                            Workflow Filters
                        </h3>
                        <p className="workflow-form-description">
                            Use the filters below to search and filter workflow data. Type in any field to filter the table below.
                        </p>
                    </div>

                    <form method="GET" className="workflow-form">
                        <div className="workflow-form-grid">
                            <div className="form-group">
                                <label className="form-label">
                                    <i className="bi bi-tag-fill me-1"></i>
                                    Campaign
                                </label>
                                <input
                                    type="text"
                                    className="form-control workflow-input"
                                    name="campaign"
                                    data-column="campaign"
                                    maxLength="100"
                                    placeholder="Enter campaign name"
                                    value={searchParams.get('campaign') || ''}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <i className="bi bi-gear-fill me-1"></i>
                                    Type
                                </label>
                                <input
                                    type="text"
                                    className="form-control workflow-input"
                                    name="type"
                                    data-column="type"
                                    maxLength="30"
                                    placeholder="Enter workflow type"
                                    value={searchParams.get('type') || ''}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <i className="bi bi-check-circle-fill me-1"></i>
                                    Status
                                </label>
                                <input
                                    type="text"
                                    className="form-control workflow-input"
                                    name="status"
                                    data-column="status"
                                    maxLength="30"
                                    placeholder="Enter status"
                                    value={searchParams.get('status') || ''}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <i className="bi bi-diagram-3-fill me-1"></i>
                                    Workflow
                                </label>
                                <input
                                    type="text"
                                    className="form-control workflow-input"
                                    name="workflow"
                                    data-column="workflow"
                                    maxLength="150"
                                    placeholder="Enter workflow name"
                                    value={searchParams.get('workflow') || ''}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <i className="bi bi-code-slash me-1"></i>
                                    CMSSW
                                </label>
                                <input
                                    type="text"
                                    className="form-control workflow-input"
                                    name="cmssw"
                                    data-column="cmssw"
                                    maxLength="20"
                                    placeholder="Enter CMSSW version"
                                    value={searchParams.get('cmssw') || ''}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <i className="bi bi-person-fill me-1"></i>
                                    Agent
                                </label>
                                <input
                                    type="text"
                                    className="form-control workflow-input"
                                    name="agent"
                                    data-column="agent"
                                    maxLength="50"
                                    placeholder="Enter agent name"
                                    value={searchParams.get('agent') || ''}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <i className="bi bi-people-fill me-1"></i>
                                    Team Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control workflow-input"
                                    name="teamname"
                                    data-column="teamname"
                                    maxLength="50"
                                    placeholder="Enter team name"
                                    value={searchParams.get('teamname') || ''}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <i className="bi bi-geo-alt-fill me-1"></i>
                                    Site
                                </label>
                                <input
                                    type="text"
                                    className="form-control workflow-input"
                                    name="site"
                                    data-column="site"
                                    maxLength="50"
                                    placeholder="Enter site name"
                                    value={searchParams.get('site') || ''}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <i className="bi bi-database-fill me-1"></i>
                                    Input Dataset
                                </label>
                                <input
                                    type="text"
                                    className="form-control workflow-input"
                                    name="inputdataset"
                                    data-column="inputdataset"
                                    maxLength="250"
                                    placeholder="Enter input dataset"
                                    value={searchParams.get('inputdataset') || ''}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <i className="bi bi-database-fill me-1"></i>
                                    Output Dataset
                                </label>
                                <input
                                    type="text"
                                    className="form-control workflow-input"
                                    name="outputdataset"
                                    data-column="outputdataset"
                                    maxLength="250"
                                    placeholder="Enter output dataset"
                                    value={searchParams.get('outputdataset') || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="workflow-form-actions">
                            <button
                                id="resetBtn"
                                type="button"
                                className="workflow-btn workflow-btn-warning"
                                onClick={handleReset}
                            >
                                <i className="bi bi-arrow-counterclockwise me-2"></i>
                                Reset
                            </button>
                            <button
                                id="downloadCsvBtn"
                                type="button"
                                className="workflow-btn workflow-btn-success"
                            >
                                <i className="bi bi-download me-2"></i>
                                Download as CSV
                            </button>
                            <button
                                id="resetBtn"
                                type="button"
                                className="workflow-btn workflow-btn-refresh"
                                onClick={handleRefresh}
                            >
                                <i className="bi bi-arrow-clockwise me-2"></i>
                                Refresh Data
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}