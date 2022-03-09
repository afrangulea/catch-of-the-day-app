import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  //Constructor function is a Method that will run before StorePicker component is created
  //   constructor() {
  //     super();
  //     this.goToStore = this.goToStore.bind(this);
  //     console.log("before component creation");
  //   }

  //create a refference
  myInput = React.createRef();

  goToStore = (event) => {
    //1. Stop form from submitting
    event.preventDefault();

    //2. Get text from input (without touching the DOM)
    const storeName = this.myInput.current.value;

    //3. Change URL with store name
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please select store</h2>
        <input
          type="text"
          ref={this.myInput}
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
