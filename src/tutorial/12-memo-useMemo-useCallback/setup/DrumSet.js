import React, { Component } from "react";

export default class DrumSet extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress = (event) => {
    console.log(event.key);
    if (
      event.key === "q" ||
      event.key === "w" ||
      event.key === "e" ||
      event.key === "a" ||
      event.key === "s" ||
      event.key === "d" ||
      event.key === "z" ||
      event.key === "x" ||
      event.key === "c"
    ) {
      this.myRef.current.play();
      console.log("key pressed");
    }
  };
  handleClick = (event) => {
    const audio = event.target.children[0];
    audio.play();
  };
  render() {
    return (
      <div>
        <div id="drum-machine" className="containerx box-middle">
          <div id="display" onKeyDown={this.handleKeyPress} tabIndex={0}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <button type="button" className="drum-pad" id="Heater-1">
                    Q
                    <audio
                      className="clip"
                      id="Q"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                      type="audio/mpeg"
                      ref={this.myRef}
                    ></audio>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
