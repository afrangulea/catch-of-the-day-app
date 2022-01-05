import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
    console.log("store");
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please select store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit store</button>
      </form>
    );
  }
}

export default StorePicker;
