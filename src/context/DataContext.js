import axios from 'axios'
import React, { createContext, useContext, useReducer } from 'react'

export const defaultState = {
    individu: [],
    kk: [],
    selectedDataIndividu: {},
    isEditMode: false,
    selectedUser: {},
    isEditUserMode: false,
    users: [],
    roles: [],
    selectedRole: {},
}

export const Action = {
    Set: 'Set',
    Fetch: 'Fetch',
    RemoveUser: 'RemoveUser',
    Clean: 'Clean',
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
        case Action.RemoveUser:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload.id)
            }
        case Action.Clean:
            return {
                ...state,
                ...defaultState
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

const setDataKk = (dispatch) => {
    return (data) => {
        dispatch({ type: Action.Set, payload: { key: 'kk', data } })
    }
}

const setUsers = (dispatch) => {
    return (data) => {
        dispatch({ type: Action.Set, payload: { key: 'users', data } })
    }
}

const setRoles = (dispatch) => {
    return (data) => {
        dispatch({ type: Action.Set, payload: { key: 'roles', data } })
    }
}

const removeUser = (dispatch) => {
    return (id) => {
        dispatch({ type: Action.RemoveUser, payload: { id: id } })
    }
}

const setEditUserMode = (dispatch) => {
    return (data) => {
        dispatch({
             type: Action.Set, 
             payload: { key: 'isEditUserMode', data } 
        })
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

const selectDataIndividu = (dispatch) => {
    return (data) => {
        dispatch({ type: Action.Set, payload: { key: 'selectedDataIndividu', data } })
    }
}

const selectDataKk = (dispatch) => {
    return (data) => {
        dispatch({ type: Action.Set, payload: { key: 'selectedDataKk', data } })
    }
}

const selectUser = (dispatch) => {
    return (data) => {
        dispatch({ type: Action.Set, payload: { key: 'selectedUser', data } })
    }
}

const cleanState = (dispatch) => {
    return () => {
        dispatch({ type: Action.Clean })
    }
}
export const useData = () => useContext(context)

export const DataProvider = ({ children, initialState, reducer }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {
        state,
        setDataIndividu: setDataIndividu(dispatch),
        setDataKk: setDataKk(dispatch),
        setEditMode: setEditMode(dispatch),
        selectDataIndividu: selectDataIndividu(dispatch),
        selectDataKk: selectDataKk(dispatch),
        setUsers: setUsers(dispatch),
        selectUser: selectUser(dispatch),
        removeUser: removeUser(dispatch),
        setEditUserMode: setEditUserMode(dispatch),
        setRoles: setRoles(dispatch),
        cleanState: cleanState(dispatch),
    }
    return <context.Provider value={value}>{children}</context.Provider>
}
