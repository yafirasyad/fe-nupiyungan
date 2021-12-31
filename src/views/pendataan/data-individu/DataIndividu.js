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
import { httpClient } from 'src/util/Api'
import ModalDetailIndividu from 'src/components/custom/ModalDetailIndividu'
import ModalDelete from 'src/components/custom/ModalDelete'
import Loader from 'src/components/custom/Loader'

// const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const DataIndividu = () => {

  const [data, setData] = useState([])
  const [detailMode, setDetailMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [deleteMode, setDeleteMode] = useState(false)
  const [selectedData, setSelectedData] = useState({})
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useEffect(() => {
    console.log('DataIndividu')
    getDataPerson()
  }, [])

  const getDataPerson = () => {
    httpClient.get('/persons', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }).then(res => {
      console.log(res.data.data)
      setData(res.data.data)
      setIsLoading(false)
    }).catch(err => {
      console.log(err.response)
    })
  }

  const renderTable = (item, index) => {
      return (
        <>
        <CTableRow>
          <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
          <CTableDataCell>{item.nik}</CTableDataCell>
          <CTableDataCell>{item.nama}</CTableDataCell>
          <CTableDataCell>{item.jenis_kelamin}</CTableDataCell>
          <CTableDataCell>{item.no_hp}</CTableDataCell>
          <CTableDataCell>
            <div>
              <CButton 
                color="info" 
                style={{
                  marginRight: '2px', 
                  marginLeft: '2px', 
                }}
                onClick={() => {
                  setSelectedData(item)
                  setDetailMode(true)
                }}
              >
                detil
              </CButton>
              <CButton 
                color="danger"
                style={{
                  marginRight: '2px', 
                  marginLeft: '2px', 
                }}
                onClick={() => {
                  setSelectedData(item)
                  setDeleteMode(true)
                }}
              >
                hapus
              </CButton>
            </div>
          </CTableDataCell>
        </CTableRow>
        </>
      )
  };

  return (
    <>
      <ModalDetailIndividu visible={detailMode} item={selectedData} setVisible={setDetailMode}/>
      <ModalDelete visible={deleteMode} item={selectedData.id} setVisible={setDeleteMode} mode={'individu'}/>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Catatan</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Jumlah Data</div>
                        <div className="fs-5 fw-semibold">{data.length}</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Recurring Clients</div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <h2>Data Individu</h2>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">NIK</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
              <CTableHeaderCell scope="col">Jenis Kelamin</CTableHeaderCell>
              <CTableHeaderCell scope="col">No HP</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data.map((item, index) => renderTable(item, index))}
          </CTableBody>
        </CTable>
      </CRow>
      {data.length == 0 && !isLoading  ? (
        <p className='text-center'>Tidak ada data</p>
      ) : ''}
      <Loader visible={isLoading} />
    </>
  ) 
}

export default DataIndividu
