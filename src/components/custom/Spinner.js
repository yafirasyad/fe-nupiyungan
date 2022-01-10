import { CSpinner } from '@coreui/react'
import React from 'react'


const Spinner = ({visible, style}) => {
    return (
        <div style={{
            ...container, 
            display: visible ? 'flex' : 'none'
        }}>
            <CSpinner style={style}/>
        </div>
    )
}

const container = {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto'
}

export default Spinner