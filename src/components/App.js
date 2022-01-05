import React from "react";
import Header from "./Header.js";
import Order from "./Order.js";
import Inventory from "./Inventory.js";
class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    console.log("adding fish");
    //1. Take copy of existing state
    const fishes = { ...this.state.fishes };

    //2. Add the new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;

    //3. Set the new fishes object to state
    this.setState({
      fishes: fishes,
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" />
        </div>

        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
