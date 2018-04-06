import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// components
import LandingPageContainer from "./containers/LandingPageContainer";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <LandingPageContainer />
      </MuiThemeProvider>
    );
  }
}

export default App;
