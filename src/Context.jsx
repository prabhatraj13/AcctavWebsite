import React, { useContext, useReducer } from "react";
import reducer from "./Reducer";
import { useEffect } from "react";

// create a context  (warehouse)
// Provider  (when consumer ask any data then provider takes data from warehouse and give it to the consumer)
// consumer  / useContext

const AppContext = React.createContext();

const API = "http://localhost:3000/blog";

const intialState = {
    name:"",
    image:"",
    services:[],
};


const AppProvider = ({ children }) => {

    const[state, dispatch] = useReducer(reducer, intialState);

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name:"ACCTAV TECHNOLOGIES",
                image : "./images/hero.svg" ,         
            },
        });
    };
    
    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name : "ACCTAV TECHNOLOGY PVT. LTD.",
                image : "./images/about.svg",        
            },
        });
    };
    
    // to get the api data
    const getServices = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch ({ type : "GET_SERVICES", payload : data })
        } catch (error) {
            console.log(error);
        }
    }


    // to call the API

    useEffect(() => {
      getServices(API);
    }, [])
    

    // return <AppContext.Provider value="Acctav">{children}</AppContext.Provider>;
    return (
    <AppContext.Provider value={{ ...state, updateHomePage,updateAboutPage }}>
        {children}
    </AppContext.Provider>
    );
};

// global custom hook

const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};

