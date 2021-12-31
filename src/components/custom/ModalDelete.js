import React from 'react'
import { CButton, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import { httpClient } from 'src/util/Api'

const ModalDelete = ({item, visible, setVisible, mode}) => {
    const hapusData = () => {
        if (mode == 'individu') {
            httpClient.delete(`/persons/${item}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res => {
                console.log('Berhasil hapus data')
                console.log(res.data)
                setVisible(false)
            }).catch(err => {
                console.log(err.response)
                setVisible(false)
            })  
        }else {
            httpClient.delete(`/families/${item}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res => {
                console.log('Berhasil hapus data')
                console.log(res.data)
                setVisible(false)
            }).catch(err => {
                console.log(err.response)
                setVisible(false)
            })
        }
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
                <CModalTitle>Hapus Data</CModalTitle>
            </CModalHeader>
            <CModalBody>Anda yakin menghapus data ini?</CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
                <CButton color="danger" onClick={hapusData}>Hapus</CButton>
            </CModalFooter>
        </CModal>
    )
}

export default ModalDelete