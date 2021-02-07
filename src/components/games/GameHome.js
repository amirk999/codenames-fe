import { fromPairs } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { findGame } from '../../actions';
import GameForm from './GameForm';

class GameHome extends React.Component {

    onSubmit = (formValues) => {
        this.props.findGame(formValues);
    }

    render() {
        return (
            <div>
                <h1>Find Game</h1>
                <GameForm onSubmit={this.onSubmit} />
            </div>
            
        );
    }
};

export default connect(null, { findGame })(GameHome);