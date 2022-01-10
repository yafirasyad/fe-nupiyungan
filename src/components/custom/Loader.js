import React from 'react'
import Spinner from './Spinner'


const Loader = ({visible}) => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            zIndex: '1055',
            position: 'fixed',
            overflow: 'auto',
            top: '0',
            left: '0',
            height: '100%',
            display: visible ? 'flex' : 'none',
            backgroundColor:'rgba(0,0,0,0.4)',
          }}>
            <div style={{
              margin: 'auto',
            }}>
              <Spinner visible={true} style={{
                width: '5rem',
                height: '5rem',
                color: 'white'
              }}/>
            </div>
          </div>
    )
}

export default Loader