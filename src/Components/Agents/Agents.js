import { useEffect, useState } from "react";
import { getAllComponents } from "../../Services/ComponentService.js";
import Header from '../Header/Header.js';
import { initializeTableFeatures } from "../../Services/TableFunctions.js";
import AgentsList from "./AgentsList.js";
import "./Agents.css";

const Agents = () => {
    const [agents, setAgents] = useState([]);
    const [lastRefresh, setLastRefresh] = useState(new Date());

    // Function to load agents data
    const loadAgents = async () => {
        try {
            const agentsData = await getAllComponents('Agent');
            setAgents(agentsData);
            setLastRefresh(new Date());
            console.log("Agents data refreshed:", agentsData.length, "agents loaded");
        } catch (error) {
            console.error("Error loading agents:", error);
        }
    };

    // Load agents on component mount
    useEffect(() => {
        loadAgents();
    }, []);

    // Set up automatic refresh every 10 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            loadAgents();
        }, 10000); // 10 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Initialize table features after agents are loaded and rendered
    useEffect(() => {
        if (agents.length > 0) {
            // Use setTimeout to ensure the DOM is updated after the render
            setTimeout(() => {
                initializeTableFeatures();
            }, 10);
        }
    }, [agents]);

    return (
        <section>
            <Header title="WM Agents" />

            {/* Agents Monitor Header */}
            <div className="container-fluid workflow-form-section">
                <div className="workflow-form-wrapper">
                    <div className="workflow-form-card">
                        <div className="workflow-form-header">
                            <h3 className="workflow-form-title">
                                <i className="bi bi-arrow-clockwise me-2"></i>
                                Real-time agent monitoring with automatic refresh every 10 seconds.
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
                                    Agents
                                </th>
                                <th scope="col">
                                    Status
                                </th>
                                <th scope="col">
                                    Error
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
                        <AgentsList workflows={agents} />
                    </table>
                </div>
            </div>
        </section>
    );
};
export default Agents;