import React from 'react';
import Header from './Header';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import Home from '../router/Home';
import User from '../router/User';
import Detail from '../router/Detail';
export default () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path={"/"} exact component={Home}></Route>
                <Route path={"/user"} exact component={User}></Route>
                <Route path={"/movie/:naver_code"}  exact component={Detail}></Route>
            </Switch>
        </Router>
    );
};