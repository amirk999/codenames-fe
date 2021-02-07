import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import GameCreate from './games/GameCreate';
import GameHome from './games/GameHome';
import GameView from './games/GameView';

import history from '../history';

const App = () => {
    return (
        <Router history={history}>
            <div>
                <Header />
                <div className="container-fluid">
                    <Route path="/" exact component={GameHome} />
                    <Route path="/games/new" exact component={GameCreate} />
                    <Route path="/games/play/:id" exact component={GameView} />
                </div>
            </div>
        </Router>
    );
};

export default App;