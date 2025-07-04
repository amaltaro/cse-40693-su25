export default function WorkflowForm() {
    console.log("Executing WorkflowForm module");

    return (
        <section>
    <div className="container-fluid bg-secondary text-white text-left">
      <div className="row align-items-left" style={{border: 'thick solid #deddca'}}>
        <div className="row">
          <div className="col">
            <p className="alumni-sans-sc-h2">
              This page will contain a form to be submitted to the backend,
              retrieve data from the database and show the data. Type in any
              field to filter the table below.
            </p>
          </div>
        </div>
        {/* the action needs to be fixed
        <form action="#" method="get">*/}
        <form method="GET">
          <div className="row">
            <div className="col">
              Campaign:
              <input
                type="text"
                className="form-control filter-input"
                name="campaign"
                data-column="campaign"
                size="25"
                maxLength="100"
                placeholder="Enter campaign"
              />
            </div>
            <div className="col">
              Type:
              <input
                type="text"
                className="form-control filter-input"
                name="type"
                data-column="type"
                size="25"
                maxLength="30"
                placeholder="Enter type"
              />
            </div>
            <div className="col">
              Status:
              <input
                type="text"
                className="form-control filter-input"
                name="status"
                data-column="status"
                size="25"
                maxLength="30"
                placeholder="Enter status"
              />
            </div>
            <div className="col">
              Workflow:
              <input
                type="text"
                className="form-control filter-input"
                name="workflow"
                data-column="workflow"
                size="25"
                maxLength="150"
                placeholder="Enter workflow"
              />
            </div>
            <div className="col">
              Agent:
              <input
                type="text"
                className="form-control filter-input"
                name="agent"
                data-column="agent"
                size="25"
                maxLength="50"
                placeholder="Enter agent"
              />
            </div>
            <div className="col">
              Team name:
              <input
                type="text"
                className="form-control filter-input"
                name="teamname"
                data-column="teamname"
                size="25"
                maxLength="50"
                placeholder="Enter team"
              />
            </div>
            <div className="col">
              Site:
              <input
                type="text"
                className="form-control filter-input"
                name="site"
                data-column="site"
                size="25"
                maxLength="50"
                placeholder="Enter site"
              />
            </div>
            <div className="col">
              Input Dataset:
              <input
                type="text"
                className="form-control filter-input"
                name="inputdataset"
                data-column="inputdataset"
                size="25"
                maxLength="250"
                placeholder="Enter input data"
              />
            </div>
            <div className="col">
              Output Dataset:
              <input
                type="text"
                className="form-control filter-input"
                name="outputdataset"
                data-column="outputdataset"
                size="25"
                maxLength="250"
                placeholder="Enter output data"
              />
            </div>

            <div className="row">
              <div className="col-12">
                <button
                  id="sortBtn"
                  type="button"
                  className="btn btn-primary mt-3 mb-2 me-2"
                >
                  <i className="bi bi-funnel"></i> Sort
                </button>
                <button
                  id="resetBtn"
                  type="button"
                  className="btn btn-warning mt-3 mb-2 me-2"
                >
                  <i className="bi bi-arrow-counterclockwise"></i> Reset
                </button>
                <button
                  id="downloadCsvBtn"
                  type="button"
                  className="btn btn-success mt-3 mb-2"
                >
                  <i className="bi bi-download"></i> Download as CSV
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

        </section>
    );
}