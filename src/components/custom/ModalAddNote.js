import { CButton, CForm, CFormInput, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import React, { useState } from 'react'
import { AddNote } from 'src/api/Functions'
import { useData } from 'src/context/DataContext'

const ModalAddNote = ({visible, setVisible}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [type, setType] = useState(2)
    const { addNote } = useData()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const note = {
            title,
            content,
            type
        }
        console.log(note)

        AddNote(note)
            .then(res => {
                setVisible(false)
                addNote(res.data.data)
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
                <CModalTitle>Add Notes</CModalTitle>
            </CModalHeader>
            <CForm onSubmit={handleSubmit}>
            <CModalBody>
                <CRow>
                    <div className="mb-3">
                        <CFormLabel htmlFor="name">
                            <h6>Judul</h6>
                        </CFormLabel>
                        <CFormInput 
                            type="text" 
                            id="judul" 
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            autoComplete='off'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <CFormLabel htmlFor="name">
                            <h6>Isi</h6>
                        </CFormLabel>
                        <CFormInput 
                            type="textarea" 
                            id="isi" 
                            onChange={(e) => setContent(e.target.value)}
                            required
                            autoComplete='off'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <CFormLabel htmlFor="name">
                            <h6>Type &nbsp;</h6>
                        </CFormLabel>
                        <select
                         id="type"
                         name="type"
                         value={type}
                         onChange={(e) => setType(e.target.value)}
                        >
                            <option value={2}>Hanya saya</option>
                            <option value={1}>Semua</option>
                        </select>
                    </div>
                </CRow>
            </CModalBody>
            <CModalFooter>
                <CButton color="primary" type='submit'>Add Notes</CButton>
                <CButton color="secondary" tyonClick={() => {
                    setVisible(false)
                }}>Close</CButton>
            </CModalFooter>
            </CForm>
        </CModal>
    )
}

export default ModalAddNote