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
  CFormInput,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableFoot,
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
import Spinner from 'src/components/custom/Spinner'
import { useData } from 'src/context/DataContext'
import { Link, Redirect } from 'react-router-dom'
import Pagination from 'src/components/custom/Pagination'
import Paginations from 'src/views/base/paginations/Paginations'
import { DeleteDataIndividu, GetDesa } from 'src/api/Functions'
import Loader from 'src/components/custom/Loader'
import ModalSubmitState from 'src/components/custom/ModalSubmitState'
import FilterDesa from 'src/components/custom/FilterDesa'
import ReactExport from "react-export-excel";
import moment from 'moment'
import { Desa } from 'src/util/Type'
import { useUser } from 'src/context/UserContext'
import axios from 'axios'
// const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const DataIndividu = () => {
  const [desa, setDesa] = useState([])
  const [filterDesa, setFilterDesa] = useState('')
  const [filterDusun, setFilterDusun] = useState('')
  const [detailMode, setDetailMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [modalMessage, setModalMessage] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)
  const [selectedData, setSelectedData] = useState({})
  const [unauthorized, setUnauthorized] = useState('');
  const [query, setQuery] = useState('')
  const itemsPerPage = 15
  const [page, setPage] = useState(1)
  const {state: dataState, setDataIndividu, setEditMode, selectDataIndividu} = useData()

  useEffect(() => {
    getDataPerson()
    GetDesa().then(res => {
      setDesa(res.data.data)
    })
  }, [])

  const getDataPerson = () => {
    httpClient.get('/persons', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }).then(res => {
      setDataIndividu(res.data.data)
      setIsLoading(false)
    }).catch(err => {
      console.log(err.response)
      if (err.response.status === 401) {
        console.log('unauthorized')
        setUnauthorized(true);
      }
      setIsLoading(false)
    })
  }

  const renderTable = (item, index) => {
    if (index >= ((page-1)*itemsPerPage) && index <=(page*itemsPerPage)-1) {
      return (
        <>
        <CTableRow>
          <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
          <CTableDataCell>{item.nama}</CTableDataCell>
          <CTableDataCell>{item.jenis_kelamin}</CTableDataCell>
          <CTableDataCell>{item.no_hp}</CTableDataCell>
          <CTableDataCell>{item.desa.nama_desa}</CTableDataCell>
          <CTableDataCell>{item.dusun.nama_dusun}</CTableDataCell>
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
              <Link 
                to={'/individu/edit'}
                onClick={() => {
                  setEditMode(true)
                  selectDataIndividu(item)
                }}
              >
                <CButton 
                  color="primary"
                  style={{
                    marginRight: '2px', 
                    marginLeft: '2px', 
                  }}
                >
                    edit
                </CButton>
              </Link>
              <CButton 
                color="danger"
                style={{
                  marginRight: '2px', 
                  marginLeft: '2px', 
                }}
                onClick={() => {
                  selectDataIndividu(item)
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
  };

  const searchFunc =(value) =>{
    return (value.nama.toLowerCase().includes(query.toLowerCase()) || value.nik.toLowerCase().includes(query.toLowerCase()) || value.no_hp.includes(query)) && value.desa.nama_desa.includes(filterDesa) && value.dusun.nama_dusun.includes(filterDusun)
    // return value.desa.nama_desa.includes('Stimulyo')
  }

  const deleteFunc = () => {
    setIsLoading(true)
    DeleteDataIndividu(dataState.selectedDataIndividu.id)
      .then(res => {
        setDeleteMode(false)
        setIsLoading(false)
        setModalMessage('Data berhasil dihapus')
        getDataPerson()
      }).catch(err => {
        setIsLoading(false)
        setModalMessage('Data gagal dihapus')
      })
  }

  const downloadFile = () => {
    return (
      <ExcelFile
        filename={moment().format("DD-MM-YYYY") + '_data_individu.xlsx'}
        element={
          <CButton
            color="primary"
            style={{
              width: '100px',
              marginBottom: '10px',
            }}
          >
            Download
          </CButton>
        }
      >
          <ExcelSheet
            data={dataState.individu.filter(searchFunc)}
            name="Data Individu"
          >
            <ExcelColumn label="Nik" value="nik" />
            <ExcelColumn label="Nama" value="nama" />
            <ExcelColumn label="Jenis Kelamin" value="jenis_kelamin" />
            <ExcelColumn label="Thariqah Mutabarah" value="thariqah_mut" />
            <ExcelColumn label="Tempat Lahir" value="tempat_lahir" />
            <ExcelColumn label="Desa" value={(col) => col.desa.nama_desa} />
            <ExcelColumn label="Dusun" value={(col) => col.dusun.nama_dusun} />
            <ExcelColumn label="Tanggal Lahir" value="tanggal_lahir" />
            <ExcelColumn label="Status" value="status" />
            <ExcelColumn label="Agama" value="agama" />
            <ExcelColumn label="Suku" value="suku" />
            <ExcelColumn label="Warga Negara" value="warga_negara" />
            <ExcelColumn label="No Hp" value="no_hp" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn label="Facebook" value="facebook" />
            <ExcelColumn label="Instagram" value="instagram" />
            <ExcelColumn label="Kondisi Pekerjaan" value="kondisi_pekerjaan" />
            <ExcelColumn label="Pekerjaan" value="pekerjaan_utama" />
            <ExcelColumn label="Jamsostek" value="jaminan_sosial_ketenagakerjaan" />
            <ExcelColumn label="Jamsoskes" value="jaminan_sosial_kesehatan" />
            <ExcelColumn label="Penghasilan Setahun" value="penghasilan_setahun" />
            <ExcelColumn label="Pendidikan" value="pendidikan" />
            <ExcelColumn label="Bahasa Rumah" value="bahasa_rumah" />
            <ExcelColumn label="Nama Ibu Kandung" value="ibu_kandung" />
            <ExcelColumn label="Nomor Kartu NU" value="kartu_nu" />
            <ExcelColumn label="Pengurus NU" value="pengurus_nu" />
            <ExcelColumn label="Kaderisasi" value="kaderisasi" />
            <ExcelColumn label="Banom" value="banom" />
            <ExcelColumn label="Bahasa Formal" value="bahasa_formal" />
            <ExcelColumn label="Kerja Bakti" value="kerja_bakti" />
            <ExcelColumn label="Siskamling" value="siskamling" />
            <ExcelColumn label="Pesta Rakyat" value="pesta_rakyat" />
            <ExcelColumn label="Muntaber" value={(col) => (
              col.penyakit.muntaber ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Demam Berdarah" value={(col) => ( col.penyakit.demam_berdarah ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Campak" value={(col) => ( col.penyakit.campak ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Malaria" value={(col) => ( col.penyakit.malaria ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Flu Burung" value={(col) => ( col.penyakit.flu_burung ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Covid" value={(col) => ( col.penyakit.covid ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Hepatitis B" value={(col) => ( col.penyakit.hepatitis_b ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Hepatitis E" value={(col) => ( col.penyakit.hepatitis_e ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Difteri" value={(col) => ( col.penyakit.difteri ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Chikungunya" value={(col) => ( col.penyakit.chikungunya ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Leptospirosis" value={(col) => ( col.penyakit.leptospirosis ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Kolerea" value={(col) => ( col.penyakit.kolerea ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Gizi Buruk" value={(col) => ( col.penyakit.gizi_buruk ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Jantung" value={(col) => ( col.penyakit.jantung ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="TBC" value={(col) => ( col.penyakit.tbc ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Kanker" value={(col) => ( col.penyakit.kanker ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Diabetes" value={(col) => ( col.penyakit.diabetes ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Lumpuh" value={(col) => ( col.penyakit.lumpuh ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Penyakit Lainnya" value={(col) => col.penyakit.lainnya}/>
            <ExcelColumn label="Tunanetra" value={(col) => ( col.disabilitas.tunanetra ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Tunarungu" value={(col) => ( col.disabilitas.tunarungu ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Tunawicara" value={(col) => ( col.disabilitas.tunawicara ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Tunarungu Wicara" value={(col) => ( col.disabilitas.tunarungu_wicara ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Tunadaksa" value={(col) => ( col.disabilitas.tunadaksa ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Tunagrahita" value={(col) => ( col.disabilitas.tunagrahita ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Tunalaras" value={(col) => ( col.disabilitas.tunalaras ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Cacat Eks Kusta" value={(col) => ( col.disabilitas.cacat_eks_kusta ? 'Ya' : 'Tidak' )}/>
            <ExcelColumn label="Cacat Ganda" value={(col) => ( col.disabilitas.cacat_ganda ? 'Ya' : 'Tidak' )}/>
          </ExcelSheet> 
      </ExcelFile>  
    )
  }

  const changePage = (page) => setPage(page)
  
  return (
    <>
      {/* <Loader visible={isLoading} /> */}
      <ModalSubmitState visible={isModalVisible} setVisible={setIsModalVisible} message={modalMessage} onClose={() => setIsModalVisible(false)}/>
      <ModalDetailIndividu visible={detailMode} item={selectedData} setVisible={setDetailMode}/>
      <ModalDelete visible={deleteMode} item={selectedData.id} setVisible={setDeleteMode} deleteFunc={deleteFunc}/>
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
                        <div className="fs-5 fw-semibold">{dataState.individu.length}</div>
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
        {downloadFile()}
        <CFormInput 
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <FilterDesa filterDesa={filterDesa} setFilterDesa={setFilterDesa} filterDusun={filterDusun} setFilterDusun={setFilterDusun} />
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">No</CTableHeaderCell>
              {/* <CTableHeaderCell scope="col">NIK</CTableHeaderCell> */}
              <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
              <CTableHeaderCell scope="col">Jenis Kelamin</CTableHeaderCell>
              <CTableHeaderCell scope="col">No HP</CTableHeaderCell>
              <CTableHeaderCell scope="col">Desa</CTableHeaderCell>
              <CTableHeaderCell scope="col">Dusun</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {dataState.individu.filter(searchFunc).map((item, index) => renderTable(item, index))}
          </CTableBody>
        </CTable>
        <div className='d-flex justify-content-center'>  
          <Pagination itemsPerPage={itemsPerPage} totalItems={dataState.individu.length} changePage={changePage} currentPage={page}/>
        </div>
      </CRow>
      { unauthorized ? (
        <p className='text-center'>Anda tidak memiliki akses</p>
      ) :  (dataState.individu.length == 0 && !isLoading)  ? (
        <p className='text-center'>Tidak ada data</p>
      ) : ''}
      <Spinner visible={isLoading} />
    </>
  ) 
}

export default DataIndividu
