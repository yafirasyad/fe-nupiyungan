import { CButton, CCol, CForm, CFormInput, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { GetRoles, GetUsers, SaveUser, UpdateUser } from 'src/api/Functions'
import { useData } from 'src/context/DataContext'
import Loader from './Loader'

const ModalAddEditUser = ({visible, setVisible, mode}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState(1)
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { state: dataState, setRoles, selectUser, setEditUserMode, setUsers } = useData();

    useEffect(() => {
       if (dataState.isEditUserMode) {
            setName(dataState.selectedUser.name)
            setEmail(dataState.selectedUser.email)
            setRole(dataState.selectedUser.role.id)       
            console.log(dataState.selectedUser)    
       }
       GetRoles()
          .then(res => {
            setRoles(res.data.data)
            setIsLoading(false)
          }).catch(err => {
            console.log(err.response)
          })

       return () => {
           cleanState()
       }
    }, [dataState.isEditUserMode])

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const user = {
            name,
            email,
            role,
            password
        }
        if (dataState.isEditUserMode) {
            UpdateUser(dataState.selectedUser.id, 
                {
                    name,
                    email,
                    role,
                })
                .then(res => {
                    setIsLoading(false)
                    setVisible(false)
                    cleanState()
                    selectUser(res.data)
                }).catch(err => {
                    console.log(err.response)
                })
        }else {
            SaveUser(user)
            .then(res => {
                setIsLoading(false)
                cleanState();
                setVisible(false);
                GetUsers()
                    .then(res => {
                        setUsers(res.data.data)
                    });
            }).catch(err => {
                setIsLoading(false)
                console.log(err.response)
            })
        }
      
    }

    const cleanState = () => {
        setName('')
        setEmail('')
        setRole(1)
        setPassword('')
    }

    return (
        <>
        <Loader visible={isLoading} />
        <CModal
            visible={visible}
            onClose={() => {
                setVisible(false)
                setEditUserMode(false)
                cleanState()
            }}
            size="lg"
        >
            <CModalHeader>
                <CModalTitle>{dataState.isEditUserMode ? 'Edit User' : 'Add User'}</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CRow>
                    <CForm>
                    <div className="mb-3">
                        <CFormLabel htmlFor="name">
                            <h6>Nama</h6>
                        </CFormLabel>
                        <CFormInput 
                            type="text" 
                            id="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            autoComplete='off'
                        />
                    </div>
                    <div className="mb-3">
                        <CFormLabel htmlFor="email">
                            <h6>Email/Username</h6>
                        </CFormLabel>
                        <CFormInput 
                            type="text" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete='off'
                        />
                    </div>
                    <div className="mb-3">
                        <CFormLabel htmlFor="name" className='me-3'>
                            <h6>Role</h6>
                        </CFormLabel>
                        <select
                            id='role'
                            name='role'
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            {dataState.roles.map((item, index) => {
                                return <option key={index} value={item.id}>{item.name}</option>
                            })}
                        </select>
                    </div>
                    {!dataState.isEditUserMode ? (
                        <div className="mb-3">
                        <CFormLabel htmlFor="password">
                            <h6>Password</h6>
                        </CFormLabel>
                        <CFormInput 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete='off'
                        />
                        </div>
                    ) : ''}
                    </CForm>
                </CRow>
            </CModalBody>
            <CModalFooter>
                <CButton color="primary" onClick={handleSubmit}>{dataState.isEditUserMode ? 'Edit User' : 'Add User'}</CButton>
                <CButton color="secondary" onClick={() => {
                    setVisible(false)
                    setEditUserMode(false)
                    cleanState()    
                }}>Close</CButton>
            </CModalFooter>
        </CModal>
        </>
    )
}

export default ModalAddEditUser