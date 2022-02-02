import { CButton, CCard, CCardHeader, CCol, CForm, CFormInput, CFormLabel, CRow, CTableRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { GetUsersInfo, UpdateUserEmailName } from 'src/api/Functions'
import ModalChangePassword from 'src/components/custom/ModalChangePassword'
import ModalUploadAvatar from 'src/components/custom/ModalUploadAvatar'
import { useUser } from 'src/context/UserContext'
import { isTokenExpired } from 'src/util/Api'
import avatarImg from './../../../assets/images/avatars/profile.png'

const Profile = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [avatar, setAvatar] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [changePassMode, setChangePassMode] = useState(false)
    const [uploadAvatarMode, setUploadAvatarMode] = useState(false)
    const {state: userState, setUser } = useUser()
    const { logoutUser } = useUser()
    useEffect(() => {
        GetUsersInfo()
            .then(res => {
                console.log(res.data.data)
                setUser({
                    id: res.data.data.id,
                    name: res.data.data.name,
                    email: res.data.data.email,
                    role: res.data.data.role.id,
                    avatar: res.data.data.avatar,
                  })
                setAvatar(res.data.data.avatar)
                setName(res.data.data.name)
                setEmail(res.data.data.email)
            }).catch(err => {
                isTokenExpired(err.response.data.errors, logoutUser)
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
        <CCard className='pb-4'>
            <ModalUploadAvatar visible={uploadAvatarMode} setVisible={setUploadAvatarMode}/>
            <ModalChangePassword visible={changePassMode} setVisible={setChangePassMode}/>
            <CCardHeader>Profile</CCardHeader>
            <CRow>
                <CCol xs={12} md={5} style={{
                    marginTop: "10px",
                    textAlign: "center",
                }}>
                    <CRow>
                        <div>
                            <img src={avatar ? `${process.env.REACT_APP_DEV_API_URL}/public/user/${avatar}` : avatarImg} height={200} width={200} style={{
                                borderRadius: "50%",
                            }}/>
                        </div>
                        <div>
                            <CButton className="mt-4" onClick={() => {
                                setUploadAvatarMode(true)
                            }}>
                                Change Photo
                            </CButton>
                        </div>
                    </CRow>
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