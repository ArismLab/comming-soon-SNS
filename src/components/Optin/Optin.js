import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
  modal() {
    // open link
    window.open("https://discord.com/invite/hJqvznN6", "_blank");
  }

  render() {
    return (
      <div className="optin">
        <p>Want to be the first to know when we launch?</p>
        <button onClick={this.modal}>Click Me</button>
      </div>
    );
  }
}

export default Optin;
