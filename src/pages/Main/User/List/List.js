import React from 'react';
import { useState, useEffect } from 'react';

import api from '../../../../services/api';

export default function List() {

    let itemsToRender = [];

    const [listar, setListar] = useState([]);
    const [nome, setNome] = useState('');


    useEffect(() => {

        ListarDados();

    }, []);

    async function ListarDados() {

        const response = await api.get('http://localhost/apiModelo/apireact/listar_clientes_react.php')
        //const response = await api.get('http://aengenhariadesoftware.com.br/cpt/listar_clientes_react.php');


        setListar(response.data.resultado);



        //setNome(response.data.resultado);
        console.log(response); //{data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
        console.log(response.data); //{success: true, resultado: Array(1)}
        console.log(response.data.resultado); // [{…}]
        // console.log(response.data.resultado[0]); // {id: "1", nome: "leonardo", email: "leonardosolar@yahoo.com.br", senha: "123"}
        //console.log(nome); //[{…}]
        console.log(listar); //[{…}]
        // console.log(listar[0]); // {id: "1", nome: "leonardo", email: "leonardosolar@yahoo.com.br", senha: "123"}
        //console.log(listar[0].nome); //leonardo





    }
    /*
            
            const dados = '';
            for (dados in itemsToRender) {
               console.log(dados)
            };
            console.log(dados);
 
   */





    //name[0].nome
    //console.log(listar.response);


    //{listar.map(item => <li>{item.nome}</li>)}



    return (
        <div>

            <div className="content-wrapper">

                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">

                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">listar</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                {/* /.card */}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Listar dados no banco</h3>

                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">



                                        <table id="example1" className="table table-bordered table-striped text-center">

                                        <thead>
                                                <tr >
                                                    <th>ID</th>
                                                    <th>Nome</th>
                                                    <th>E-mail</th>
                                                    <th>Senha</th>
                                                    <th>Permissão</th>
                                                </tr>
                                                </thead>

                                            <tbody>
                                                {

                                                    listar.map((item) => {
                                                        return (
                                                            <tr>

                                                                <td >{item.id}</td>
                                                                <td >{item.nome}</td>
                                                                <td >{item.email}</td>
                                                                <td >{item.senha}</td>
                                                                <td >{item.nivel}</td>

                                                            </tr>
                                                        )
                                                    }
                                                    )

                                                }

                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Nome</th>
                                                    <th>E-mail</th>
                                                    <th>Senha(s)</th>
                                                    <th>Permissão</th>

                                                </tr>
                                            </tfoot>

                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* /.content */}
                {/* /.content-wrapper */}
            </div>

        </div>

    )

}


