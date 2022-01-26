/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useRef, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample, FormLabel } from 'src/components'
import axios from 'axios'
import { httpClient } from 'src/util/Api'
import { useData } from 'src/context/DataContext'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ModalSubmitState from 'src/components/custom/ModalSubmitState'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Spinner from 'src/components/custom/Spinner'
import Loader from 'src/components/custom/Loader'
import ErrorMessage from 'src/components/custom/ErrorMessage'
import InputDesa from 'src/components/custom/InputDesa'
const FormIndividu = () => {
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorNik, setErrorNik] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [otherModeAgama, setOtherModeAgama] = useState(false)
  const [otherAgama, setOtherAgama] = useState('')
  const [otherModePekerjaan, setOtherModePekerjaan] = useState(false)
  const [otherPekerjaan, setOtherPekerjaan] = useState('')
  const [otherModePendidikan, setOtherModePendidikan] = useState(false)
  const [otherPendidikan, setOtherPendidikan] = useState('')
  const history = useHistory()
  // Person
  const [desa, setDesa] = useState(1)
  const [dusun, setDusun] = useState(1)
  const [nik, setNik] = useState('')
  const [noKk, setNoKk] = useState('')
  const [nama, setNama] = useState('')
  const [jenisKelamin, setJenisKelamin] = useState('Laki')
  const [tempatLahir, setTempatLahir] = useState('')
  const [tanggalLahir, setTanggalLahir] = useState(new Date())
  const [status, setStatus] = useState('Kawin')
  const [agama, setAgama] = useState('Islam')
  const [suku, setSuku] = useState('')
  const [wargaNegara, setWargaNegara] = useState('WNI')
  const [noHp, setNoHp] = useState('')
  const [email, setEmail] = useState('')
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [kondisiPekerjaan, setKondisiPekerjaan] = useState('Bersekolah')
  const [pekerjaanUtama, setPekerjaanUtama] = useState('')
  const [penghasilanSetahun, setPenghasilanSetahun] = useState(0)
  const [pendidikan, setPendidikan] = useState('')
  const [kerjaBakti, setKerjaBakti] = useState(0)
  const [siskamling, setSiskamling] = useState(0)
  const [pestaRakyat, setPestaRakyat] = useState(0)
  const [bahasaRumah, setBahasaRumah] = useState('')
  const [bahasaFormal, setBahasaFormal] = useState('')
  const [jamsostek, setJamsostek] = useState(0)
  const [jamsoskes, setJamsoskes] = useState(0)
  const [kartuNu, setKartuNu] = useState('')
  const [golonganDarah, setGolonganDarah] = useState('A')
  const foto = useRef()
  const [fotoVal, setFotoVal] = useState('')
  const [fotoErr, setFotoErr] = useState('')
  const { state: dataState, setEditMode } = useData();
 
  useEffect(() => {
    if (foto.current) {
      if (foto.current.files.length !== 0) {
          if (foto.current.files[0].size/1024 >= 2048) {
            setFotoErr('Ukuran foto maksimal 2 MB')
          }else{
            setFotoErr("")
          }
      }else {
        setFotoErr('Foto wajib diisi')
      }
    }
  }, [foto, fotoVal])

  const [penyakit, setPenyakit] = useState({
    muntaber: 0,
    demam_berdarah: 0,
    campak: 0,
    flu_burung: 0,
    malaria: 0,
    covid: 0,
    hepatitis_b: 0,
    hepatitis_e: 0,
    difteri: 0,
    chikungunya: 0,
    leptospirosis: 0,
    kolerea: 0,
    gizi_buruk: 0,
    jantung: 0,
    tbc: 0,
    kanker: 0,
    diabetes: 0,
    lumpuh: 0,
    lainnya: '',
  })

  const [disabilitas, setDisabilitas] = useState({
    tunanetra: 0,
    tunarungu: 0,
    tunawicara: 0,
    tunarungu_wicara: 0,
    tunadaksa: 0,
    tunagrahita: 0,
    tunalaras: 0,
    cacat_eks_kusta: 0,
    cacat_ganda: 0,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    let data = new FormData()
    data.append('desa_id', desa)
    data.append('dusun_id', dusun)
    data.append('nik', nik)
    data.append('no_kk', noKk)
    data.append('nama', nama)
    data.append('jenis_kelamin', jenisKelamin)
    data.append('tempat_lahir', tempatLahir)
    data.append('tanggal_lahir', tanggalLahir)
    data.append('status', status)
    data.append('agama', agama)
    data.append('suku', suku)
    data.append('warga_negara', wargaNegara)
    data.append('no_hp', noHp)
    data.append('email', email)
    data.append('kartu_nu', kartuNu)
    data.append('golongan_darah', golonganDarah)
    data.append('facebook', facebook)
    data.append('instagram', instagram)
    data.append('kondisi_pekerjaan', kondisiPekerjaan)
    data.append('pekerjaan_utama', pekerjaanUtama)
    data.append('penghasilan_setahun', penghasilanSetahun)
    data.append('pendidikan', pendidikan)
    data.append('kerja_bakti', kerjaBakti)
    data.append('siskamling', siskamling)
    data.append('pesta_rakyat', pestaRakyat)
    data.append('bahasa_rumah', bahasaRumah)
    data.append('bahasa_formal', bahasaFormal)
    data.append('jaminan_sosial_ketenagakerjaan', jamsostek)
    data.append('jaminan_sosial_kesehatan', jamsoskes)
    data.append('foto', foto.current.files[0])
    data.append('penyakit_muntaber', penyakit.muntaber)
    data.append('penyakit_demam_berdarah', penyakit.demam_berdarah)
    data.append('penyakit_campak', penyakit.campak)
    data.append('penyakit_flu_burung', penyakit.flu_burung)
    data.append('penyakit_malaria', penyakit.malaria)
    data.append('penyakit_covid', penyakit.covid)
    data.append('penyakit_hepatitis_b', penyakit.hepatitis_b)
    data.append('penyakit_hepatitis_e', penyakit.hepatitis_e)
    data.append('penyakit_difteri', penyakit.difteri)
    data.append('penyakit_chikungunya', penyakit.chikungunya)
    data.append('penyakit_leptospirosis', penyakit.leptospirosis)
    data.append('penyakit_kolerea', penyakit.kolerea)
    data.append('penyakit_gizi_buruk', penyakit.gizi_buruk)
    data.append('penyakit_jantung', penyakit.jantung)
    data.append('penyakit_tbc', penyakit.tbc)
    data.append('penyakit_kanker', penyakit.kanker)
    data.append('penyakit_diabetes', penyakit.diabetes)
    data.append('penyakit_lumpuh', penyakit.lumpuh)
    data.append('penyakit_lainnya', penyakit.lainnya)
    data.append('disabilitas_tunanetra', disabilitas.tunanetra)
    data.append('disabilitas_tunarungu', disabilitas.tunarungu)
    data.append('disabilitas_tunawicara', disabilitas.tunawicara)
    data.append('disabilitas_tunarungu_wicara', disabilitas.tunarungu_wicara)
    data.append('disabilitas_tunadaksa', disabilitas.tunadaksa)
    data.append('disabilitas_tunagrahita', disabilitas.tunagrahita)
    data.append('disabilitas_tunalaras', disabilitas.tunalaras)
    data.append('disabilitas_cacat_eks_kusta', disabilitas.cacat_eks_kusta)
    data.append('disabilitas_cacat_ganda', disabilitas.cacat_ganda)

    if (dataState.isEditMode) {
      httpClient.post(`/persons/${dataState.selectedDataIndividu.id}`, data, {
        params: {
          _method: 'PUT',
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }).then(res => {
        setModalMessage('Data berhasil diubah')
        setIsModalVisible(true)
        setIsLoading(false)
        setUpdateSuccess(true)
        cleanState()
      }).catch(err => {
        console.log(err.response)
        if(err.response.data.errors.nik) setErrorNik(true)
        setModalMessage('Data gagal diubah')
        setIsModalVisible(true)
        setIsLoading(false)
      })
    }else {
      httpClient.post('/persons', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      }).then(res => {
        setModalMessage('Data berhasil ditambahkan')
        setIsModalVisible(true)
        setIsLoading(false)
        cleanState()
      }).catch(err => {
        console.log(err.response.data)
        if(err.response.data.errors.nik) setErrorNik(true)
        setModalMessage('Data gagal ditambahkan')
        setIsModalVisible(true)
        setIsLoading(false)
      })
    }
  }

  const handleChangePendidikan = (e) => {
    if(e.target.value === 'Other'){
      setOtherModePendidikan(true)
      setPendidikan(otherPendidikan)
    }else {
      setOtherModePendidikan(false)
      setPendidikan(e.target.value)
    }
  }

  const handleChangePekerjaan = (e) => {
    if(e.target.value === 'Other'){
      setOtherModePekerjaan(true)
      setPekerjaanUtama(otherPekerjaan)
      // setPerson({...person, pekerjaan_utama: otherPekerjaan})
    }else {
      setOtherModePekerjaan(false)
      setPekerjaanUtama(e.target.value)
      // setPerson({...person, pekerjaan_utama: e.target.value})
    }
  }
  
  const handleChangeAgama = (e) => {
    if(e.target.value === 'Other'){
      setOtherModeAgama(true)
      setAgama(otherAgama)
      console.log(otherAgama)
      // setPerson({...person, agama: otherAgama})
    }else {
      setOtherModeAgama(false)
      setAgama(e.target.value)
      // setPerson({...person, agama: e.target.value})
    }
  }

  const cleanState = () => {
    setOtherAgama('')
    setOtherModeAgama(false)
    setOtherAgama('')
    setOtherModeAgama(false)
    setOtherPekerjaan('')
    setOtherModePekerjaan(false)
    setOtherPendidikan('')
    setOtherModePendidikan(false)

    // Person 
    setNik('')
    setNoKk('')
    setNama('')
    setJenisKelamin('Laki')
    setTempatLahir('')
    setTanggalLahir(new Date())
    setStatus('Kawin')
    setAgama('')
    setSuku('')
    setWargaNegara('WNI')
    setNoHp('')
    setEmail('')
    setFacebook('')
    setInstagram('')
    setKondisiPekerjaan('Bersekolah')
    setPekerjaanUtama('')
    setPenghasilanSetahun(0)
    setPendidikan('')
    setKerjaBakti(0)
    setSiskamling(0)
    setPestaRakyat(0)
    setBahasaRumah('')
    setBahasaFormal('')
    setJamsostek(0)
    setJamsoskes(0)
    setGolonganDarah('')
    setKartuNu('')

    // Penyakit
    setPenyakit({
      muntaber: 0,
      demam_berdarah: 0,
      campak: 0,
      flu_burung: 0,
      malaria: 0,
      covid: 0,
      hepatitis_b: 0,
      hepatitis_e: 0,
      difteri: 0,
      chikungunya: 0,
      leptospirosis: 0,
      kolerea: 0,
      gizi_buruk: 0,
      jantung: 0,
      tbc: 0,
      kanker: 0,
      diabetes: 0,
      lumpuh: 0,
      lainnya: '',
    })

    // Disabilitas
    setDisabilitas({
      tunanetra: 0,
      tunarungu: 0,
      tunawicara: 0,
      tunarungu_wicara: 0,
      tunadaksa: 0,
      tunagrahita: 0,
      tunalaras: 0,
      cacat_eks_kusta: 0,
      cacat_ganda: 0,
    })
  }

  useEffect(() => {
    if(dataState.isEditMode){
      setDesa(dataState.selectedDataIndividu.desa.id)
      setDusun(dataState.selectedDataIndividu.dusun.id)
      setNik(dataState.selectedDataIndividu.nik)
      setNoKk(dataState.selectedDataIndividu.no_kk)
      setNama(dataState.selectedDataIndividu.nama)
      setJenisKelamin(dataState.selectedDataIndividu.jenis_kelamin)
      setKartuNu(dataState.selectedDataIndividu.kartu_nu)
      setGolonganDarah(dataState.selectedDataIndividu.golongan_darah)
      setTempatLahir(dataState.selectedDataIndividu.tempat_lahir)
      setTanggalLahir(new Date(dataState.selectedDataIndividu.tanggal_lahir))
      setStatus(dataState.selectedDataIndividu.status)
      setAgama(dataState.selectedDataIndividu.agama)
      setSuku(dataState.selectedDataIndividu.suku)
      setWargaNegara(dataState.selectedDataIndividu.warga_negara)
      setNoHp(dataState.selectedDataIndividu.no_hp)
      setEmail(dataState.selectedDataIndividu.email)
      setFacebook(dataState.selectedDataIndividu.facebook)
      setInstagram(dataState.selectedDataIndividu.instagram)
      setKondisiPekerjaan(dataState.selectedDataIndividu.kondisi_pekerjaan)
      setPekerjaanUtama(dataState.selectedDataIndividu.pekerjaan_utama)
      setPenghasilanSetahun(dataState.selectedDataIndividu.penghasilan_setahun)
      setPendidikan(dataState.selectedDataIndividu.pendidikan)
      setKerjaBakti(dataState.selectedDataIndividu.kerja_bakti)
      setSiskamling(dataState.selectedDataIndividu.siskamling)
      setPestaRakyat(dataState.selectedDataIndividu.pesta_rakyat)
      setBahasaRumah(dataState.selectedDataIndividu.bahasa_rumah)
      setBahasaFormal(dataState.selectedDataIndividu.bahasa_formal)
      setJamsostek(dataState.selectedDataIndividu.jaminan_sosial_ketenagakerjaan)
      setJamsoskes(dataState.selectedDataIndividu.jaminan_sosial_kesehatan)
      setPenyakit(dataState.selectedDataIndividu.penyakit)
      setDisabilitas(dataState.selectedDataIndividu.disabilitas)

      
      setOtherModeAgama(dataState.selectedDataIndividu.agama !== 'Islam' && dataState.selectedDataIndividu.agama !== 'Kristen' ? true : false)
      console.log(otherModeAgama)
      setOtherAgama(dataState.selectedDataIndividu.agama !== 'Islam' && dataState.selectedDataIndividu.agama !== 'Kristen' && dataState.isEditMode ? dataState.selectedDataIndividu.agama : '')

      
      setOtherModePekerjaan(dataState.selectedDataIndividu.pekerjaanUtama!== 'Petani' && dataState.selectedDataIndividu.pekerjaanUtama!== 'Guru' && dataState.selectedDataIndividu.pekerjaanUtama!== 'Guru Agama' && dataState.selectedDataIndividu.pekerjaanUtama!== 'Pedagang' && dataState.selectedDataIndividu.pekerjaanUtama!== 'PNS' && dataState.selectedDataIndividu.pekerjaanUtama!== 'TNI' && dataState.selectedDataIndividu.pekerjaanUtama!== 'Pegawai Kantor Desa' && dataState.selectedDataIndividu.pekerjaanUtama!== 'Swasta' && dataState.isEditMode ? true : false)
      setOtherPekerjaan(dataState.selectedDataIndividu.pekerjaanUtama!== 'Petani' && dataState.selectedDataIndividu.pekerjaanUtama!== 'Guru' && dataState.selectedDataIndividu.pekerjaanUtama!== 'Guru Agama' && dataState.selectedDataIndividu.pekerjaanUtama!== 'Pedagang' && dataState.selectedDataIndividu.pekerjaanUtama!== 'PNS' && dataState.selectedDataIndividu.pekerjaanUtama!== 'TNI' && dataState.selectedDataIndividu.pekerjaanUtama!== 'Pegawai Kantor Desa' && dataState.selectedDataIndividu.pekerjaanUtama!== 'Swasta' && dataState.isEditMode ? dataState.selectedDataIndividu.pekerjaan_utama : '')
    
      
      setOtherModePendidikan(dataState.selectedDataIndividu.pendidikan !== 'Tidak Sekolah' && dataState.selectedDataIndividu.pendidikan !== 'SD' && dataState.selectedDataIndividu.pendidikan !== 'SMP' && dataState.selectedDataIndividu.pendidikan !== 'SMA' && dataState.selectedDataIndividu.pendidikan !== 'Diploma' && dataState.selectedDataIndividu.pendidikan !== 'Sarjana' && dataState.selectedDataIndividu.pendidikan !== 'Magister' && dataState.selectedDataIndividu.pendidikan !== 'Doktor' && dataState.selectedDataIndividu.pendidikan !== 'Pesantren' && dataState.isEditMode ? true : false)
      setOtherPendidikan(dataState.selectedDataIndividu.pendidikan !== 'Tidak Sekolah' && dataState.selectedDataIndividu.pendidikan !== 'SD' && dataState.selectedDataIndividu.pendidikan != 'SMP' && dataState.selectedDataIndividu.pendidikan !== 'SMA' && dataState.selectedDataIndividu.pendidikan !== 'Diploma' && dataState.selectedDataIndividu.pendidikan !== 'Sarjana' && dataState.selectedDataIndividu.pendidikan !== 'Magister' && dataState.selectedDataIndividu.pendidikan !== 'Doktor' && dataState.selectedDataIndividu.pendidikan !== 'Pesantren' && dataState.isEditMode ? dataState.selectedDataIndividu.pendidikan : '')

    }
    return () => {
      setEditMode(false)
    }
  }, [])

  return (
    <CRow>
      <Loader visible={isLoading}/>
      <ModalSubmitState visible={isModalVisible} setVisible={setIsModalVisible} message={modalMessage} onClose={dataState.isEditMode ? () => {
        setIsModalVisible(false)
        if (updateSuccess) {
          history.push('/individu')
        }
      } : () => {
        setIsModalVisible(false)
      }}/>
      <CCol xs={12}>
        <DocsCallout name="Form Control" href="forms/form-control" />
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          {/* <CCardHeader>
            <strong>React Form Control</strong>
          </CCardHeader> */}
          <CCardBody>
            <DocsExample href="forms/form-control">
              <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                  <h3>Data Individu</h3>
                  <p style={{
                    fontSize: '20px',
                  }}>Pastikan semua data terisi</p>
                  <br></br>
                  <CFormLabel htmlFor="nomorkkdataindividu">
                    <h6>Nomor Kartu Keluarga (16 Digit)</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="nomorkkdataindividu" 
                    value={noKk}
                    onChange={(e) => setNoKk(e.target.value)}
                    required
                    autoComplete='off'
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="nomornikdataindividu">
                    <h6>NIK (16 Digit)</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="nomornikdataindividu" 
                    value={nik}
                    onChange={(e) => setNik(e.target.value)}  
                    required
                    autoComplete='off'
                  />
                  <ErrorMessage text="NIK sudah terdaftar" visible={errorNik}/>
                </div>
                <InputDesa selectedDesa={desa} setSelectedDesa={setDesa} selectedDusun={dusun} setSelectedDusun={setDusun}/>
                <div className="mb-3">
                  <CFormLabel htmlFor="nama">
                    <h6>Nama</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="nama" 
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    required
                    autoComplete='off'
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="kartunu">
                    <h6>Foto  (jpg/jpeg/png Max.size 2Mb)</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="file" 
                    ref={foto}
                    required={dataState.isEditMode ? false : true}
                    onChange={() => foto.current.files[0] ? setFotoVal(foto.current.files[0]) : setFotoVal('')}
                  />
                  <p style={{
                    color: 'red',
                  }}>{fotoErr}</p>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="JenisKelamin">
                    <h6>Jenis Kelamin &nbsp;</h6>
                  </CFormLabel>
                  <select 
                    id="JenisKelamin" 
                    name="JenisKelamin" 
                    value={jenisKelamin}
                    onChange={(e) => setJenisKelamin(e.target.value)}
                    required
                  >
                    <option value="Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="tempatlahir">
                    <h6>Tempat Lahir</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="tempatlahir" 
                    value={tempatLahir}
                    onChange={(e) => setTempatLahir(e.target.value)}  
                    required
                    autoComplete='off'
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="tempatlahir">
                    <h6>Tanggal Lahir</h6>
                  </CFormLabel>
                  <DatePicker
                    dateFormat={'dd/MM/yyyy'}
                    selected={tanggalLahir}
                    onChange={(date) => setTanggalLahir(date)}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="kartunu">
                    <h6>No Kartu NU</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="kartunu" 
                    value={kartuNu}
                    onChange={(e) => setKartuNu(e.target.value)}  
                    required
                    autoComplete='off'
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="golongandarah">
                    <h6>Golongan Darah &nbsp;</h6>
                  </CFormLabel>
                  <select 
                    id="golongandarah" 
                    name="golongandarah"
                    value={golonganDarah}
                    onChange={(e) => {
                      setGolonganDarah(e.target.value)
                    }}
                    >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                  </select>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="statuspernikahan">
                    <h6>Status Pernikahan &nbsp;</h6>
                  </CFormLabel>
                  <select 
                    id="statusNikah" 
                    name="statuspernikahan"
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value)
                      console.log(e.target.value)
                    }}
                    >
                    <option value="Kawin">Kawin</option>
                    <option value="Tidak Kawin">Tidak Kawin</option>
                    <option value="Duda/Janda">Duda/Janda</option>
                  </select>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="agama">
                    <h6>Agama &nbsp;</h6>
                  </CFormLabel>
                  <br></br>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value='Islam'
                      id="islam"
                      name="agama"
                      onChange={handleChangeAgama}
                      checked={agama === 'Islam'}
                    />
                    <label className="form-check-label" htmlFor="islam">
                      Islam
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="kristen"
                      name="agama"
                      value='Kristen'
                      onChange={handleChangeAgama}
                      checked={agama === 'Kristen'}
                    />
                    <label className="form-check-label" htmlFor="kristen">
                      Kristen
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="other"
                      value='Other'
                      name="agama"
                      onChange={handleChangeAgama}
                      checked={agama !== 'Islam' && agama !== 'Kristen' && dataState.isEditMode}
                    />
                    <label className="form-check-label" htmlFor="agamaother">
                      Other :
                    </label>{' '}
                    <CFormInput type="text" value={otherAgama} id="agamaother" onChange={(e) => {
                      setOtherAgama(e.target.value)
                      setAgama(e.target.value)
                    }} disabled={!otherModeAgama}/>
                  </div>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="suku">
                    <h6>Suku Bangsa</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="suku"
                    value={suku}
                    onChange={(e) => setSuku(e.target.value)}
                    required
                    autoComplete='off'
                    />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="warganegara">
                    <h6>Warganegara &nbsp;</h6>
                  </CFormLabel>
                  <select 
                    id="warganegara" 
                    name="warganegara"
                    value={wargaNegara}
                    onChange={(e) => setWargaNegara(e.target.value)}
                  >
                    <option value="WNI">WNI</option>
                    <option value="WNA">WNA</option>
                  </select>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="nomorhp">
                    <h6>Nomor HP</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="nomorhp" 
                    value={noHp}
                    onChange={(e) => setNoHp(e.target.value)}
                    required
                    autoComplete='off'
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="email">
                    <h6>Alamat Email</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete='off'
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="facebook">
                    <h6>Alamat Facebook</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="facebook" 
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}  
                    required
                    autoComplete='off'
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="instagram">
                    <h6>Alamat Instagram</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)} 
                    required
                    autoComplete='off'
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="pekerjaan">
                    <h6>Kondisi Pekerjaan &nbsp;</h6>
                  </CFormLabel>
                  <select 
                    id="pekerjaan" 
                    name="pekerjaan"
                    value={kondisiPekerjaan}
                    onChange={(e) => setKondisiPekerjaan(e.target.value)}
                  >
                    <option value="Bersekolah">Bersekolah</option>
                    <option value="Ibu Rumah Tangga">Ibu Rumah Tangga</option>
                    <option value="Tidak Bekerja">Tidak Bekerja</option>
                    <option value="Sedang mencari pekerjaan">Sedang mencari pekerjaan</option>
                    <option value="Bekerja">Bekerja</option>
                  </select>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="pekerjaanutama">
                    <h6>Pekerjaan Utama &nbsp;</h6>
                  </CFormLabel>
                  <br></br>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="petani"
                      value='Petani'
                      name='pekerjaan'
                      onChange={handleChangePekerjaan}
                      checked={pekerjaanUtama === 'Petani'}
                    />
                    <label className="form-check-label" htmlFor="petani">
                      Petani
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="guru"
                      value='Guru'
                      name='pekerjaan'
                      onChange={handleChangePekerjaan}
                      checked={pekerjaanUtama === 'Guru'}
                    />
                    <label className="form-check-label" htmlFor="guru">
                      Guru
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="guruagama"
                      value='Guru Agama'
                      name='pekerjaan'
                      onChange={handleChangePekerjaan}
                      checked={pekerjaanUtama === 'Guru Agama'}
                    />
                    <label className="form-check-label" htmlFor="guruagama">
                      Guru Agama
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="Pedagang"
                      value='Pedagang'
                      name='pekerjaan'
                      onChange={handleChangePekerjaan}
                      checked={pekerjaanUtama === 'Pedagang'}
                    />
                    <label className="form-check-label" htmlFor="pedagang">
                      Pedagang
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="pns"
                      value='PNS'
                      name='pekerjaan'
                      onChange={handleChangePekerjaan}
                      checked={pekerjaanUtama === 'PNS'}
                    />
                    <label className="form-check-label" htmlFor="pns">
                      PNS
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="tni"
                      value='TNI'
                      name='pekerjaan'
                      onChange={handleChangePekerjaan}
                      checked={pekerjaanUtama === 'TNI'}
                    />
                    <label className="form-check-label" htmlFor="tni">
                      TNI
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="pegawaikantordesa"
                      value='Pegawai Kantor Desa'
                      name='pekerjaan'
                      onChange={handleChangePekerjaan}
                      checked={pekerjaanUtama === 'Pegawai Kantor Desa'}
                    />
                    <label className="form-check-label" htmlFor="pegawaikantordesa">
                      Pegawai Kantor Desa
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="swasta"
                      value='Swasta'
                      name='pekerjaan'
                      onChange={handleChangePekerjaan}
                      checked={pekerjaanUtama === 'Swasta'}
                    />
                    <label className="form-check-label" htmlFor="swasta">
                      Swasta
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="pekerjaanother"
                      value='Other'
                      name='pekerjaan'
                      onChange={handleChangePekerjaan}
                      checked={pekerjaanUtama!== 'Petani' && pekerjaanUtama!== 'Guru' && pekerjaanUtama!== 'Guru Agama' && pekerjaanUtama!== 'Pedagang' && pekerjaanUtama!== 'PNS' && pekerjaanUtama!== 'TNI' && pekerjaanUtama!== 'Pegawai Kantor Desa' && pekerjaanUtama!== 'Swasta' && dataState.isEditMode}
                    />
                    <label className="form-check-label" htmlFor="pekerjaanother">
                      Other :
                    </label>{' '}
                    <CFormInput 
                      type="text" 
                      id="pekerjaanother" 
                      value={otherPekerjaan}
                      onChange={(e) => {
                        setOtherPekerjaan(e.target.value)
                        setPekerjaanUtama(e.target.value)
                      }} 
                      disabled={!otherModePekerjaan}
                      autoComplete='off'
                    />
                    <br></br>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="jamsostek">
                      <h6>Jaminan Sosial Ketenagakerjaan &nbsp;</h6>
                    </CFormLabel>
                    <select 
                      id="jamsostek" 
                      name="jamsostek" 
                      value={jamsostek} 
                      onChange={(e) => setJamsostek(e.target.value)}
                    >
                      <option value={1}>Peserta</option>
                      <option value={0}>Bukan Peserta</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="jamsoskes">
                      <h6>Jaminan Sosial Kesehatan &nbsp;</h6>
                    </CFormLabel>
                    <select 
                      id="jamsoskes" 
                      name="jamsoskes"
                      value={jamsoskes}
                      onChange={(e) => setJamsoskes(e.target.value)}
                    >
                      <option value={1}>Peserta</option>
                      <option value={0}>Bukan Peserta</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="penghasilansetahun">
                      <h6>Penghasilan Setahun Terakhir</h6>
                    </CFormLabel>
                    <CFormInput 
                      type="number" 
                      placeholder="100000" 
                      value={penghasilanSetahun}
                      onChange={(e) => setPenghasilanSetahun(e.target.value)}
                      id="penghasilansetahun" 
                      required
                      autoComplete='off'
                    />
                  </div>
                  <br></br>
                  <div className="mb-3">
                    <CFormLabel>
                      <h6>Penyakit yang diderita setahun terakhir:</h6>
                    </CFormLabel>
                    <br></br>
                    <CFormLabel htmlFor="muntaber">Muntaber &nbsp;</CFormLabel>
                    <select 
                      id="muntaber" 
                      name="muntaber"
                      value={penyakit.muntaber}  
                      onChange={(e) => setPenyakit({...penyakit, muntaber: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="dbd">Demam Berdarah &nbsp;</CFormLabel>
                    <select 
                      id="dbd" 
                      name="dbd"
                      value={penyakit.demam_berdarah}
                      onChange={(e) => setPenyakit({...penyakit, demam_berdarah: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="campak">Campak &nbsp;</CFormLabel>
                    <select 
                      id="campak" 
                      name="campak"
                      value={penyakit.campak}
                      onChange={(e) => setPenyakit({...penyakit, campak: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="malaria">Malaria &nbsp;</CFormLabel>
                    <select 
                      id="malaria" 
                      name="malaria"
                      value={penyakit.malaria}
                      onChange={(e) => setPenyakit({...penyakit, malaria: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="fluburung">Flu Burung &nbsp;</CFormLabel>
                    <select 
                      id="fluburung" 
                      name="fluburung"
                      value={penyakit.flu_burung}
                      onChange={(e) => setPenyakit({...penyakit, flu_burung: e.target.value})}  
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="covid">Covid-19 &nbsp;</CFormLabel>
                    <select 
                      id="covid" 
                      name="covid"
                      value={penyakit.covid}
                      onChange={(e) => setPenyakit({...penyakit, covid: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="hepatitisb">Hepatitis B &nbsp;</CFormLabel>
                    <select 
                      id="hepatitisb" 
                      name="hepatitisb"
                      value={penyakit.hepatitis_b}
                      onChange={(e) => setPenyakit({...penyakit, hepatitis_b: e.target.value})}  
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="hepatitise">Hepatitis E &nbsp;</CFormLabel>
                    <select 
                      id="hepatitise" 
                      name="hepatitise"
                      value={penyakit.hepatitis_e}
                      onChange={(e) => setPenyakit({...penyakit, hepatitis_e: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="difteri">Difteri &nbsp;</CFormLabel>
                    <select 
                      id="difteri" 
                      name="difteri"
                      value={penyakit.difteri}
                      onChange={(e) => setPenyakit({...penyakit, difteri: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="chikungunya">Chikungunya &nbsp;</CFormLabel>
                    <select 
                      id="chikungunya" 
                      name="chikungunya"
                      value={penyakit.chikungunya}
                      onChange={(e) => setPenyakit({...penyakit, chikungunya: e.target.value})}  
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="leptospirosis">Leptospirosis &nbsp;</CFormLabel>
                    <select 
                      id="leptospirosis" 
                      name="leptospirosis"
                      value={penyakit.leptospirosis}
                      onChange={(e) => setPenyakit({...penyakit, leptospirosis: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="kolerea">Kolerea &nbsp;</CFormLabel>
                    <select 
                      id="kolerea" 
                      name="kolerea"
                      value={penyakit.kolerea}
                      onChange={(e) => setPenyakit({...penyakit, kolerea: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="giziburuk">Gizi Buruk &nbsp;</CFormLabel>
                    <select 
                      id="giziburuk" 
                      name="giziburuk"
                      value={penyakit.gizi_buruk}
                      onChange={(e) => setPenyakit({...penyakit, gizi_buruk: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="jantung">Jantung &nbsp;</CFormLabel>
                    <select 
                      id="jantung" 
                      name="jantung"
                      value={penyakit.jantung}
                      onChange={(e) => setPenyakit({...penyakit, jantung: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="tbc">TBC &nbsp;</CFormLabel>
                    <select 
                      id="tbc" 
                      name="tbc"
                      value={penyakit.tbc}
                      onChange={(e) => setPenyakit({...penyakit, tbc: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="kanker">Kanker &nbsp;</CFormLabel>
                    <select 
                      id="kanker" 
                      name="kanker"
                      value={penyakit.kanker}
                      onChange={(e) => setPenyakit({...penyakit, kanker: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="diabetes">Diabetes &nbsp;</CFormLabel>
                    <select 
                      id="diabetes" 
                      name="diabetes"
                      value={penyakit.diabetes}
                      onChange={(e) => setPenyakit({...penyakit, diabetes: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="lumpuh">Lumpuh &nbsp;</CFormLabel>
                    <select 
                      id="lumpuh" 
                      name="lumpuh"
                      value={penyakit.lumpuh}
                      onChange={(e) => setPenyakit({...penyakit, lumpuh: e.target.value})}  
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <label className="form-check-label" htmlFor="penyakitother">
                      Lainnya :
                    </label>{' '}
                    <CFormInput 
                      type="text" 
                      id="penyakitother" 
                      value={penyakit.lainnya}
                      onChange={(e) => setPenyakit({...penyakit, lainnya: e.target.value})}
                    />
                  </div>
                  <br></br>
                  <div className="mb-3">
                    <CFormLabel>
                      <h6>Disabilitas:</h6>
                    </CFormLabel>
                    <br></br>
                    <CFormLabel htmlFor="tunanetra">Tunanetra &nbsp;</CFormLabel>
                    <select 
                      id="tunanetra" 
                      name="tunanetra"
                      value={disabilitas.tunanetra}
                      onChange={(e) => setDisabilitas({...disabilitas, tunanetra: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="tunarungu">Tunarungu &nbsp;</CFormLabel>
                    <select 
                      id="tunarungu" 
                      name="tunarungu"
                      value={disabilitas.tunarungu}
                      onChange={(e) => setDisabilitas({...disabilitas, tunarungu: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="tunawicara">Tunawicara &nbsp;</CFormLabel>
                    <select 
                      id="tunawicara" 
                      name="tunawicara"
                      value={disabilitas.tunawicara}
                      onChange={(e) => setDisabilitas({...disabilitas, tunawicara: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="runguwicara">Tunarungu-wicara &nbsp;</CFormLabel>
                    <select 
                      id="runguwicara" 
                      name="runguwicara"
                      value={disabilitas.tunarungu_wicara}
                      onChange={(e) => setDisabilitas({...disabilitas, tunarungu_wicara: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="tunadaksa">Tunadaksa(anggotatubuh) &nbsp;</CFormLabel>
                    <select 
                      id="tunadaksa" 
                      name="tunadaksa"
                      value={disabilitas.tunadaksa}
                      onChange={(e) => setDisabilitas({...disabilitas, tunadaksa: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="tunagrahita">
                      Tunagrahita(keterbelakangan mental) &nbsp;
                    </CFormLabel>
                    <select 
                      id="tunagrahita" 
                      name="tunagrahita"
                      value={disabilitas.tunagrahita}
                      onChange={(e) => setDisabilitas({...disabilitas, tunagrahita: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="tunalaras">Tunalaras(sakit jiwa) &nbsp;</CFormLabel>
                    <select 
                      id="tunalaras" 
                      name="tunalaras"
                      value={disabilitas.tunalaras}
                      onChange={(e) => setDisabilitas({...disabilitas, tunalaras: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="ekskusta">Cacat eks-kusta&nbsp;</CFormLabel>
                    <select 
                      id="ekskusta" 
                      name="ekskusta"
                      value={disabilitas.cacat_eks_kusta}
                      onChange={(e) => setDisabilitas({...disabilitas, cacat_eks_kusta: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="cacatganda">Cacat ganda &nbsp;</CFormLabel>
                    <select 
                      id="cacatganda" 
                      name="cacatganda"
                      value={disabilitas.cacat_ganda}
                      onChange={(e) => setDisabilitas({...disabilitas, cacat_ganda: e.target.value})}
                    >
                      <option value={1}>Ya</option>
                      <option value={0}>Tidak</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <CFormLabel>
                      <h6>Pendidikan tertinggi yang ditamatkan:</h6>
                    </CFormLabel>
                    <br></br>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="tidaksekolah"
                        value='Tidak Sekolah'
                        name='pendidikan'
                        onChange={handleChangePendidikan}
                        checked={pendidikan === 'Tidak Sekolah'}
                      />
                      <label className="form-check-label" htmlFor="tidaksekolah">
                        Tidak Sekolah
                      </label>
                    </div>
                    <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="sd"
                      value='SD'
                      name='pendidikan'
                      onChange={handleChangePendidikan}
                      checked={pendidikan === 'SD'}
                    />
                    <label className="form-check-label" htmlFor="sd">
                      SD/Sederajat
                    </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="smp"
                        value='SMP'
                        name='pendidikan'
                        onChange={handleChangePendidikan}
                        checked={pendidikan === 'SMP'}
                      />
                      <label className="form-check-label" htmlFor="smp">
                        SMP/Sederajat
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="sma"
                        value='SMA'
                        name='pendidikan'
                        onChange={handleChangePendidikan}
                        checked={pendidikan === 'SMA'}
                      />
                      <label className="form-check-label" htmlFor="sma">
                        SMA/Sederajat
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="diploma"
                        value='Diploma'
                        name='pendidikan'
                        onChange={handleChangePendidikan}
                        checked={pendidikan === 'Diploma'}
                      />
                      <label className="form-check-label" htmlFor="diploma">
                        Diploma I - III
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="sarjana"
                        value='Sarjana'
                        name='pendidikan'
                        onChange={handleChangePendidikan}
                        checked={pendidikan === 'Sarjana'}
                      />
                      <label className="form-check-label" htmlFor="sarjana">
                        Sarjana (S1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="magister"
                        value='Magister'
                        name='pendidikan'
                        onChange={handleChangePendidikan}
                        checked={pendidikan === 'Magister'}
                      />
                      <label className="form-check-label" htmlFor="magister">
                        Magister (S2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="doktor"
                        value='Doktor'
                        name='pendidikan'
                        onChange={handleChangePendidikan}
                        checked={pendidikan === 'Doktor'}
                      />
                      <label className="form-check-label" htmlFor="doktor">
                        Doktor (S3)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="pesantren"
                        value='Pesantren'
                        name='pendidikan'
                        onChange={handleChangePendidikan}
                        checked={pendidikan === 'Pesantren'}
                      />
                      <label className="form-check-label" htmlFor="pesantren">
                        Pesantren
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="pendidikanother"
                        value='Other'
                        name='pendidikan'
                        onChange={handleChangePendidikan}
                        checked={pendidikan !== 'Tidak Sekolah' && pendidikan !== 'SD' && pendidikan !== 'SMP' && pendidikan !== 'SMA' && pendidikan !== 'Diploma' && pendidikan !== 'Sarjana' && pendidikan !== 'Magister' && pendidikan !== 'Doktor' && pendidikan !== 'Pesantren' && dataState.isEditMode}
                      />
                      <label className="form-check-label" htmlFor="pendidikanother">
                        Other :
                      </label>{' '}
                      <CFormInput 
                        type="text" 
                        id="pendidikananother" 
                        value={otherPendidikan}
                        onChange={(e) => {
                          setOtherPendidikan(e.target.value)
                          setPendidikan(e.target.value)
                        }}
                        disabled={!otherModePendidikan}
                      />
                      <br></br>
                    </div>
                    </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="bahasa">
                      <h6>Bahasa yang digunakan di rumah</h6>
                    </CFormLabel>
                    <CFormInput 
                      type="text" 
                      id="bahasa" 
                      value={bahasaRumah}
                      onChange={(e) => setBahasaRumah(e.target.value)}
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="bahasaformal">
                      <h6>Bahasa yang digunakan di lembaga formal</h6>
                    </CFormLabel>
                    <CFormInput 
                      type="text" 
                      id="bahasaformal" 
                      value={bahasaFormal}
                      onChange={(e) => setBahasaFormal(e.target.value)}
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="kerjabakti">
                      <h6>Kerja bakti setahun terakhir(jumlah)</h6>
                    </CFormLabel>
                    <CFormInput 
                      type="number" 
                      id="kerjabakti"
                      placeholder='0'
                      value={kerjaBakti}
                      onChange={(e) => setKerjaBakti(e.target.value)} 
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="siskamling">
                      <h6>Siskamling setahun terakhir(jumlah)</h6>
                    </CFormLabel>
                    <CFormInput 
                      type="number" 
                      id="siskamling" 
                      placeholder='0'
                      value={siskamling}
                      onChange={(e) => setSiskamling(e.target.value)}
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="pestarakyat">
                      <h6>Pesta rakyat setahun terakhir(jumlah)</h6>
                    </CFormLabel>
                    <CFormInput 
                      type="number" 
                      id="pestarakyat" 
                      placeholder='0'
                      value={pestaRakyat}
                      onChange={(e) => setPestaRakyat(e.target.value)}
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div className="col-auto">
                    <CButton type="submit" className="float-end mb-3">
                      Submit
                    </CButton>
                  </div>
                </div>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FormIndividu
