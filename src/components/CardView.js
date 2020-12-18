import React from 'react';
import { FlipCard } from './Card.js';

class CardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className="overlay">
                <FlipCard pos={this.props.pos} promptGroup={this.props.promptGroup} prompt="If your life were a movie, what musician or band would create the soundtrack?" />
                <div className="next fixed flex h-16 w-16 items-center justify-center top-1/2 transform translate-x-2/4 -translate-y-2/4 bg-white text-4xl text-red-400 font-sans font-extralight rounded-full shadow-2xl opacity-75 transition-opacity cursor-pointer">&rarr;</div>
            </div>
        );
    }
}

export default CardView;