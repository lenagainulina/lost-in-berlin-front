
function selectBusiness(business) {
    return {
      type: "SELECT_CURRENT_BUSINESS",
      business: business
    }
}
function deselectBusiness(business) {
    return {
      type: "DESELECT_CURRENT_BUSINESS",
      business: business
    }
}

function fetchBusinessList() {
    return {
      type: "FETCH_BUSINESS_LIST",
    }
}

function fetchBusinessListSuccess(businesses) {
    
    return {
      type: "FETCH_BUSINESS_LIST_SUCCESS",
      businesses: businesses
    }
}

function fetchBusinessListFailure(error) {
    return {
      type: "FETCH_BUSINESS_LIST_FAILURE",
      error: error
    }
}

function fetchBusinessListAsync(){
   
    return function(dispatch){
        dispatch(fetchBusinessList())
        fetch('api/businesses', {
            method: 'get'
        }).then(function(response) {
      
            response.json().then(actualData => {
                dispatch(fetchBusinessListSuccess(actualData));
            }).catch(jsonParsingError => {
                dispatch(fetchBusinessListFailure(jsonParsingError));    
            })
        }).catch(function(error) {
            debugger;
            dispatch(fetchBusinessListFailure(error));
        })
    }

}  

export default {
    selectBusiness,
    deselectBusiness,
    fetchBusinessListAsync
}