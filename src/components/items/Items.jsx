import React from "react";
import Item from "./Item";
import "./items.css";

const Items = props => {
  const { list } = props;
  return (
    <table className="table table-strip">
      <thead className="thead-dark">
        <tr>
          <th>Description</th>
          <th>Quantity</th>
          <th>Stock</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => (
          <Item key={item.id} item={item} {...props} />
        ))}
      </tbody>
    </table>
  );
};

export default Items;
