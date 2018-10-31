import React from 'react';
import Avatars from './Avatar'

// import './finisn.css'
const titleStyle = {
    fontWeight: '100',
    fontSize: 'calc(12px + 3vw)',
    color: 'white',
    // position: 'relative',
    marginBottom: '15vh'
};

class Finish extends React.Component{

    state = {
        CurrentPlayers: this.props.listPlayers,
    }
    render() {
        console.log('finish', this.state.CurrentPlayers)
        return (
            <div style={{textAlign:"center"}}>
                <h1 style={titleStyle}>Finish</h1>
                <div className="Avatar_finish">
                    {this.state.CurrentPlayers.map((element,index) => {
                        return(
                            <Avatars isAlive={true} key={index} image={'/img/' + element.id + '.png'} avatar={element.avatar}  player= {element.player} />
                        )}
                    )}
                </div>
        </div>
        )
    }
    
}

export default Finish;