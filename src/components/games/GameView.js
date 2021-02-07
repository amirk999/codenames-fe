import React from 'react';
import { connect } from 'react-redux';

import { getGameDetails, playCard } from '../../actions';
import Card from '../Card';

class GameView extends React.Component {
    componentDidMount() {
        this.props.getGameDetails(this.props.match.params.id);
    }

    renderGameStatus(status) {
        switch (status) {
            case 0:
                return 'In Progress';
            case 1:
                return 'Red Won';
            case 2:
                return 'Blue Won';
            default:
                return 'Error';
        }
    }

    renderCurrentTurn(turn) {
        switch (turn) {
            case 1:
                return 'Red';
            case 2:
                return 'Blue';
            default:
                return 'Error';
        }
    }

    onPlayCard = (cardDetails) => {
        this.props.playCard(cardDetails);
    }

    renderCards() {
        if(!this.props.cards) {
            return null;
        }
        return this.props.cards.map((card) => {
            return (
                <div key={card.id} className="col">
                    <Card details={card} onPlayCard={this.onPlayCard} />
                </div>);
        });
    }

    render() {
        return (
            <div>
                <div><strong>Game Status: </strong>{this.renderGameStatus(this.props.status)}</div>
                <div><strong>Blue Cards Remaining: </strong>{this.props.blue_remaining}</div>
                <div><strong>Red Cards Remaining: </strong>{this.props.red_remaining}</div>
                <div><strong>Current Turn: </strong>{this.renderCurrentTurn(this.props.current_turn)}</div>
                <div className="row row-cols-5">
                    {this.renderCards()}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { ...state.game };
}

export default connect(mapStateToProps, { getGameDetails, playCard })(GameView);