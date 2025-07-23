import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllWorkflows, getWorkflowsByQuery } from "../../Services/WorkflowService.js";
import Header from '../Header/Header.js';
import "./Services.css";

const Services = () => {
        return (
        <section>
            <Header title="WM Workflow" />
        </section>
);
};

export default Services;