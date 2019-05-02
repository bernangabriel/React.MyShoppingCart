import React from "react";
import ItemAction from "./ItemAction";

const Item = props => {
  const { item } = props;
  return (
    <tr>
      <td>
        <b className="label-title">{item.title}</b>
        <p className="label-description">{item.description}</p>
      </td>
      <td>
        <ItemAction item={item} {...props} />
      </td>
      <td className="text-center">{item.stock}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <button type="button" className="btn btn-danger btn-sm">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default Item;
