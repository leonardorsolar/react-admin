import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

export class Login extends Component {
    render() {
        return (
            <div style={{ background: 'white' }} className="hold-transition login-page ">
                <div className="login-box">
                    {/* /.login-logo */}
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <p className="h3"><b>CPT</b></p>
                            <p className="h4">Controle Econômico e Financeiro</p>

                        </div>
                        <div className="card-body">
                            <p className="login-box-msg">Acesse a sua conta</p>
                            <form action="../../index3.html" method="post">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">
                                                Lembra a senha
                                            </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">


                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <div className="social-auth-links text-center mt-2 mb-1">

                            <NavLink to="/paginausuario" className="brand-link">
                            <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                    </NavLink>



                            </div>
                            {/* /.social-auth-links */}
                            <p className="mb-1">
                                <a href="forgot-password.html">Esqueci a minha senha</a>
                            </p>
                            <p className="mb-0">
                                <a href="register.html" className="text-center">Registre uma nova conta</a>
                            </p>

                            <div className="row mt-2">
                                    <div className="col-6">
                                        <a href="#" className="btn btn-block btn-secondary">
                                            <i className="fab fa-facebook mr-2" /> Entar com Facebook
                                        </a>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-6">
                                        <a href="#" className="btn btn-block btn-secondary">
                                            <i className="fab fa-google-plus mr-2" /> Entrar com Google+
                                        </a>

                                    </div>
                                    {/* /.col */}
                                </div>
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>
                {/* /.login-box */}
            </div>

        )
    }
}

export default Login
