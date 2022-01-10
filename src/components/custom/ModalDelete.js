import React from 'react'
import { CButton, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import { httpClient } from 'src/util/Api'

const ModalDelete = ({item, visible, setVisible, deleteFunc}) => {
    return (
        <CModal
        visible={visible}
        onClose={() => {
            setVisible(false)
        }}
        size="md"
        >
            <CModalHeader>
                <CModalTitle>Hapus Data</CModalTitle>
            </CModalHeader>
            <CModalBody>Anda yakin menghapus data ini?</CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
                <CButton color="danger" onClick={deleteFunc}>Hapus</CButton>
            </CModalFooter>
        </CModal>
    )
}

export default ModalDelete