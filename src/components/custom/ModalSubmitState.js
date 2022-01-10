import { CModal, CModalBody, CModalHeader, CModalTitle, CButton, CModalFooter } from '@coreui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'


const ModalSubmitState = ({message, visible, setVisible, onClose}) => {
    const history = useHistory()
    return (
        <CModal visible={visible} onClose={onClose}>
            <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle></CModalTitle>
            </CModalHeader>
            <CModalBody>{message}</CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={onClose}>
                Close
                </CButton>
            </CModalFooter>
        </CModal>
    )
}

export default ModalSubmitState