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
  CSpinner,
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
import { httpClient } from 'src/util/Api'
import Loader from 'src/components/custom/Loader'
import ModalDetailKk from 'src/components/custom/ModalDetailKk'
import ModalDelete from 'src/components/custom/ModalDelete'

const DataKK = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [detailMode, setDetailMode] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)
  const [selectedData, setSelectedData] = useState({})
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const getData = () => {
    httpClient.get('/families', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      console.log('Berhasil')
      setData(res.data.data)
      console.log(res.data.data)
      setIsLoading(false)
    }).catch(err => { 
      console.log(err.response)
    })
  }

  useEffect(() => {
    getData()
  }, [])
  
  const renderTable = (item,index) => {
    return (
      <>
      <CTableRow>
        <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
        <CTableDataCell>{item.no_kk}</CTableDataCell>
        <CTableDataCell>{item.nama_kepala}</CTableDataCell>
        <CTableDataCell>{item.tempat_tinggal}</CTableDataCell>
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
  }
  return (
    <>
      <ModalDetailKk item={selectedData} visible={detailMode} setVisible={setDetailMode}/>
      <ModalDelete visible={deleteMode} item={selectedData.id} setVisible={setDeleteMode} mode={'kk'}/>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Data KK</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Jumlah data</div>
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
        <h2>Data Keluarga</h2>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">No KK</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nama Kepala Keluarga</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tempat Tinggal</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data.map((item, index) => renderTable(item, index))}
          </CTableBody>
        </CTable>
      </CRow>
      {data.length === 0 && !isLoading  ? (
        <p className='text-center'>Tidak ada data</p>
      ) : ''}
      <Loader visible={isLoading}/>
    </>
  )
}

export default DataKK
