import { useEffect, useState } from "react";
import { getAllComponents } from "../../Services/ComponentService.js";
import Header from '../Header/Header.js';
import { initializeTableFeatures } from "../../Services/TableFunctions.js";
import ServiceForm from "./ServiceForm.js";
import ServiceList from "./ServiceList.js";
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);

    // Initialize table features after workflows are loaded and rendered
    useEffect(() => {

        getAllComponents('Service').then((workflows) => {
            setServices(workflows);
        });

        if (services.length > 0) {
            // Use setTimeout to ensure the DOM is updated after the render
            setTimeout(() => {
                initializeTableFeatures();
            }, 10);
        }
    }, [services]);


    return (
        <section>
            <Header title="WM Workflow" />
            <div className="container-fluid workflow-form-section">
                <ServiceForm />
            </div>


            <div className="container-fluid">
                <div className="table-responsive workflow-table-container">
                    <table
                        id="workflowTable"
                        className="table table-light table-striped table-hover table-bordered table-sm workflow-table"
                    >
                        <thead className="table-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">
                                    Service
                                </th>
                                <th scope="col">
                                    Status
                                </th>
                                <th scope="col">
                                    Timestamp
                                </th>
                                <th scope="col">
                                    createdAt
                                </th>
                                <th scope="col">
                                    updatedAt
                                </th>
                                <th scope="col">
                                    objectID
                                </th>
                            </tr>
                        </thead>
                        <ServiceList workflows={services} />
                    </table>
                </div>
            </div>
        </section>
    );
};
export default Services;