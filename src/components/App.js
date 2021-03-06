import React from "react";
import Header from "./Header.js";
import Order from "./Order.js";
import Inventory from "./Inventory.js";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;

    //first reinstate localStorage
    const localStorageRef = localStorage.getItem(params.storeID);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeID}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  componentDidUpdate() {
    const storeName = this.props.match.params.storeID;
    // console.log(this.state.order);
    localStorage.setItem(storeName, JSON.stringify(this.state.order));
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    console.log(fish);
    //1. Take copy of existing state
    const fishes = { ...this.state.fishes };

    //2. Add the new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;

    //3. Set the new fishes object to state
    this.setState({
      fishes: fishes,
    });
  };

  updateFish = (key, updateFish) => {
    const fishes = { ...this.state.fishes };

    fishes[key] = updateFish;

    this.setState({ fishes });
  };

  deleteFish = (key) => {
    //1. copy of state
    const fishes = { ...this.state.fishes };

    //2. delete fish
    fishes[key] = null;

    //3.update the state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    //1. Take a copy of state
    const order = { ...this.state.order };

    //2. Add to order, or update the number of menu items in the order

    order[key] = order[key] + 1 || 1;

    //3. setState to update the state object

    this.setState({ order });
  };

  removeFromOrder = (key) => {
    //1. Take a copy of state
    const order = { ...this.state.order };

    //2. Remove from order, or update the number of menu items in the order

    delete order[key];

    //3. setState to update the state object

    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                detalii={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
