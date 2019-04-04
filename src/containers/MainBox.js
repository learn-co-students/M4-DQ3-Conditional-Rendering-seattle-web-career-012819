import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "profile"
    };
  }

  changeSelected = selection => {
    console.log(selection);
    this.setState({
      selected: selection
    });
  };

  render() {
    let detailsToDisplay;

    switch (this.state.selected) {
      case "profile":
        detailsToDisplay = <Profile />;
        break;

      case "photo":
        detailsToDisplay = <Photos />;
        break;

      case "cocktail":
        detailsToDisplay = <Cocktails />;
        break;

      case "pokemon":
        detailsToDisplay = <Pokemon />;
        break;
      default:
        detailsToDisplay = null;
    }

    return (
      <div>
        <MenuBar
          changeSelected={this.changeSelected}
          selection={this.state.selected}
        />
        {detailsToDisplay}
      </div>
    );
  }
}

export default MainBox;
