import { CButton, CCol, CForm, CFormInput, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { AddRole, GetAccess } from 'src/api/Functions'

const ModalAddEditRole = ({visible, setVisible, mode = 'add'}) => {
    const [name, setName] = useState('')
    const [access, setAccess] = useState([])
    const [accessOption, setAccessOption] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        let accessData = []
        access.forEach((item, index) => {
            if (item != 0) {
                accessData.push(item);
            }
        })
        AddRole({name, access: accessData})
            .then(res => {
                setIsLoading(false)
                console.log(res.data)
                setVisible(false);
            })
            .catch(err => {
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
                                    let newAccess = access
                                    newAccess[item.id] = e.target.value
                                    setAccess(newAccess)
                                }}
                            >
                                <option value={0}>Tidak</option>
                                <option value={item.id}>Ya</option>
                            </select>
                            </CCol>
                    </CRow>
                    )
                })}
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
                <CButton color="secondary" type='submit'>Submit</CButton>
            </CModalFooter>
            </CForm>
        </CModal>
    )
}

export default ModalAddEditRole