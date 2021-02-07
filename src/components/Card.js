import React from 'react';
import './Card.css';

class Card extends React.Component {

    calculateCardClass() {
        // Return gray for all available cards
        if(this.props.details.status === 2) {
            return 'text-dark bg-light';
        }

        // If a card was revealed, then display its color
        switch (this.props.details.color) {
            case 1:
                return 'text-white bg-danger';
            case 2:
                return 'text-white bg-primary';
            case 3:
                return 'text-white bg-dark';
            case 4:
                return 'text-white bg-secondary';
            default:
                return 'text-white bg-secondary';
        }
    }

    onPlayCards = () => {
        const cardDetails = this.props.details;
        if(cardDetails.status === 2) {
            this.props.onPlayCard({
                id: cardDetails.game_id,
                index: cardDetails.index
            });
        }
    }

    render() {
        const cardDetails = this.props.details;
        return (
            <div 
                className={`card ${this.calculateCardClass()}`}
                onClick={this.onPlayCards}
            >
                <div className="card-body">
                    <h5 className="card-title">{cardDetails.body}</h5>
                </div>
            </div>
        );
    }
}

export default Card;