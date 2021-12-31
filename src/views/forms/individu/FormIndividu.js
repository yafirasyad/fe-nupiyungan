/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
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
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample, FormLabel } from 'src/components'
import axios from 'axios'
import { httpClient } from 'src/util/Api'

const FormIndividu = () => {
  const [otherModeAgama, setOtherModeAgama] = useState(false)
  const [otherAgama, setOtherAgama] = useState('')
  const [otherModePekerjaan, setOtherModePekerjaan] = useState(false)
  const [otherPekerjaan, setOtherPekerjaan] = useState('')
  const [otherModePendidikan, setOtherModePendidikan] = useState(false)
  const [otherPendidikan, setOtherPendidikan] = useState('')

  // Person
  const [nik, setNik] = useState('')
  const [noKk, setNoKk] = useState('')
  const [nama, setNama] = useState('')
  const [jenisKelamin, setJenisKelamin] = useState('Laki')
  const [tempatLahir, setTempatLahir] = useState('')
  const [tanggalLahir, setTanggalLahir] = useState('01-02-2021')
  const [status, setStatus] = useState('Kawin')
  const [agama, setAgama] = useState('')
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
  const [jamsostek, setJamsostek] = useState(false)
  const [jamsoskes, setJamsoskes] = useState(false)
  
 
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
    const person = {
      nik: nik,
      no_kk: noKk,
      nama: nama,
      jenis_kelamin: jenisKelamin,
      tempat_lahir: tempatLahir,
      tanggal_lahir: tanggalLahir,
      status: status,
      agama: agama,
      suku: suku,
      warga_negara: wargaNegara,
      no_hp: noHp,
      email: email,
      facebook: facebook,
      instagram: instagram,
      kondisi_pekerjaan: kondisiPekerjaan,
      pekerjaan_utama: pekerjaanUtama,
      penghasilan_setahun: penghasilanSetahun,
      pendidikan: pendidikan,
      kerja_bakti: kerjaBakti,
      siskamling: siskamling,
      pesta_rakyat: pestaRakyat,
      bahasa_rumah: bahasaRumah,
      bahasa_formal: bahasaFormal,
      jaminan_sosial_ketenagakerjaan: jamsostek,
      jaminan_sosial_kesehatan: jamsoskes,
    }
    httpClient.post('/persons', {
      ...person,
      penyakit: penyakit,
      disabilitas: disabilitas,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    }).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err.response)
    })
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
  return (
    <CRow>
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
                  <br></br>
                  <CFormLabel htmlFor="nomorkkdataindividu">
                    <h6>Nomor Kartu Keluarga (16 Digit)</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="nomorkkdataindividu" 
                    value={noKk}
                    onChange={(e) => setNoKk(e.target.value)}
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
                  />
                </div>
                {/* <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
                  <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                </div> */}
                <div className="mb-3">
                  <CFormLabel htmlFor="nama">
                    <h6>Nama</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="nama" 
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
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
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="statuspernikahan">
                    <h6>Status Pernikahan &nbsp;</h6>
                  </CFormLabel>
                  <select 
                    id="statusNikah" 
                    name="statuspernikahan"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
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
                    />
                    <label className="form-check-label" htmlFor="pekerjaanother">
                      Other :
                    </label>{' '}
                    <CFormInput 
                      type="text" 
                      id="pekerjaanother" 
                      onChange={(e) => {
                        setOtherPekerjaan(e.target.value)
                        setPekerjaanUtama(e.target.value)
                      }} 
                      disabled={!otherModePekerjaan}
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
                      />
                      <label className="form-check-label" htmlFor="pendidikanother">
                        Other :
                      </label>{' '}
                      <CFormInput 
                        type="text" 
                        id="pendidikananother" 
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
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="kerjabakti">
                      <h6>Kerja bakti setahun terakhir(jumlah)</h6>
                    </CFormLabel>
                    <CFormInput 
                      type="text" 
                      id="kerjabakti"
                      placeholder='0'
                      value={kerjaBakti}
                      onChange={(e) => setKerjaBakti(e.target.value)} 
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="siskamling">
                      <h6>Siskamling setahun terakhir(jumlah)</h6>
                    </CFormLabel>
                    <CFormInput 
                      type="text" 
                      id="siskamling" 
                      placeholder='0'
                      value={siskamling}
                      onChange={(e) => setSiskamling(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="pestarakyat">
                      <h6>Pesta rakyat setahun terakhir(jumlah)</h6>
                    </CFormLabel>
                    <CFormInput 
                      type="text" 
                      id="pestarakyat" 
                      placeholder='0'
                      value={pestaRakyat}
                      onChange={(e) => setPestaRakyat(e.target.value)}
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
