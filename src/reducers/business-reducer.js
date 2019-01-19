const initialState = {
  selectedBusiness: null,
  businessList: [],
  location: "",
  chosenBusinessList: [],
  isPending: false
}

export default function businessReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return Object.assign({}, state, {
        location: action.location
      })
    case "SELECT_BUSINESS":
      return Object.assign({}, state, {
        chosenBusinessList: [...state.chosenBusinessList, action.business]
      })
    case "DESELECT_BUSINESS":
      return Object.assign({}, state, {
        chosenBusinessList: state.chosenBusinessList.filter(it => it != action.business)
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