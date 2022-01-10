import { CButton, CCol, CForm, CFormInput, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { GetUsers, SaveUser } from 'src/api/Functions'
import { useData } from 'src/context/DataContext'
import Loader from './Loader'

const ModalAddEditUser = ({visible, setVisible, mode}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState(1)
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { state: dataState } = useData()
    
    useEffect(() => {
       if (dataState.isEditUserMode) {
              setName(dataState.selectedUser.name)
              setEmail(dataState.selectedUser.email)
              setRole(dataState.selectedUser.role)           
       }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const user = {
            name,
            email,
            role,
            password
        }
        SaveUser(user)
            .then(res => {
                console.log(res.data)
                setIsLoading(false)
                cleanState();
                setVisible(false);
                GetUsers();
            }).catch(err => {
                setIsLoading(false)
                console.log(err.response)
            })
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
            }}
            size="lg"
        >
            <CModalHeader>
                <CModalTitle>Add User</CModalTitle>
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
                            <option value={1}>Superadmin</option>
                            <option value={2}>Admin</option>
                        </select>
                    </div>
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
                    </CForm>
                </CRow>
            </CModalBody>
            <CModalFooter>
                <CButton color="primary" onClick={handleSubmit}>Add User</CButton>
                <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
            </CModalFooter>
        </CModal>
        </>
    )
}

export default ModalAddEditUser