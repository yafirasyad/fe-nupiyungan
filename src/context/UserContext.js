import React from 'react'
import { useReducer } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

export const defaultState = {
    user: {
        id: '',
        name: '',
        email: '',
        avatar: '',
        role: 0,
    }
}

export const Action = {
    Set: 'Set',
    Remove: 'Remove',
}

export const UserReducer = (state, action) => {
    switch (action.type) {
        case Action.Set:
            return {
                ...state,
                user: action.payload.user
            }
        case Action.Remove:
            return {
                ...state,
                user: defaultState.user
            }
        default:
            return state
    }
}

const context = createContext();

const setUser = (dispatch) => {
    return (user) => {
        dispatch({ type: Action.Set, payload: { user } })
    }
}

export const useUser = () => useContext(context)

export const UserProvider = ({children, initialState, reducer}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {
        state,
        setUser: setUser(dispatch),
    }
    return <context.Provider value={value}>{children}</context.Provider>
}