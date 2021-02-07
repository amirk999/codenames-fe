import React from 'react';
import { connect } from 'react-redux';

import GameForm from './GameForm';
import { createGame } from '../../actions';

class GameCreate extends React.Component {
    
    onSubmit = (formValues) => {
        this.props.createGame(formValues);
    };
    
    render() {
        return (
            <div>
                <h1>Create a game</h1>
                <GameForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};

export default connect(null, { createGame })(GameCreate);