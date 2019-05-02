import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import actionCreators from "./actionCreators";

import { Header } from "../../components/layouts";
import { Items } from "../../components/items";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "My Shopping Cart"
    };

    this.addQuantity = this.addQuantity.bind(this);
  }

  addQuantity(id) {
    this.props.addQuantity(id);
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="container mt-2">
          <Items list={this.props.items.list} addQuantity={this.addQuantity} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const connectedComp = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);

export default connectedComp;
