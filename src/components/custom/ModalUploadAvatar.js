import { CButton, CForm, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';
import React, { useEffect, useRef, useState } from 'react';
import { UploadAvatar } from 'src/api/Functions';
import { useUser } from 'src/context/UserContext';
import Loader from './Loader';
import Spinner from './Spinner';


const ModalUploadAvatar = ({visible, setVisible}) => {
    const {state: userState } = useUser()
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState([])

    const avatar = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        let data = new FormData()
        if (avatar.current.files.length === 0) {
            setVisible(false)
            return
        }
        data.append('avatar', avatar.current.files[0])
        UploadAvatar(userState.user.id, data)
            .then(res => {
                console.log(res.data)
                setIsLoading(false)
                setVisible(false)
            }).catch(err => {
                console.log(err.response.data)
                setErrorMsg(err.response.data.errors.avatar)
                setIsLoading(false)
            })
    }

    return (
        <>
        <CModal visible={visible}>
            <Loader visible={isLoading}/>
            <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle>Change Photo</CModalTitle>
            </CModalHeader>
            <CForm onSubmit={handleSubmit}>
            <CModalBody>
                <CRow>
                <div style={{
                    textAlign: 'center',
                }}>
                    <img src={userState.user.avatar !== "" ? `${process.env.REACT_APP_DEV_API_URL}/public/user/${userState.user.avatar}` : userState.user.avatar} height={200} width={200} style={{
                                borderRadius: "50%",
                    }}/>
                </div>
                <div style={{
                    textAlign: 'center',
                }}>
                    {errorMsg.length > 0 && errorMsg.map((err, index) => (
                        <p style={{
                            color: 'red',
                        }}>{err}</p>
                    ))}
                        <input type="file" name="avatar" 
                        ref={avatar} id="avatar"/>
                </div>
                </CRow>
            </CModalBody>
            <CModalFooter>
                <CButton type='submit' color='primary' >
                    Submit
                </CButton>
                <CButton color='secondary' onClick={() => setVisible(false)}>
                    Close
                </CButton>
            </CModalFooter>
            </CForm>
        </CModal>
        </>
    )
}

export default ModalUploadAvatar