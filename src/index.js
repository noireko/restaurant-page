const btnMenu = document.getElementById("btn-menu");
const btnHome = document.getElementById("btn-home");
const btnContacts = document.getElementById("btn-contactos");


import "./styles.css";
import firstLoad from "./firstload.js";
import cargarMenu from "./menu.js";
import cargarHome from "./cargarHome.js";
import cargarContact from "./cargarContacts.js";

firstLoad();
btnMenu.addEventListener("click", cargarMenu)
btnHome.addEventListener("click", cargarHome)
btnContacts.addEventListener("click", cargarContact)