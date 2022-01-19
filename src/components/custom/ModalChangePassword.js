import { CButton, CForm, CFormInput, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { ChangePasswordUser } from 'src/api/Functions'
import { useUser } from 'src/context/UserContext'


const ModalChangePassword = ({visible, setVisible}) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const {state: userState } = useUser()

    useEffect(() => {
        return () => {
            cleanState()
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setErrorMessage('Password dan konfirmasi password tidak sama')
            return
        }
        ChangePasswordUser(userState.user.id, {
            password,
            old_password: oldPassword,
            confirm_password: confirmPassword
        }).then(res => {
            console.log(res.data.data)
            setVisible(false)
            cleanState()
        }).catch(err => {
            console.log(err.response)
            if (err.response.data.meta.message === 'Wrong old password') {
                setErrorMessage('Password lama salah')
            }
        })
    }

    const cleanState = () => {
        setPassword('')
        setConfirmPassword('')
        setOldPassword('')
        setErrorMessage('')
    }

    return (
        <CModal
        visible={visible}
        onClose={() => {
            setVisible(false)
            cleanState()
        }}
        size="md"
        >
            <CModalHeader>
                <CModalTitle>Ganti Password</CModalTitle>
            </CModalHeader>
            <CForm 
                        onSubmit={handleSubmit}
                        style={{
                            marginTop: "15px",
                            marginRight: "10px",
                        }}
                    >
                    <CModalBody>
                        <p style={{
                            color: "red"
                        }}>{errorMessage}</p>
                        <div className="mb-3">
                            <CFormLabel htmlFor="nama">
                                <h6>Password Lama</h6>
                            </CFormLabel>
                            <CFormInput 
                                type="password" 
                                id="oldpassword" 
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="nama">
                                <h6>Password</h6>
                            </CFormLabel>
                            <CFormInput 
                                type="password" 
                                id="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="nama">
                                <h6>Konfirmasi password</h6>
                            </CFormLabel>
                            <CFormInput 
                                type="password" 
                                id="confirmpassword" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </CModalBody>
            <CModalFooter>
                <CButton type="submit">
                    Save Changes
                </CButton>
                <CButton color="secondary" onClick={() => {
                    setVisible(false)
                }}>Close</CButton>
            </CModalFooter>
            </CForm>
        </CModal>
    )
}

export default ModalChangePassword