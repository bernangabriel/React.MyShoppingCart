import actionTypes from "./actionTypes";
import actions from "./actions";

const INITIAL_STATE = {
  list: [
    {
      id: 1,
      title: "Solid State Drive",
      description:
        "SAMSUNG 860 EVO Series 2.5 500GB Solid State Drive (SSD) MZ-76E500B/AM",
      image: "ssd_samsung.jpg",
      price: 79.99,
      stock: 3,
      max_stock: false,
      tax: 10,
      added: 0
    },
    {
      id: 2,
      title: "Cooler",
      description:
        "Cooler Master Hyper 212 EVO - CPU Cooler with 120mm PWM Fan",
      image: "cooler.jpg",
      price: 34.99,
      stock: 5,
      tax: 10,
      added: 0
    },
    {
      id: 3,
      title: "Processor Intel",
      description:
        "Intel Core i9-9900K Coffee Lake 8-Core, 16-Thread, 3.6 GHz (5.0 GHz Turbo) LGA 1151 (300 Series)",
      image: "cooler.jpg",
      price: 494.99,
      stock: 2,
      tax: 10,
      added: 0
    }
  ],
  summary: {
    quantity: 1,
    discount: 0,
    delivery: 0,
    subTotal: 0,
    total: 0
  }
};
const itemsReduce = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_ITEM_LIST:
      return actions.getItemList(state);
    case actionTypes.ADD_QUANTITY:
      return actions.addQuantity(state, payload);
    default:
      return state;
  }
};

export default itemsReduce;
