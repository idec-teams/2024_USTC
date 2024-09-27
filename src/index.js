import $ from "jquery";
import "./jquery.nanoscroller.min.js";
import Sidebar from "./sidebar.eft";
import "./nanoscroller.css";
import "./nano.css";
import "./index.css";
const sidebar = new Sidebar({});
sidebar.$mount({ target: document.body });
