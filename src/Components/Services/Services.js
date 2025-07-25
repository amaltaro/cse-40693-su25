import { useEffect, useState } from "react";
import { getAllComponents } from "../../Services/ComponentService.js";
import Header from '../Header/Header.js';
import { initializeTableFeatures } from "../../Services/TableFunctions.js";
import ServiceList from "./ServiceList.js";
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    const [lastRefresh, setLastRefresh] = useState(new Date());

    // Function to load services data
    const loadServices = async () => {
        try {
            const servicesData = await getAllComponents('Service');
            setServices(servicesData);
            setLastRefresh(new Date());
            console.log("services data refreshed:", servicesData.length, "services loaded");
        } catch (error) {
            console.error("Error loading services:", error);
        }
    };

    // Load agents on component mount
    useEffect(() => {
        loadServices();
    }, []);

    // Set up automatic refresh every 10 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            loadServices();
        }, 10000); // 10 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);


    // Initialize table features after agents are loaded and rendered
    useEffect(() => {
        if (services.length > 0) {
            // Use setTimeout to ensure the DOM is updated after the render
            setTimeout(() => {
                initializeTableFeatures();
            }, 10);
        }
    }, [services]);


    return (
        <section>
            <Header title="WM Central Services" />
            {/* Services Monitor Header */}
            <div className="container-fluid workflow-form-section">
                <div className="workflow-form-wrapper">
                    <div className="workflow-form-card">
                        <div className="workflow-form-header">
                            <h3 className="workflow-form-title">
                                <i className="bi bi-arrow-clockwise me-2"></i>
                                Real-time service monitoring with automatic refresh every 10 seconds.
                            </h3>
                            {/* Last refresh time display */}
                            {lastRefresh && (
                                <p className="last-refresh">
                                    <i className="bi bi-clock me-1"></i>
                                    Last refreshed at: {lastRefresh.toLocaleTimeString()}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
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