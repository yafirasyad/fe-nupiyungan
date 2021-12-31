import React from 'react'

const ErrorMessage = ({text, visible}) => {
    return (
        <div style={visible ? {
            display: 'block',
        } : {
            display: 'none',
        }}>
            <p style={{
                color: 'red',
            }}>
                {text}
            </p>
        </div>
    )
}

export default ErrorMessage