import React,{createContext,useReducer} from "react";
import ThemeConstants from './theme'
const initialState=ThemeConstants;
export const Theme=createContext(initialState);

const ThemeProvider=(props)=>{
    const [state,dispatch]=useReducer(()=>{},initialState);
    return (
        <Theme.Provider value={{state,dispatch}}>
            {props.children}
        </Theme.Provider>
    )
}

export default ThemeProvider;