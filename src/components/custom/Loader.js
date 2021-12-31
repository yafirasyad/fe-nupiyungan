import { CSpinner } from '@coreui/react'
import React from 'react'


const Loader = ({visible}) => {
    return (
        <div style={{
            ...container, 
            display: visible ? 'flex' : 'none'
        }}>
            <CSpinner/>
        </div>
    )
}

const container = {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto'
}

export default Loader