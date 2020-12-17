import React from 'react';
import { hyphenate } from "hyphen/en";

class Card extends React.Component {
    constructor(props){
        super(props);
        this.cardRef = React.createRef();
        this.flipCard = this.flipCard.bind(this);
    }

    flipCard() {
        const x = this.cardRef.current.getBoundingClientRect().left;
        const y = this.cardRef.current.getBoundingClientRect().top;
        console.log(x, y, this.props.promptGroup);
        this.props.flipCard();
    }

    render() {
        return (
            <div ref={this.cardRef} className={this.props.flipped ? "Card flipped" : "Card"} onClick={this.flipCard}>
                <div className="faces relative h-full transition-all duration-500">
                    <div className="front bg-pink-50 px-6 pb-32 justify-center font-serif text-center text-red-400 uppercase tracking-widest">
                        <h2 className="prompt-group flex items-center h-24 p-4 border-4 border-double border-red-200 rounded-sm">{this.props.promptGroup}</h2>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class FlipCard extends React.Component {
    constructor(props){
        super(props);
        this.flipCard = this.flipCard.bind(this);
        this.state = {
            prompt: "",
            flipped: false
        };
    }

    flipCard() {
        this.setState({
            flipped: true
        });
    }

    componentDidMount() {
        hyphenate(this.props.prompt).then(result => {
            this.setState({
                prompt: result
            });
        });
        setTimeout(this.flipCard, 10);
    }

    render() {
        return(
            <Card flipCard={()=>{}} promptGroup={this.props.promptGroup} flipped={this.state.flipped} >
                <div className="back justify-between bg-white px-4 py-6 font-serif text-red-400">
                    <div className="divide-y divide-red-200">
                        <h2 className="prompt-group pb-4 uppercase text-center">{this.props.promptGroup}</h2>
                        <p className="prompt pt-3 text-xl">{this.props.prompt}</p>
                    </div>
                    <div className="self-center w-4 h-4 rounded-full border border-red-300 bg-red-100"></div>
                </div>
            </Card>
        );
    }
}

export { Card, FlipCard };