import React from "react";
import classnames from "classnames";
class Radio extends React.Component {
  render() {
    return (
      <div
        className={classnames(`vx-radio-con px-1 vx-radio-${this.props.color}`)}
      >
        <input
          type="radio"
          defaultChecked={this.props.defaultChecked}
          value={this.props.value}
          disabled={this.props.disabled}
          name={this.props.name}
          onClick={this.props.onClick}
          onChange={this.props.onChange}
          ref={this.props.ref}
          checked={this.props.checked}
        />
        <span>{this.props.label}</span>
      </div>
    );
  }
}
export default Radio;
