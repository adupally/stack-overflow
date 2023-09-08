import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

let API = "https://api.stackexchange.com/2.3/search?pagesize=6&fromdate=1690848000&";
let DAPI = "&order=desc&sort=activity&"
let LAPI = "&site=stackoverflow"
let initialState ={
    isLoading:true,
    tags:"",
    title:"Angular",
    todate:"1692835200",
    view_count:0,
    answer_count:0,
    items:[],
};

const AppContext = React.createContext();
const AppProvider = ({children}) => {

    const [state ,dispatch ] = useReducer(reducer, initialState);
    const fetchApiData =async (url) => {
        dispatch({type:"SET_LOADING"});
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type:"GET_QUESTIONS",
            payload:{
                items: data.items,
            },
        });
        } catch(error){
            console.log(error);
        }
    };

    const searchPost = (searchQuery) =>{
        dispatch({
        type:"SEARCH_QUERY",
        payload: searchQuery,
     });
    };
    const weekPost = (weekQuery) =>{
        dispatch({
        type:"WEEK_QUERY",
        payload: weekQuery,
     });
    };
    const monthPost = (monthQuery) =>{
        dispatch({
        type:"MONTH_QUERY",
        payload: monthQuery,
     });
    };
    const hotPost = (hotQuery) =>{
        dispatch({
        type:"HOT_QUERY",
        payload: hotQuery,
     });
    };
    const featurePost = (featureQuery) =>{
        dispatch({
        type:"FEATURE_QUERY",
        payload: featureQuery,
     });
    };
    const interestingPost = (interestingQuery) =>{
        dispatch({
        type:"INTERESTING_QUERY",
        payload: interestingQuery,
     });
    };

    
    useEffect(() =>{
        if (state.title) {
        fetchApiData(`${API}todate${state.todate}${DAPI}intitle=${state.title}${LAPI}`);
    }
    else{
        fetchApiData(`${API}intitle=$Angular&${LAPI}`); 
    }
},[state.title,state.todate]);

    return (
         <AppContext.Provider  value={{ ...state , searchPost,weekPost,monthPost,interestingPost, featurePost,hotPost }}>
        {children}
        </AppContext.Provider>
    );
    
};

const useGlobalContext = () => {
    return useContext(AppContext);

 };
export  {AppContext, AppProvider , useGlobalContext };

