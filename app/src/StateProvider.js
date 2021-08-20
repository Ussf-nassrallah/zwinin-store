// setup data layers => Products + Categories
// we need tihs to track the basket
import React, { createContext, useContext, useReducer } from 'react'

// this is the data layer
export const StateContext = createContext();

// biuld a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);