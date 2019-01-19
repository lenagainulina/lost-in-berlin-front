const fillCurrentOrder = orderData => ({ type: "FILL_CURRENT_ORDER", currentOrder: orderData });
const selectBusiness = businessId => ({ type: "SELECT_BUSINESS", businessId: businessId });
const deselectBusiness = businessId => ({ type: "DESELECT_BUSINESS", businessId: businessId });
const fetchBusinessList = () => ({ type: "FETCH_BUSINESS_LIST" });
const fetchBusinessListSuccess = itms => ({ type: "FETCH_BUSINESS_LIST_SUCCESS", businesses: itms });
const fetchBusinessListFailure = err  => ({  type: "FETCH_BUSINESS_LIST_FAILURE", error: err });

const fetchBusinessListAsync = () => (
    dispatch => {
        dispatch(fetchBusinessList());

        // TODO: remove when fetching real data

        const fakeBusinessData = [
            {   'busnId'       : 'bln00001',
                'imageUrl'     : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
                'name'         : 'Burgundy Flemming',
                'description'  : 'Schloss Scharlottenburg',
                'selected'     : false
            },
            {   'busnId'       : 'bln00002',
                'imageUrl'     : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg',
                'name'         : 'Migel Huan Sanchos',
                'description'  : 'Spanish embassy',
                'selected'     : false
            },
            {   'busnId'       : 'bln00003',
                'imageUrl'     : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg',
                'name'         : 'Antoine de Saint-Exupery',
                'description'  : 'Charming moon and a poor small boyg',
                'selected'     : false
            },
            {   'busnId'       : 'bln00004',
                'imageUrl'     : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample121.jpg',
                'name'         : 'Karl Marks',
                'description'  : 'Ostbahnhof als Kapitalanlage',
                'selected'     : false
            }
        ];

        dispatch(fetchBusinessListSuccess(fakeBusinessData))

        // TODO: uncomment for interaction with live API and fetching real data
        /*
        fetch('api/businesses', { method: 'get' })
            .then(resp =>
                resp
                    .json()
                    .then(actualData => dispatch(fetchBusinessListSuccess(actualData)))
                    .catch(jsonParsingError =>  dispatch(fetchBusinessListFailure(jsonParsingError)))
            ).catch(err => dispatch(fetchBusinessListFailure(error)))

            */
    }
);

export default {
    fillCurrentOrder,
    selectBusiness,
    deselectBusiness,
    fetchBusinessListAsync
}