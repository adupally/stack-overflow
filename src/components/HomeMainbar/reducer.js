const reducer = (state,action) => {
    switch(action.type){
        case "SET_LOADING":
            return {
                ...state,
                isLoading:true,
            };
        case "GET_QUESTIONS":
            return {
                ...state,
                isLoading:false,
                items : action.payload.items,

            };

        case "SEARCH_QUERY":
            return {
                ...state,
                title: action.payload,
                };
        case "INTERESTING_QUERY":
            return {
                ...state,
                title: action.payload,
                };
        case "FEATURE_QUERY":
            return {
            ...state,
            title: action.payload,
            };
        case "HOT_QUERY":
            return {
                ...state,
                title: action.payload,
            };
        case "MONTH_QUERY":
            return {
                ...state,
                todate: action.payload,
                };
        case "WEEK_QUERY":
            return {
                ...state,
                todate: action.payload,
                };
           
        default:
            return state;
    }
};

export default reducer
