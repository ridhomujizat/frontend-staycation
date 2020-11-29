import React from "react";
import InputNumber from "elements/Form/InputNumber";

export default class TestInput extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div
          className="row align-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <InputNumber
              max={30}
              onChange={this.handleChange}
              name="value"
              suffix=" night"
              isSufficPlural
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
