import { CButton, CCol, CForm, CFormInput, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { AddRole, GetAccess, GetRoles, UpdateRole } from 'src/api/Functions'
import { useData } from 'src/context/DataContext'

const ModalAddEditRole = ({visible, setVisible, mode = 'add'}) => {
    const [name, setName] = useState('')
    const [access, setAccess] = useState([])
    const [selectedAccess, setSelectedAccess] = useState(new Map())
    const [accessOption, setAccessOption] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const {state: dataState, setRoles} = useData()
    
    useEffect(() => {
        GetAccess()
            .then(res => {
                setAccessOption(res.data.data)
                setAccess(Array(res.data.data.length).fill(0))
            }).catch(err => {
                console.log(err.response)
            })
        return () => {
            setAccess([])
            setName('')
            setAccessOption([])
        }

    }, [])

    useEffect(() => {
        if (mode === "edit") {
            setName(dataState.selectedRole.name)
            let temp = new Map()
            dataState.selectedRole.access.map(item => {
                temp.set(item.id, item.id)
            })
            console.log(temp)
            setSelectedAccess(temp)
        }else {
            setName('')
        }
    }, [mode, dataState.selectedRole])

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        let accessData = []
        accessData = Array.from(selectedAccess.values())
        console.log(accessData)

        if (mode == 'add') {
            AddRole({name, access: accessData})
            .then(res => {
                setIsLoading(false)
                console.log(res.data)
                setVisible(false);
                getRoles()
            })
            .catch(err => {
                console.log(err.response)
            })
        }else {
            UpdateRole(dataState.selectedRole.id, {name, access: accessData})
                .then(res => {
                    setIsLoading(false)
                    console.log(res.data)
                    setVisible(false);
                    getRoles()
                }).catch(err => {
                    console.log(err.response)
                })
        }
        
    }

    const getRoles = () => {
        GetRoles()
        .then(res => {
          setRoles(res.data.data)
        }).catch(err => {
            console.log(err.response)
        })
    }
    return (
        <CModal
            visible={visible}
            onClose={() => {
                setVisible(false)
            }}
            size="md"
        >
            <CModalHeader>
                <CModalTitle>{mode === 'add' ? 'Add role' : 'Edit role' }</CModalTitle>
            </CModalHeader>
            <CForm onSubmit={handleSubmit}>
            <CModalBody>
                <div className="mb-3">
                    <CFormLabel htmlFor="name">
                        <h6>Nama Role</h6>
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
                {accessOption.map((item, index) => {
                    return (
                        <CRow className="mb-3">
                            <CCol>
                            <CFormLabel htmlFor="name">
                                <h6>{item.name}</h6>
                            </CFormLabel>
                            </CCol>
                            <CCol>
                            <select
                                name={item.name}
                                onChange={(e) => {
                                    // let newAccess = access
                                    // newAccess[item.id] = e.target.value
                                    if (e.target.value == 0) {
                                        console.log('delete')
                                        selectedAccess.delete(item.id)
                                    }else {
                                        selectedAccess.set(item.id, item.id)
                                    }
                                    // setAccess(newAccess)
                                }}
                            >
                                <option value={0}>Tidak</option>
                                selectedAccess.includes(item.id) && mode === 'edit' ? true : false
                                <option value={item.id} selected={selectedAccess.has(item.id) && mode === 'edit' ? true : false}>Ya</option>
                            </select>
                            </CCol>
                    </CRow>
                    )
                })}
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
                <CButton color="secondary" type='submit' color="primary">Submit</CButton>
            </CModalFooter>
            </CForm>
        </CModal>
    )
}

export default ModalAddEditRole