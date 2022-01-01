import axios from 'axios'
import React, { createContext, useContext, useReducer } from 'react'

export const defaultState = {
    individu: [],
    kk: [],
    selectedData: {},
    isEditMode: false,
}

export const Action = {
    Set: 'Set',
    Fetch: 'Fetch',
}

export const DataReducer = (state, action) => {
    switch (action.type) {
        case Action.Set:
            return {
                ...state,
                [action.payload.key]: action.payload.data
            }
        case Action.Fetch:  
            return {
                ...state,
                individu: action.payload.individu,
                kk: action.payload.kk
            }
        default:
            return state
    }
}

const context = createContext();
const setDataIndividu = (dispatch) => {
    return (data) => {
        dispatch({ type: Action.Set, payload: { key: 'individu', data } })
    }
}

const setDataKK = (dispatch) => {
    return (data) => {
        dispatch({ type: Action.Set, payload: { key: 'kk', data } })
    }
}

const setEditMode = (dispatch) => {
    return (data) => {
        dispatch({
             type: Action.Set, 
             payload: { key: 'isEditMode', data } 
        })
    }
}

const selectData = (dispatch) => {
    return (data) => {
        dispatch({ type: Action.Set, payload: { key: 'selectedData', data } })
    }
}

export const useData = () => useContext(context)

export const DataProvider = ({ children, initialState, reducer }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {
        state,
        setDataIndividu: setDataIndividu(dispatch),
        setDataKK: setDataKK(dispatch),
        setEditMode: setEditMode(dispatch),
        selectData: selectData(dispatch),
    }
    return <context.Provider value={value}>{children}</context.Provider>
}
