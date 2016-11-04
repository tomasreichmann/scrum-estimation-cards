import React, { Component, PropTypes } from 'react';
import s from './ScrumCard.scss';
import cx from 'classnames';

class ScrumCard extends Component{

  constructor(){
    super();

    console.log(this.props);

    this.state = {};
    this.state.faceUp = true;
    this.state.angle = 0;

  }

  getInitialState(){
    console.log("getInitialState");
    return {
      faceUp: this.props.faceUp !== undefined ? this.props.faceUp : true,
      angle: this.props.angle !== undefined ? this.props.angle : true
    }
  }

  flip(faceUp){
    this.setState({
      faceUp: !this.state.faceUp
    });
  }

  rotate(angle){
    return;
    if( angle == "random" || angle === undefined ){
      angle = Math.floor( ( Math.random() - 0.5 ) * 180 * 2 );
    }
    this.setState({
      angle: angle
    })
  }

  render() {
    var image = this.props.graphics && <img src={ this.props.graphics } />;
    var extras = {};

    if( this.state.angle != 0 ){
      extras.style = {
        transform: "rotateZ(" + this.state.angle + "deg)"
      }
    }

    var cardClick = () => { this.rotate() };

    return <div
      className={ s.card + " " + ( this.state.faceUp ? s.cardUp : s.cardDown) }
      onDoubleClick={ cardClick } onClick={ this.flip } {...extras}
    >
      <div className="card-frontFace" >
        <div className="card-frontFace-value" >{this.props.children}</div>
      </div>
      <div className="card-backFace" >
        <div className="card-backFace-symbol" >&#5801;</div>
      </div>
    </div>
  }

}

export default ScrumCard;
