const btnMenu = document.getElementById("btn-menu");
const btnHome = document.getElementById("btn-home");

import "./styles.css";
import firstLoad from "./firstload.js";
import cargarMenu from "./menu.js";
import cargarHome from "./cargarHome.js";

firstLoad();
btnMenu.addEventListener("click", cargarMenu)
btnHome.addEventListener("click", cargarHome)