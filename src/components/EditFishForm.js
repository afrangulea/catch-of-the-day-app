import React from "react";
import AddFishForm from "./AddFishForm";

class EditFishForm extends React.Component {
  handleChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    //update fishes
    //copy of current fish
    const updatedFish = {
      ...this.props.fish,
      [event.target.name]: event.target.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          value={this.props.fish.price}
          onChange={this.handleChange}
        />
        <select
          type="text"
          name="status"
          value={this.props.fish.status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>

        <textarea
          type="text"
          name="desc"
          value={this.props.fish.desc}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="image"
          value={this.props.fish.image}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default EditFishForm;
