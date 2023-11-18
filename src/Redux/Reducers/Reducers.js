const initialstate = {
  carts: [],
};

const performtask = (state = initialstate, action) => {
  switch (action.type) {
    case "Add_to_cart":
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };

    default:
      return state;
  }
};


export default performtask