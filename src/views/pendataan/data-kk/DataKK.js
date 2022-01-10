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
import Spinner from 'src/components/custom/Spinner'
import ModalDetailKk from 'src/components/custom/ModalDetailKk'
import ModalDelete from 'src/components/custom/ModalDelete'
import Pagination from 'src/components/custom/Pagination'
import { useData } from 'src/context/DataContext'
import { DeleteDataKk } from 'src/api/Functions'
import ModalSubmitState from 'src/components/custom/ModalSubmitState'
import { Link } from 'react-router-dom'
import ReactExport from "react-export-excel";
import moment from 'moment'
import { Desa } from 'src/util/Type'

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const DataKK = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [modalMessage, setModalMessage] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [detailMode, setDetailMode] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)
  const [selectedData, setSelectedData] = useState({})
  const [query, setQuery] = useState('')
  const itemsPerPage = 2
  const [page, setPage] = useState(1)
  const {state: dataState, setDataKk, setEditMode, selectDataIndividu, selectDataKk} = useData()
  
  
  const getData = () => {
    httpClient.get('/families', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      setDataKk(res.data.data)
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
                to={'/kk/edit'}
                onClick={() => {
                  setEditMode(true)
                  selectDataKk(item)
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
  
  const searchFunc =(value) =>{
    return value.nama_kepala.toLowerCase().includes(query.toLowerCase()) || value.no_kk.toLowerCase().includes(query.toLowerCase())
  }

  const deleteFunc = () => {
    setIsLoading(true)
    DeleteDataKk(selectedData.id)
      .then(res => {
        setDeleteMode(false)
        setIsLoading(false)
        setModalMessage('Data berhasil dihapus')
        getData()
      }).catch(err => {
        setIsLoading(false)
        setModalMessage('Data gagal dihapus')
      })
  }

  const changePage = (page) => setPage(page)
  console.log(dataState.kk.filter((item) => item.desa_id === Desa['Sitimulyo']))
  const downloadFile = () => {
    return (
      <ExcelFile
        filename={moment().format("DD-MM-YYYY") + '_data_kk.xlsx'}
        element={
          <CButton
            color="primary"
          >
            Download
          </CButton>
        }
      >
          <ExcelSheet
            data={dataState.kk.filter((item) => item.desa_id === Desa['Sitimulyo'])}
            name="Sitimulyo"
          >
            <ExcelColumn label="No KK" value="no_kk" />
            <ExcelColumn label="Nama Kepala" value="nama_kepala" />
            <ExcelColumn label="Tempat Tinggal" value="tempat_tinggal" />
            <ExcelColumn label="Desa" value={(col) => col.desa.nama_desa} />
            <ExcelColumn label="Dusun" value={(col) => col.dusun.nama_dusun} />
            <ExcelColumn label="Luas Lahan" value="luas_lahan" />
            <ExcelColumn label="Luas Rumah" value="luas_rumah" />
            <ExcelColumn label="Jenis Lantai" value="jenis_lantai" />
            <ExcelColumn label="Dinding" value="dinding" />
            <ExcelColumn label="Atap" value="atap" />
            <ExcelColumn label="Jendela" value="jendela" />
            <ExcelColumn label="MCK" value="mck" />
            <ExcelColumn label="Penerangan" value="penerangan" />
            <ExcelColumn label="Energi Masak" value="energi_masak" />
            <ExcelColumn label="Pembuangan" value="pembuangan" />
            <ExcelColumn label="Sumber Air Mandi" value="sumber_air_mandi" />
            <ExcelColumn label="Sumber Air Minum" value="sumber_air_minum" />
            <ExcelColumn label="Rumah Dibawah Sutet" value={(col) => (
              col.rumah_bantaran_sungai ? 'Ya' : 'Tidak'
            )} />
            <ExcelColumn label="Rumah Bantaran Sungai" value={(col) => (
              col.rumah_bantaran_sungai ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Kondisi Rumah" value="kondisi_rumah" />
            <ExcelColumn label="BLT Desa" value={(col) => (
              col.blt_desa ? 'Ya' : 'Tidak'
            )} />
            <ExcelColumn label="Program Keluarga Harapan" value={(col) => (col.pkh ? 'Ya' : 'Tidak')}/>
            <ExcelColumn label="Bantuan Sosial Tunai" value={(col) => (
              col.bantuan_sosial_tunai ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Bantuan Presiden" value={(col) => (
              col.bantuan_presiden ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Bantuan UMKM" value={(col) => (
              col.bantuan_umkm ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Bantuan Pekerja" value={(col) => (
              col.bantuan_pekerja ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Bantuan Pendidikan" value={(col) => (
              col.bantuan_pendidikan ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Akses Kerja" value="akses_kerja" />
            <ExcelColumn label="Akses Lahan" value="akses_lahan" />
            <ExcelColumn label="Akses Sekolah" value="akses_sekolah" />
            <ExcelColumn label="Akses Kesehatan" value="akses_kesehatan" />
            <ExcelColumn label="Rumah Sakit - Jarak" value={(col) => col.akses_fasilitas_kesehatan[0].jarak} />
            <ExcelColumn label="Rumah Sakit - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[0].kemudahan} />
            <ExcelColumn label="Rumah Sakit - Waktu" value={(col) => col.akses_fasilitas_kesehatan[0].waktu} />
            <ExcelColumn label="Rumah Sakit Bersalin - Jarak" value={(col) => col.akses_fasilitas_kesehatan[1].jarak} />
            <ExcelColumn label="Rumah Sakit Bersalin - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[1].kemudahan} />
            <ExcelColumn label="Rumah Sakit Bersalin - Waktu" value={(col) => col.akses_fasilitas_kesehatan[1].waktu} />
            <ExcelColumn label="Poliklinik - Jarak" value={(col) => col.akses_fasilitas_kesehatan[2].jarak} />
            <ExcelColumn label="Poliklinik - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[2].kemudahan} />
            <ExcelColumn label="Poliklinik - Waktu" value={(col) => col.akses_fasilitas_kesehatan[2].waktu} />
            <ExcelColumn label="Puskesmas - Jarak" value={(col) => col.akses_fasilitas_kesehatan[3].jarak} /> 
            <ExcelColumn label="Puskesmas - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[3].kemudahan} />
            <ExcelColumn label="Puskesmas - Waktu" value={(col) => col.akses_fasilitas_kesehatan[3].waktu} />
            <ExcelColumn label="Puskesmas Bantu - Jarak" value={(col) => col.akses_fasilitas_kesehatan[4].jarak} />
            <ExcelColumn label="Puskesmas Bantu - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[4].kemudahan} />
            <ExcelColumn label="Puskesmas Bantu - Waktu" value={(col) => col.akses_fasilitas_kesehatan[4].waktu} />
            <ExcelColumn label="Polindes - Jarak" value={(col) => col.akses_fasilitas_kesehatan[5].jarak} />
            <ExcelColumn label="Polindes - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[5].kemudahan} />
            <ExcelColumn label="Polindes - Waktu" value={(col) => col.akses_fasilitas_kesehatan[5].waktu} />
            <ExcelColumn label="Poskesdes - Jarak" value={(col) => col.akses_fasilitas_kesehatan[6].jarak} />
            <ExcelColumn label="Poskesdes - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[6].kemudahan} />
            <ExcelColumn label="Poskesdes - Waktu" value={(col) => col.akses_fasilitas_kesehatan[6].waktu} />
            <ExcelColumn label="Posyandu - Jarak" value={(col) => col.akses_fasilitas_kesehatan[7].jarak} />
            <ExcelColumn label="Posyandu - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[7].kemudahan} />
            <ExcelColumn label="Posyandu - Waktu" value={(col) => col.akses_fasilitas_kesehatan[7].waktu} />
            <ExcelColumn label="Apotek - Jarak" value={(col) => col.akses_fasilitas_kesehatan[8].jarak} />
            <ExcelColumn label="Apotek - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[8].kemudahan} />
            <ExcelColumn label="Apotek - Waktu" value={(col) => col.akses_fasilitas_kesehatan[8].waktu} />
            <ExcelColumn label="Paud - Jarak" value={(col) => col.akses_fasilitas_pendidikan[0].jarak} />
            <ExcelColumn label="Paud - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[0].kemudahan} />
            <ExcelColumn label="Paud - Waktu" value={(col) => col.akses_fasilitas_pendidikan[0].waktu} />
            <ExcelColumn label="TK/RA - Jarak" value={(col) => col.akses_fasilitas_pendidikan[1].jarak} />
            <ExcelColumn label="TK/RA - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[1].kemudahan} />
            <ExcelColumn label="TK/RA - Waktu" value={(col) => col.akses_fasilitas_pendidikan[1].waktu} />
            <ExcelColumn label="SD/MI - Jarak" value={(col) => col.akses_fasilitas_pendidikan[2].jarak} />
            <ExcelColumn label="SD/MI - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[2].kemudahan} />
            <ExcelColumn label="SD/MI - Waktu" value={(col) => col.akses_fasilitas_pendidikan[2].waktu} />
            <ExcelColumn label="SMP/MTs - Jarak" value={(col) => col.akses_fasilitas_pendidikan[3].jarak} />
            <ExcelColumn label="SMP/MTs - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[3].kemudahan} />
            <ExcelColumn label="SMP/MTs - Waktu" value={(col) => col.akses_fasilitas_pendidikan[3].waktu} />
            <ExcelColumn label="SMA/MA - Jarak" value={(col) => col.akses_fasilitas_pendidikan[4].jarak} />
            <ExcelColumn label="SMA/MA - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[4].kemudahan} />
            <ExcelColumn label="SMA/MA - Waktu" value={(col) => col.akses_fasilitas_pendidikan[4].waktu} />
            <ExcelColumn label="Perguruan Tinggi - Jarak" value={(col) => col.akses_fasilitas_pendidikan[5].jarak} />
            <ExcelColumn label="Perguruan Tinggi - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[5].kemudahan} />
            <ExcelColumn label="Perguruan Tinggi - Waktu" value={(col) => col.akses_fasilitas_pendidikan[5].waktu} />
            <ExcelColumn label="Pesantren - Jarak" value={(col) => col.akses_fasilitas_pendidikan[6].jarak} />
            <ExcelColumn label="Pesantren - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[6].kemudahan} />
            <ExcelColumn label="Pesantren - Waktu" value={(col) => col.akses_fasilitas_pendidikan[6].waktu} />
            <ExcelColumn label="Seminari - Jarak" value={(col) => col.akses_fasilitas_pendidikan[7].jarak} />
            <ExcelColumn label="Seminari - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[7].kemudahan} />
            <ExcelColumn label="Seminari - Waktu" value={(col) => col.akses_fasilitas_pendidikan[7].waktu} />
            <ExcelColumn label="Pend.Keagamaan Lain - Jarak" value={(col) => col.akses_fasilitas_pendidikan[8].jarak} />
            <ExcelColumn label="Pend.Keagamaan Lain - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[8].kemudahan} />
            <ExcelColumn label="Pend.Keagamaan Lain - Waktu" value={(col) => col.akses_fasilitas_pendidikan[8].waktu} />
          </ExcelSheet> 
          <ExcelSheet
            data={dataState.kk.filter((item) => item.desa_id === Desa['Srimulyo'])}
            name="Srimulyo"
          >
             <ExcelColumn label="No KK" value="no_kk" />
            <ExcelColumn label="Nama Kepala" value="nama_kepala" />
            <ExcelColumn label="Tempat Tinggal" value="tempat_tinggal" />
            <ExcelColumn label="Desa" value={(col) => col.desa.nama_desa} />
            <ExcelColumn label="Dusun" value={(col) => col.dusun.nama_dusun} />
            <ExcelColumn label="Luas Lahan" value="luas_lahan" />
            <ExcelColumn label="Luas Rumah" value="luas_rumah" />
            <ExcelColumn label="Jenis Lantai" value="jenis_lantai" />
            <ExcelColumn label="Dinding" value="dinding" />
            <ExcelColumn label="Atap" value="atap" />
            <ExcelColumn label="Jendela" value="jendela" />
            <ExcelColumn label="MCK" value="mck" />
            <ExcelColumn label="Penerangan" value="penerangan" />
            <ExcelColumn label="Energi Masak" value="energi_masak" />
            <ExcelColumn label="Pembuangan" value="pembuangan" />
            <ExcelColumn label="Sumber Air Mandi" value="sumber_air_mandi" />
            <ExcelColumn label="Sumber Air Minum" value="sumber_air_minum" />
            <ExcelColumn label="Rumah Dibawah Sutet" value={(col) => (
              col.rumah_bantaran_sungai ? 'Ya' : 'Tidak'
            )} />
            <ExcelColumn label="Rumah Bantaran Sungai" value={(col) => (
              col.rumah_bantaran_sungai ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Kondisi Rumah" value="kondisi_rumah" />
            <ExcelColumn label="BLT Desa" value={(col) => (
              col.blt_desa ? 'Ya' : 'Tidak'
            )} />
            <ExcelColumn label="Program Keluarga Harapan" value={(col) => (col.pkh ? 'Ya' : 'Tidak')}/>
            <ExcelColumn label="Bantuan Sosial Tunai" value={(col) => (
              col.bantuan_sosial_tunai ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Bantuan Presiden" value={(col) => (
              col.bantuan_presiden ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Bantuan UMKM" value={(col) => (
              col.bantuan_umkm ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Bantuan Pekerja" value={(col) => (
              col.bantuan_pekerja ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Bantuan Pendidikan" value={(col) => (
              col.bantuan_pendidikan ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Akses Kerja" value="akses_kerja" />
            <ExcelColumn label="Akses Lahan" value="akses_lahan" />
            <ExcelColumn label="Akses Sekolah" value="akses_sekolah" />
            <ExcelColumn label="Akses Kesehatan" value="akses_kesehatan" />
            <ExcelColumn label="Rumah Sakit - Jarak" value={(col) => col.akses_fasilitas_kesehatan[0].jarak} />
            <ExcelColumn label="Rumah Sakit - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[0].kemudahan} />
            <ExcelColumn label="Rumah Sakit - Waktu" value={(col) => col.akses_fasilitas_kesehatan[0].waktu} />
            <ExcelColumn label="Rumah Sakit Bersalin - Jarak" value={(col) => col.akses_fasilitas_kesehatan[1].jarak} />
            <ExcelColumn label="Rumah Sakit Bersalin - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[1].kemudahan} />
            <ExcelColumn label="Rumah Sakit Bersalin - Waktu" value={(col) => col.akses_fasilitas_kesehatan[1].waktu} />
            <ExcelColumn label="Poliklinik - Jarak" value={(col) => col.akses_fasilitas_kesehatan[2].jarak} />
            <ExcelColumn label="Poliklinik - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[2].kemudahan} />
            <ExcelColumn label="Poliklinik - Waktu" value={(col) => col.akses_fasilitas_kesehatan[2].waktu} />
            <ExcelColumn label="Puskesmas - Jarak" value={(col) => col.akses_fasilitas_kesehatan[3].jarak} /> 
            <ExcelColumn label="Puskesmas - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[3].kemudahan} />
            <ExcelColumn label="Puskesmas - Waktu" value={(col) => col.akses_fasilitas_kesehatan[3].waktu} />
            <ExcelColumn label="Puskesmas Bantu - Jarak" value={(col) => col.akses_fasilitas_kesehatan[4].jarak} />
            <ExcelColumn label="Puskesmas Bantu - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[4].kemudahan} />
            <ExcelColumn label="Puskesmas Bantu - Waktu" value={(col) => col.akses_fasilitas_kesehatan[4].waktu} />
            <ExcelColumn label="Polindes - Jarak" value={(col) => col.akses_fasilitas_kesehatan[5].jarak} />
            <ExcelColumn label="Polindes - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[5].kemudahan} />
            <ExcelColumn label="Polindes - Waktu" value={(col) => col.akses_fasilitas_kesehatan[5].waktu} />
            <ExcelColumn label="Poskesdes - Jarak" value={(col) => col.akses_fasilitas_kesehatan[6].jarak} />
            <ExcelColumn label="Poskesdes - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[6].kemudahan} />
            <ExcelColumn label="Poskesdes - Waktu" value={(col) => col.akses_fasilitas_kesehatan[6].waktu} />
            <ExcelColumn label="Posyandu - Jarak" value={(col) => col.akses_fasilitas_kesehatan[7].jarak} />
            <ExcelColumn label="Posyandu - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[7].kemudahan} />
            <ExcelColumn label="Posyandu - Waktu" value={(col) => col.akses_fasilitas_kesehatan[7].waktu} />
            <ExcelColumn label="Apotek - Jarak" value={(col) => col.akses_fasilitas_kesehatan[8].jarak} />
            <ExcelColumn label="Apotek - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[8].kemudahan} />
            <ExcelColumn label="Apotek - Waktu" value={(col) => col.akses_fasilitas_kesehatan[8].waktu} />
            <ExcelColumn label="Paud - Jarak" value={(col) => col.akses_fasilitas_pendidikan[0].jarak} />
            <ExcelColumn label="Paud - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[0].kemudahan} />
            <ExcelColumn label="Paud - Waktu" value={(col) => col.akses_fasilitas_pendidikan[0].waktu} />
            <ExcelColumn label="TK/RA - Jarak" value={(col) => col.akses_fasilitas_pendidikan[1].jarak} />
            <ExcelColumn label="TK/RA - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[1].kemudahan} />
            <ExcelColumn label="TK/RA - Waktu" value={(col) => col.akses_fasilitas_pendidikan[1].waktu} />
            <ExcelColumn label="SD/MI - Jarak" value={(col) => col.akses_fasilitas_pendidikan[2].jarak} />
            <ExcelColumn label="SD/MI - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[2].kemudahan} />
            <ExcelColumn label="SD/MI - Waktu" value={(col) => col.akses_fasilitas_pendidikan[2].waktu} />
            <ExcelColumn label="SMP/MTs - Jarak" value={(col) => col.akses_fasilitas_pendidikan[3].jarak} />
            <ExcelColumn label="SMP/MTs - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[3].kemudahan} />
            <ExcelColumn label="SMP/MTs - Waktu" value={(col) => col.akses_fasilitas_pendidikan[3].waktu} />
            <ExcelColumn label="SMA/MA - Jarak" value={(col) => col.akses_fasilitas_pendidikan[4].jarak} />
            <ExcelColumn label="SMA/MA - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[4].kemudahan} />
            <ExcelColumn label="SMA/MA - Waktu" value={(col) => col.akses_fasilitas_pendidikan[4].waktu} />
            <ExcelColumn label="Perguruan Tinggi - Jarak" value={(col) => col.akses_fasilitas_pendidikan[5].jarak} />
            <ExcelColumn label="Perguruan Tinggi - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[5].kemudahan} />
            <ExcelColumn label="Perguruan Tinggi - Waktu" value={(col) => col.akses_fasilitas_pendidikan[5].waktu} />
            <ExcelColumn label="Pesantren - Jarak" value={(col) => col.akses_fasilitas_pendidikan[6].jarak} />
            <ExcelColumn label="Pesantren - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[6].kemudahan} />
            <ExcelColumn label="Pesantren - Waktu" value={(col) => col.akses_fasilitas_pendidikan[6].waktu} />
            <ExcelColumn label="Seminari - Jarak" value={(col) => col.akses_fasilitas_pendidikan[7].jarak} />
            <ExcelColumn label="Seminari - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[7].kemudahan} />
            <ExcelColumn label="Seminari - Waktu" value={(col) => col.akses_fasilitas_pendidikan[7].waktu} />
            <ExcelColumn label="Pend.Keagamaan Lain - Jarak" value={(col) => col.akses_fasilitas_pendidikan[8].jarak} />
            <ExcelColumn label="Pend.Keagamaan Lain - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[8].kemudahan} />
            <ExcelColumn label="Pend.Keagamaan Lain - Waktu" value={(col) => col.akses_fasilitas_pendidikan[8].waktu} />
          </ExcelSheet> 
          <ExcelSheet
            data={dataState.kk.filter((item) => item.desa_id === Desa['Srimartani'])}
            name="Srimartani"
          >
             <ExcelColumn label="No KK" value="no_kk" />
            <ExcelColumn label="Nama Kepala" value="nama_kepala" />
            <ExcelColumn label="Tempat Tinggal" value="tempat_tinggal" />
            <ExcelColumn label="Desa" value={(col) => col.desa.nama_desa} />
            <ExcelColumn label="Dusun" value={(col) => col.dusun.nama_dusun} />
            <ExcelColumn label="Luas Lahan" value="luas_lahan" />
            <ExcelColumn label="Luas Rumah" value="luas_rumah" />
            <ExcelColumn label="Jenis Lantai" value="jenis_lantai" />
            <ExcelColumn label="Dinding" value="dinding" />
            <ExcelColumn label="Atap" value="atap" />
            <ExcelColumn label="Jendela" value="jendela" />
            <ExcelColumn label="MCK" value="mck" />
            <ExcelColumn label="Penerangan" value="penerangan" />
            <ExcelColumn label="Energi Masak" value="energi_masak" />
            <ExcelColumn label="Pembuangan" value="pembuangan" />
            <ExcelColumn label="Sumber Air Mandi" value="sumber_air_mandi" />
            <ExcelColumn label="Sumber Air Minum" value="sumber_air_minum" />
            <ExcelColumn label="Rumah Dibawah Sutet" value={(col) => (
              col.rumah_bantaran_sungai ? 'Ya' : 'Tidak'
            )} />
            <ExcelColumn label="Rumah Bantaran Sungai" value={(col) => (
              col.rumah_bantaran_sungai ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Kondisi Rumah" value="kondisi_rumah" />
            <ExcelColumn label="BLT Desa" value={(col) => (
              col.blt_desa ? 'Ya' : 'Tidak'
            )} />
            <ExcelColumn label="Program Keluarga Harapan" value={(col) => (col.pkh ? 'Ya' : 'Tidak')}/>
            <ExcelColumn label="Bantuan Sosial Tunai" value={(col) => (
              col.bantuan_sosial_tunai ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Bantuan Presiden" value={(col) => (
              col.bantuan_presiden ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Bantuan UMKM" value={(col) => (
              col.bantuan_umkm ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Bantuan Pekerja" value={(col) => (
              col.bantuan_pekerja ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Bantuan Pendidikan" value={(col) => (
              col.bantuan_pendidikan ? 'Ya' : 'Tidak'
            )}/>
            <ExcelColumn label="Akses Kerja" value="akses_kerja" />
            <ExcelColumn label="Akses Lahan" value="akses_lahan" />
            <ExcelColumn label="Akses Sekolah" value="akses_sekolah" />
            <ExcelColumn label="Akses Kesehatan" value="akses_kesehatan" />
            <ExcelColumn label="Rumah Sakit - Jarak" value={(col) => col.akses_fasilitas_kesehatan[0].jarak} />
            <ExcelColumn label="Rumah Sakit - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[0].kemudahan} />
            <ExcelColumn label="Rumah Sakit - Waktu" value={(col) => col.akses_fasilitas_kesehatan[0].waktu} />
            <ExcelColumn label="Rumah Sakit Bersalin - Jarak" value={(col) => col.akses_fasilitas_kesehatan[1].jarak} />
            <ExcelColumn label="Rumah Sakit Bersalin - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[1].kemudahan} />
            <ExcelColumn label="Rumah Sakit Bersalin - Waktu" value={(col) => col.akses_fasilitas_kesehatan[1].waktu} />
            <ExcelColumn label="Poliklinik - Jarak" value={(col) => col.akses_fasilitas_kesehatan[2].jarak} />
            <ExcelColumn label="Poliklinik - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[2].kemudahan} />
            <ExcelColumn label="Poliklinik - Waktu" value={(col) => col.akses_fasilitas_kesehatan[2].waktu} />
            <ExcelColumn label="Puskesmas - Jarak" value={(col) => col.akses_fasilitas_kesehatan[3].jarak} /> 
            <ExcelColumn label="Puskesmas - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[3].kemudahan} />
            <ExcelColumn label="Puskesmas - Waktu" value={(col) => col.akses_fasilitas_kesehatan[3].waktu} />
            <ExcelColumn label="Puskesmas Bantu - Jarak" value={(col) => col.akses_fasilitas_kesehatan[4].jarak} />
            <ExcelColumn label="Puskesmas Bantu - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[4].kemudahan} />
            <ExcelColumn label="Puskesmas Bantu - Waktu" value={(col) => col.akses_fasilitas_kesehatan[4].waktu} />
            <ExcelColumn label="Polindes - Jarak" value={(col) => col.akses_fasilitas_kesehatan[5].jarak} />
            <ExcelColumn label="Polindes - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[5].kemudahan} />
            <ExcelColumn label="Polindes - Waktu" value={(col) => col.akses_fasilitas_kesehatan[5].waktu} />
            <ExcelColumn label="Poskesdes - Jarak" value={(col) => col.akses_fasilitas_kesehatan[6].jarak} />
            <ExcelColumn label="Poskesdes - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[6].kemudahan} />
            <ExcelColumn label="Poskesdes - Waktu" value={(col) => col.akses_fasilitas_kesehatan[6].waktu} />
            <ExcelColumn label="Posyandu - Jarak" value={(col) => col.akses_fasilitas_kesehatan[7].jarak} />
            <ExcelColumn label="Posyandu - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[7].kemudahan} />
            <ExcelColumn label="Posyandu - Waktu" value={(col) => col.akses_fasilitas_kesehatan[7].waktu} />
            <ExcelColumn label="Apotek - Jarak" value={(col) => col.akses_fasilitas_kesehatan[8].jarak} />
            <ExcelColumn label="Apotek - Kemudahan" value={(col) => col.akses_fasilitas_kesehatan[8].kemudahan} />
            <ExcelColumn label="Apotek - Waktu" value={(col) => col.akses_fasilitas_kesehatan[8].waktu} />
            <ExcelColumn label="Paud - Jarak" value={(col) => col.akses_fasilitas_pendidikan[0].jarak} />
            <ExcelColumn label="Paud - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[0].kemudahan} />
            <ExcelColumn label="Paud - Waktu" value={(col) => col.akses_fasilitas_pendidikan[0].waktu} />
            <ExcelColumn label="TK/RA - Jarak" value={(col) => col.akses_fasilitas_pendidikan[1].jarak} />
            <ExcelColumn label="TK/RA - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[1].kemudahan} />
            <ExcelColumn label="TK/RA - Waktu" value={(col) => col.akses_fasilitas_pendidikan[1].waktu} />
            <ExcelColumn label="SD/MI - Jarak" value={(col) => col.akses_fasilitas_pendidikan[2].jarak} />
            <ExcelColumn label="SD/MI - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[2].kemudahan} />
            <ExcelColumn label="SD/MI - Waktu" value={(col) => col.akses_fasilitas_pendidikan[2].waktu} />
            <ExcelColumn label="SMP/MTs - Jarak" value={(col) => col.akses_fasilitas_pendidikan[3].jarak} />
            <ExcelColumn label="SMP/MTs - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[3].kemudahan} />
            <ExcelColumn label="SMP/MTs - Waktu" value={(col) => col.akses_fasilitas_pendidikan[3].waktu} />
            <ExcelColumn label="SMA/MA - Jarak" value={(col) => col.akses_fasilitas_pendidikan[4].jarak} />
            <ExcelColumn label="SMA/MA - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[4].kemudahan} />
            <ExcelColumn label="SMA/MA - Waktu" value={(col) => col.akses_fasilitas_pendidikan[4].waktu} />
            <ExcelColumn label="Perguruan Tinggi - Jarak" value={(col) => col.akses_fasilitas_pendidikan[5].jarak} />
            <ExcelColumn label="Perguruan Tinggi - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[5].kemudahan} />
            <ExcelColumn label="Perguruan Tinggi - Waktu" value={(col) => col.akses_fasilitas_pendidikan[5].waktu} />
            <ExcelColumn label="Pesantren - Jarak" value={(col) => col.akses_fasilitas_pendidikan[6].jarak} />
            <ExcelColumn label="Pesantren - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[6].kemudahan} />
            <ExcelColumn label="Pesantren - Waktu" value={(col) => col.akses_fasilitas_pendidikan[6].waktu} />
            <ExcelColumn label="Seminari - Jarak" value={(col) => col.akses_fasilitas_pendidikan[7].jarak} />
            <ExcelColumn label="Seminari - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[7].kemudahan} />
            <ExcelColumn label="Seminari - Waktu" value={(col) => col.akses_fasilitas_pendidikan[7].waktu} />
            <ExcelColumn label="Pend.Keagamaan Lain - Jarak" value={(col) => col.akses_fasilitas_pendidikan[8].jarak} />
            <ExcelColumn label="Pend.Keagamaan Lain - Kemudahan" value={(col) => col.akses_fasilitas_pendidikan[8].kemudahan} />
            <ExcelColumn label="Pend.Keagamaan Lain - Waktu" value={(col) => col.akses_fasilitas_pendidikan[8].waktu} />
          </ExcelSheet> 
      </ExcelFile>  
    )
  }

  return (
    <>
      <ModalDetailKk item={selectedData} visible={detailMode} setVisible={setDetailMode}/>
      <ModalSubmitState visible={isModalVisible} setVisible={setIsModalVisible} message={modalMessage} onClose={() => setIsModalVisible(false)}/>
      <ModalDelete visible={deleteMode} item={selectedData.id} setVisible={setDeleteMode} deleteFunc={deleteFunc}/>
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
                        <div className="fs-5 fw-semibold">{dataState.kk.length}</div>
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
        {downloadFile()}
        <CFormInput 
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">No KK</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nama Kepala Keluarga</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tempat Tinggal</CTableHeaderCell>
              <CTableHeaderCell scope="col">Desa</CTableHeaderCell>
              <CTableHeaderCell scope="col">Dusun</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {dataState.kk.filter(searchFunc).map((item, index) => renderTable(item, index))}
          </CTableBody>
        </CTable>
        <div className='d-flex justify-content-center'>  
          <Pagination itemsPerPage={itemsPerPage} totalItems={dataState.kk.length} changePage={changePage} currentPage={page}/>
        </div>
      </CRow>
      {dataState.kk.length === 0 && !isLoading  ? (
        <p className='text-center'>Tidak ada data</p>
      ) : ''}
      <Spinner visible={isLoading}/>
    </>
  )
}

export default DataKK
