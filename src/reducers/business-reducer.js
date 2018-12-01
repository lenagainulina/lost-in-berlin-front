const initialState = {
    selectedBusiness: null,
    BusinessList: [],
    ChosenBusinessList: [],
    //lectionItem: null,
    isPending: false
  }
  
  export default function businessReducer(state = initialState, action) {
    switch (action.type) {
      case "REGISTER_BUSINESS": 
        //
      case "SELECT_CURRENT_BUSINESS":
      debugger;
        return Object.assign({}, state, {
          selectedBusiness: [...state.ChosenBusinessList, action.business]
        })
        case "DESELECT_CURRENT_BUSINESS":
      debugger;
        return Object.assign({}, state, {
          selectedBusiness: state.ChosenBusinessList.pop(action.business)
        })
      case "FETCH_BUSINESS_LIST":
      
        return Object.assign({}, state, {
          isPending: true
        })
      case "FETCH_BUSINESS_LIST_SUCCESS":
      
        return Object.assign({}, state, {
          isPending: false,
          businessList: action.businesses
        })
      
      default:
        return state
    }
  }