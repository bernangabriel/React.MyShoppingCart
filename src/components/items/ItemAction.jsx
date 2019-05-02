import React from "react";

const ItemAction = props => {
  const { item, addQuantity } = props;
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => addQuantity(item.id)}
        disabled={item.max_stock}
      >
        +
      </button>
      <button type="button" className="btn btn-default" disabled>
        {item.added}
      </button>
      <button type="button" className="btn btn-secondary">
        -
      </button>
    </div>
  );
};

export default ItemAction;
