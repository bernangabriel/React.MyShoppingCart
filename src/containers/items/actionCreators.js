import actionTypes from "./actionTypes";

const getItemList = payload => {
  return {
    type: actionTypes.GET_ITEM_LIST,
    payload: payload
  };
};

const addQuantity = payload => {
  return {
    type: actionTypes.ADD_QUANTITY,
    payload: payload
  };
};

export default {
  getItemList,
  addQuantity
};
