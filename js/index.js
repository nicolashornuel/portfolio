
import Navbar from "./classes/Navbar.js";

function createNavbar() {
        const tabs = [
            {
                name: 'My Projects',
                href: 'my-projects'
            }
        ]
        const navbar = new Navbar(tabs)
}

createNavbar();

