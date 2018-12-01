const initialState = {
    orders: [],
    isPending: false
  }
  
  export default function ordersReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_ORDER":
        return Object.assign({}, state, {
            orders: [...state.orders, action.currentOrder]
        })
      default:
        return state
    }
  }