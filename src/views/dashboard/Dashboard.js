import React, { lazy, useEffect, useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import { useData } from 'src/context/DataContext.js'
import { DeleteNote, GetNotes, GetStats, GetUsersInfo } from 'src/api/Functions.js'
import { useUser } from 'src/context/UserContext.js'
import NotesCard from 'src/components/custom/NotesCard.js'
import ModalAddNote from 'src/components/custom/ModalAddNote.js'
import ModalDelete from 'src/components/custom/ModalDelete.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {

  const { state: userState, setUser } = useUser()
  const { state: dataState, setNotes, removeNote } = useData()
  const [addNoteMode, setAddNoteMode] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)
  const [selectedNote, setSelectedNote] = useState({})
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  console.log(userState.user)

  useEffect(() => {
    getUserInfo()
  }, [])

  const getUserInfo = () => {
    GetUsersInfo()
    .then(res => {
      setUser({
        id: res.data.data.id,
        name: res.data.data.name,
        email: res.data.data.email,
        role: res.data.data.role.id,
        avatar: res.data.data.avatar,
      })
      GetNotes(res.data.data.id)
      .then(res => {
        setNotes(res.data.data)
      }).catch(err => {
        console.log(err.response)
      })
    }).catch(err => {
      console.log(err.response)
    })
  }

  const deleteFunc = () => {
    DeleteNote(selectedNote.id)
      .then(res => {
        console.log(res.data.data)
        removeNote(selectedNote.id)
        setDeleteMode(false)
      }).catch(err => {
        console.log(err.response)
      })
  }
  return (
    <>
      <WidgetsDropdown />
      <ModalAddNote visible={addNoteMode} setVisible={setAddNoteMode}/>
      <ModalDelete visible={deleteMode} setVisible={setDeleteMode} deleteFunc={deleteFunc}/>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Catatan</CCardHeader>
            <CCardBody>
              <CButton 
              color="primary"
              style={{
                  width: '100px',
                  marginBottom: '10px',
              }}
              onClick={() => setAddNoteMode(true)}
              >
                  Add Note
              </CButton>
                {dataState.notes.map(note => (
                  <NotesCard item={note} key={note.id} onDelete={() => {
                    setSelectedNote(note)
                    setDeleteMode(true)
                  }}/>
                ))}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
