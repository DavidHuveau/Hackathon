import React from 'react';

import Avatars from './Avatar';


class Finish extends React.Component{

    state = {
        CurrentPlayers: this.props.listPlayers,
    }
    render() {
        console.log('finish', this.state.CurrentPlayers)
        return (
            <div>
                {this.state.CurrentPlayers.map((element,index) => {
                return(
                    <Avatars dead={element.isAlive} className="Avatar_questions" key={index} image={'/img/' + element.id + '.png'} avatar={element.avatar}  player= {element.player} />
                    )
                }
            )}
        </div>
        )
    }
    
}

export default Finish;