import { CButton, CCard, CCardHeader, CCol, CForm, CFormInput, CFormLabel, CRow, CTableRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { GetUsersInfo, UpdateUserEmailName } from 'src/api/Functions'
import ModalChangePassword from 'src/components/custom/ModalChangePassword'
import { useUser } from 'src/context/UserContext'
import avatar from './../../../assets/images/avatars/profile.png'

const Profile = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [changePassMode, setChangePassMode] = useState(false)
    const {state: userState, setUser } = useUser()
    
    useEffect(() => {
        GetUsersInfo()
            .then(res => {
                setUser({
                    id: res.data.data.id,
                    name: res.data.data.name,
                    email: res.data.data.email,
                    role: res.data.data.role.id,
                  })
                setName(res.data.data.name)
                setEmail(res.data.data.email)
            }).catch(err => {
                console.log(err.response.data)
            })
    }, [])

    const handleSubmit = () => {
        console.log('submit')
        UpdateUserEmailName(userState.user.id, {
            name,
            email
        }).then(res => {
            setUser({
                ...userState.user,
                name,
                email
            })
            setEditMode(false)
            alert('Update user berhasil')
        }).catch(err => {
            if(err.response.data.errors.email){
                alert('Email sudah digunakan')
            }
            alert('Gagal update user')
            setName(userState.user.name)
            setEmail(userState.user.email)
        })
    }

    return (
        <CCard>
            <ModalChangePassword visible={changePassMode} setVisible={setChangePassMode}/>
            <CCardHeader>Profile</CCardHeader>
            <CRow>
                <CCol xs={12} md={5} style={{
                    marginTop: "10px",
                    textAlign: "center",
                }}>
                    <img src={avatar} height={200} style={{
                        borderRadius: "50%",
                    }}/>
                </CCol>
                <CCol xs={12} md={7}>
                    <CForm 
                        style={{
                            marginTop: "15px",
                            marginRight: "10px",
                            marginLeft: "10px",
                        }}
                    >
                        <div className="mb-3">
                            <CFormLabel htmlFor="nama">
                                <h6>Nama</h6>
                            </CFormLabel>
                            <CFormInput 
                                type="text" 
                                id="nomorkkdataindividu" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={!editMode}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="email">
                                <h6>Email</h6>
                            </CFormLabel>
                            <CFormInput 
                                type="text" 
                                id="nomorkkdataindividu" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={!editMode}
                                required
                            />
                        </div>
                        <div className="col-auto">
                            {editMode ? (
                                <>
                                <CButton color='secondary' className="float-end mb-3 mx-2"
                                onClick={() => setEditMode(false)}
                                >
                                Cancel
                                </CButton>
                                <CButton className="float-end mb-3 mx-2" onClick={handleSubmit}>
                                Save Changes
                                </CButton>
                                </>
                            ) : (
                                <>
                                <CButton color='warning' className="float-end mb-3 mx-2" onClick={() => {
                                    setChangePassMode(true)
                                }}>
                                Change Password
                                </CButton>
                                <CButton className="float-end mb-3 mx-2" onClick={() => {
                                    console.log('cass')
                                    setEditMode(true)
                                }}>
                                Edit
                                </CButton>
                                </>
                            )}
                        </div>
                    </CForm>
                </CCol>
            </CRow>
        </CCard>
        
    )
}

export default Profile