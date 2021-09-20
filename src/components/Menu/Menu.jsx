import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

export class Menu extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar sidebar-light-primary elevation-2">

                    {/* Brand Logo */}
                    <NavLink to="/paginaprincipal" className="brand-link">
                    <img src="dist/img/CEF.png" alt="CPT" className="brand-image " style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">CPT Softwares</span>
                    </NavLink>
                    
                   
                        {/* Sidebar Menu */}
                        <nav className="mt-5">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library */}

                                <li className="nav-item">

                                    <NavLink to="/paginaprincipal" className="nav-link">
                                        <i className="nav-icon fas fa-home" />
                                        <p>
                                            Página Principal
                                        </p>
                                    </NavLink>
                                </li>

                                <li className="nav-item">

                                    <NavLink to="/listar" className="nav-link">
                                        <i className="nav-icon fas fa-list" />
                                        <p>
                                            Listar
                                        </p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">

                                    <NavLink to="/contato" className="nav-link">
                                        <i className="nav-icon fas fa-headset" />
                                        <p>
                                            Contato
                                        </p>
                                    </NavLink>
                                </li>


                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                   
                </aside>
            </div>

        )
    }
}

export default Menu
