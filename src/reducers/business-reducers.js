const initialState = {
  businessList:[],
  selectedBusinessIdsList:[],
  isPending: false
};
  
export default (state = initialState, action) => {

  switch (action.type) {
    case "SELECT_BUSINESS":
          return Object.assign({}, state, { selectedBusinessIdsList: [...state.selectedBusinessIdsList, action.businessId] });
    case "DESELECT_BUSINESS":
          return Object.assign({}, state, { selectedBusinessIdsList: state.selectedBusinessIdsList.filter(itm => itm !== action.businessId) });
    case "FETCH_BUSINESS_LIST":
          return Object.assign({}, state, { isPending: true });
    case "FETCH_BUSINESS_LIST_SUCCESS":
          return Object.assign({}, state, { isPending: false,  businessList: action.businesses });
    default:
          return state
  }
}