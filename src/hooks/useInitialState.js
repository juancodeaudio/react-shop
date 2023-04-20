import { useState } from "react";

const initialState = {
  cart: [],
  total: 0,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    if (!state.cart.includes(payload)) {
      setState({
        ...state,
        cart: [...state.cart, payload],
        total: state.total + payload.price,
      });
    }
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
      total: state.total - payload.price,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export { useInitialState };
