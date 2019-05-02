const getItemList = state => {
  return {
    ...state,
    items: state.items
  };
};

const addQuantity = (state, payload) => {
  console.log(state);
  const _list = state.list.map(item => {
    if (item.id === payload) {
      if (item.added < item.stock) {
        item.added = item.added + 1;
        item.max_stock = false;
      } else {
        item.max_stock = true;
      }
    }
    return item;
  });
  return {
    ...state,
    items: {
      ...state.items,
      list: _list
    }
  };
};

export default {
  getItemList,
  addQuantity
};
