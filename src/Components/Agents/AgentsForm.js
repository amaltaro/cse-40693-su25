export default function AgentsForm() {
    console.log("Executing AgentsForm module");

    const handleRefresh = () => {
        window.location.reload();
    }

    return (
        <section>
            <div className="container-fluid workflow-form-wrapper">
                <div className="workflow-form-card">
                    <div className="workflow-form-header">
                        <h2>Agents Form</h2>
                        <p>Monitor agents.</p>
                    </div>

                    <form method="GET" className="workflow-form">
                        <div className="workflow-form-grid">
                        <div className="workflow-form-actions">
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
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
