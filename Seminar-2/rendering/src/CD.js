import React, { Component } from 'react';

class CD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // Initial state, user is not logged in
    };
  }

  // Function to toggle the login state
  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        <h1>Conditional Rendering</h1>
        <button onClick={this.toggleLogin}>
          {isLoggedIn ? 'Logout' : 'Login'} 
        </button>
        {isLoggedIn ? (
          <p>I welcome you</p>
        ) : (
          <p>Click here to Log in</p>
        )}
      </div>
    );
  }
}

export default CD;
