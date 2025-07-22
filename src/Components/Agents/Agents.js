import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllWorkflows, getWorkflowsByQuery } from "../../Services/WorkflowService.js";
import Header from '../Header/Header.js';
import "./Agents.css";

const Agents = () => {
        return (
        <section>
            <Header title="WM Workflow" />
        </section>
);
};

export default Agents;