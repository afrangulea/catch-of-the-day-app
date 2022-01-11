import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  loadSampleFishes = () => {
    alert("samples are loading");
    console.log("samples");
  };

  render() {
    return (
      <div className="inventory">
        <h2>Inventory </h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load samples</button>
      </div>
    );
  }
}
export default Inventory;
