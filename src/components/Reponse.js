import React, {Component} from "react";
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

import './question.css'


class Reponse extends Component {
     verifyReponse = (resp, player) => {
        ((resp === this.props.question.correctAnswer) ?  this.props.response(player , true) : this.props.response(player, false))
        this.setState({selectedValue: ''})
    }

    state = {
        selectedValue: '',
      };
    
      handleChange = event => {
        this.setState({ selectedValue: event.target.value });
      };

      
    
    render() {
        return ( 
            <div className="response">
            <p style={{color: "White", display: 'flex', justifyContent: 'center', fontSize:'20px'}} >{this.props.question.question}</p>
            {/* {this.props.question.ansewers.map((x, index) =>
            <button key={index} onClick={() => this.verifyReponse(index, 1)}>
              {x}
            </button>
            )} */}

                {this.props.question.ansewers.map((x, index) =>
                        <div className="radio">
                      
                      
                        <Radio className="check"
                            checked={this.state.selectedValue === index.toString()}
                            onChange={this.handleChange}
                            value={index.toString()}
                            name="radio-button-demo"
                            aria-label="A"
                        />
                        {x}
                        
                        </div>
                )}
              <br/>
              <div className="button-response" style={{display: 'flex', justifyContent: 'center'}}>
                <Button className="btn-response" onClick={() => this.verifyReponse(parseInt(this.state.selectedValue), 1)} variant="contained">
                    Valid
                </Button>
              </div>
          </div>
          );
    }
}


export default Reponse;

