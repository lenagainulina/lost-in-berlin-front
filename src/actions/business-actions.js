
function changeLocation(location) {
    return {
        type: "CHANGE_LOCATION",
        location: location
    }
}

function selectBusiness(business) {
    return {
        type: "SELECT_BUSINESS",
        business: business
    }
}
function deselectBusiness(business) {
    return {
        type: "DESELECT_BUSINESS",
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

function fetchBusinessListAsync(locationStr) {

    return function (dispatch) {
        console.log("Acttions " + locationStr);
        dispatch(fetchBusinessList())
        if (locationStr == "") {
            console.log("We are here")
            //           locationStr = "berlin"
            dispatch(fetchBusinessListSuccess([]));
        } else {
            console.log("We are here1")
            // fetch('api/businesses', {
            fetch(`/api/businesses?location=${locationStr}`, {
                method: 'get'
            }).then(function (response) {

                response.json().then(actualData => {
                    dispatch(fetchBusinessListSuccess(actualData));
                }).catch(jsonParsingError => {
                    dispatch(fetchBusinessListFailure(jsonParsingError));
                })
            }).catch(function (error) {
                debugger;
                dispatch(fetchBusinessListFailure(error));
            })
        }
    }

}

export default {
    changeLocation,
    selectBusiness,
    deselectBusiness,
    fetchBusinessListAsync
}