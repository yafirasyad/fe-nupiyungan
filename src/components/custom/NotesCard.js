import { CRow } from '@coreui/react'
import React from 'react'
import trash from './../../assets/images/trashcan-red.png'
const NotesCard = ({item, onDelete}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: '5px',
            margin: '10px 0px',
            border: '1px solid #d7d8d9',
        }}>
            <div
                style={{
                    margin: '10px 10px',
                }}
            >
                <h5 
                    style={{
                        margin: '0px',
                    }}
                >{item.title}</h5>
                <p>{item.content}</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '10px 10px',
                }}
            >   
                <img 
                    src={trash}
                    width={20}
                    style={{
                        cursor: 'pointer',
                    }}
                    onClick={onDelete}
                />
            </div>
        </div>
    )
} 

export default NotesCard