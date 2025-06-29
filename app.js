import {
  html,
  render,
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Main from "./js/components/main.js";

function App() {
  return html`<${Main} />`;
}

render(html` <${App} /> `, document.getElementById("app"));
