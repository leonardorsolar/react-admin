import React from 'react';
import {  Switch, Route } from 'react-router-dom';

import List from '../pages/Main/User/List/List';
import Login from '../pages/Main/User/index';
import Contato from '../pages/Main/Contato';
import Home from '../pages/Main/Home';
import ListUser from '../pages/Main/ListUser';

// <Route path="/" exact component={Home} />
/*

    */

function Routes() {
    return (
       
        <Switch >
            <Route path="/listar" component={ListUser} />
            <Route path="/paginausuario" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/contato" component={Contato} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
        </Switch>
    

    );
}

export default Routes;