export default function ServiceForm() {
    console.log("Executing ServiceForm module");

    const handleRefresh = () => {
        window.location.reload();
    }

    return (
        <section>
            <div className="container-fluid workflow-form-wrapper">
                <div className="workflow-form-card">
                    <div className="workflow-form-header">
                        <h2>Service Form</h2>
                        <p>Monitor services.</p>
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