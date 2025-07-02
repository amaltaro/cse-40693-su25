import {
  html,
  useEffect,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getAllWorkflows } from "../services/workflow.js";
import MainRow from "./main_row.js";

const Main = () => {
  console.log("Executing Main function");
  const [workflows, setWorkflows] = useState([]);

  useEffect(() => {
    getAllWorkflows().then((workflows) => {
      setWorkflows(workflows);
    });
  }, []);

  return html` <${MainRow} workflows=${workflows} /> `;
};

export default Main;
