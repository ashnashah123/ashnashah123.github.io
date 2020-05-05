import React from "react";

const NavBarComponent = () =>
    <div>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
            <a className="navbar-brand wbdv-label" href="/">
                Ashna Shah
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">About me<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Experiences<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/search">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/help">Interests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/help">Contact Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/help">Resume</a>
                    </li>
                </ul>

            </div>
        </nav>
    </div>

export default NavBarComponent