import './index.html';
import './job.html';
import './contact.html';
import './almamater.html';
import './about.html';
import './index.scss';


var mobileMenu = require('./modules/menu');

const menuTrigger = document.querySelector(".menu-trigger");
const menu = document.querySelector("nav ul");

mobileMenu(menuTrigger, menu);