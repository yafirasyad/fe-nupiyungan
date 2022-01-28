/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCol, CForm, CFormInput, CFormLabel, CRow } from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import { httpClient } from 'src/util/Api'
import Loader from 'src/components/custom/Loader'
import ModalSubmitState from 'src/components/custom/ModalSubmitState'
import InputDesa from 'src/components/custom/InputDesa'

const Select = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [desa, setDesa] = useState(1)
  const [dusun, setDusun] = useState(1)
  const [noKk, setNoKk] = useState('')
  const [namaKepala, setNamaKepala] = useState('')
  const [tempatTinggal, setTempatTinggal] = useState('')
  const [luasLahan, setLuasLahan] = useState(0)
  const [luasRumah, setLuasRumah] = useState(0)
  const [lantai, setLantai] = useState('')
  const [dinding, setDinding] = useState('')
  const [atap, setAtap] = useState('')
  const [jendela, setJendela] = useState('')
  const [mck, setMck] = useState('')
  const [penerangan, setPenerangan] = useState('')
  const [energiMasak, setEnergiMasak] = useState('')
  const [pembuangan, setPembuangan] = useState('')
  const [sumberAirMandi, setSumberAirMandi] = useState('')
  const [sumberAirMinum, setSumberAirMinum] = useState('')
  const [rumahDibawahSutet, setRumahDibawahSutet] = useState(0)
  const [rumahBantaranSungai, setRumahBantaranSungai] = useState(0)
  const [kondisiRumah, setKondisiRumah] = useState('Kumuh')
  const [bltDesa, setBltDesa] = useState(0)
  const [pkh, setPkh] = useState(0)
  const [bantuanSosialTunai, setBantuanSosialTunai] = useState(0)
  const [bantuanPresiden, setBantuanPresiden] = useState(0)
  const [bantuanUmkm, setBantuanUmkm] = useState(0)
  const [bantuanPekerja, setBantuanPekerja] = useState(0)
  const [bantuanPendidikan, setBantuanPendidikan] = useState(0)
  const [aksesKerja, setAksesKerja] = useState('Mudah')
  const [aksesLahan, setAksesLahan] = useState('Mudah')
  const [aksesSekolah, setAksesSekolah] = useState('Mudah')
  const [aksesKesehatan, setAksesKesehatan] = useState('Mudah')
  const [kotakNu, setKotakNu] = useState(0)
  const [noKotak, setNoKotak] = useState('')

  // Akses Pendidikan
  const [paud, setPaud] = useState({
    fasilitas: 'PAUD',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [tk, setTk] = useState({
    fasilitas: 'TK/RA',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [sd, setSd] = useState({
    fasilitas: 'SD/MI/Sederajat',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [smp, setSmp] = useState({
    fasilitas: 'SMP/MTs/Sederajat',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [sma, setSma] = useState({
    fasilitas: 'SMA/MA/Sederajat',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [pt, setPt] = useState({
    fasilitas: 'Perguruan Tinggi',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [pesantren, setPesantren] = useState({
    fasilitas: 'Pesantren',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [seminari, setSeminari] = useState({
    fasilitas: 'Seminari',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [keagamaanLain, setKeagamaanLain] = useState({
    fasilitas: 'Pendidikan Keagamaan lain',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })

  // Akses Kesehatan
  const [rs, setRs] = useState({
    fasilitas: 'Rumah Sakit',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [rsb, setRsb] = useState({
    fasilitas: 'Rumah Sakit Bersalin',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [poliklinik, setPoliklinik] = useState({
    fasilitas: 'Poliklinik',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [puskesmas, setPuskesmas] = useState({
    fasilitas: 'Puskesmas',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [puskesmasBantu, setPuskesmasBantu] = useState({
    fasilitas: 'Puskesmas Pembantu',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [polindes, setPolindes] = useState({
    fasilitas: 'Polindes',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [poskesdes, setPoskesdes] = useState({
    fasilitas: 'Poskesdes',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [posyandu, setPosyandu] = useState({
    fasilitas: 'Posyandu',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })
  const [apotek, setApotek] = useState({
    fasilitas: 'Apotek',
    jarak: 0,
    waktu: 0,
    kemudahan: 'Mudah',
  })

  const [otherModeTempatTinggal, setOtherModeTempatTinggal] = useState(false)
  const [otherTempatTinggal, setOtherTempatTinggal] = useState('')

  const handleTempatTinggalChange = (e) => {
    if (e.target.value === 'Other') {
      setOtherModeTempatTinggal(true)
      setTempatTinggal(otherTempatTinggal)
    }else {
      setOtherModeTempatTinggal(false)
      setTempatTinggal(e.target.value)
    }
  }

  const [otherModeLantai, setOtherModeLantai] = useState(false)
  const [otherLantai, setOtherLantai] = useState('')
  const handleJenisLantaiChange = (e) => {
    if (e.target.value === 'Other') {
      setOtherModeLantai(true)
      setLantai(otherLantai)
    }else {
      setOtherModeLantai(false)
      setLantai(e.target.value)
    }
  }

  const [otherModeDinding, setOtherModeDinding] = useState(false)
  const [otherDinding, setOtherDinding] = useState('')
  const handleDindingChange = (e) => {
    console.log(e.target.value)
    if (e.target.value === 'Other') {
      setOtherModeDinding(true)
      setDinding(otherDinding)
    }else {
      setOtherModeDinding(false)
      setDinding(e.target.value)
    }
  }

  const [otherModeAtap, setOtherModeAtap] = useState(false)
  const [otherAtap, setOtherAtap] = useState('')
  const handleAtapChange = (e) => {
    if (e.target.value === 'Other') {
      setOtherModeAtap(true)
      setAtap(otherAtap)
    }else {
      setOtherModeAtap(false)
      setAtap(e.target.value)
    }
  }
  
  const [otherModePenerangan, setOtherModePenerangan] = useState(false)
  const [otherPenerangan, setOtherPenerangan] = useState('')
  const handlePeneranganChange = (e) => {
    if (e.target.value === 'Other') {
      setOtherModePenerangan(true)
      setPenerangan(otherPenerangan)
    }else {
      setOtherModePenerangan(false)
      setPenerangan(e.target.value)
    }
  }

  const [otherModeEnergiMasak, setOtherModeEnergiMasak] = useState(false)
  const [otherEnergiMasak, setOtherEnergiMasak] = useState('')
  const handleEnergiMasakChange = (e) => {
    if (e.target.value === 'Other') {
      setOtherModeEnergiMasak(true)
      setEnergiMasak(otherEnergiMasak)
    }else {
      setOtherModeEnergiMasak(false)
      setEnergiMasak(e.target.value)
    }
  }

  const [otherModeSumberAirMandi, setOtherModeSumberAirMandi] = useState(false)
  const [otherSumberAirMandi, setOtherSumberAirMandi] = useState('')
  const handleSumberAirMandiChange = (e) => {
    if (e.target.value === 'Other') {
      setOtherModeSumberAirMandi(true)
      setSumberAirMandi(otherSumberAirMandi)
    }else {
      setOtherModeSumberAirMandi(false)
      setSumberAirMandi(e.target.value)
    }
  }

  const [otherModeSumberAirMinum, setOtherModeSumberAirMinum] = useState(false)
  const [otherSumberAirMinum, setOtherSumberAirMinum] = useState('')
  const handleSumberAirMinumChange = (e) => {
    if (e.target.value === 'Other') {
      setOtherModeSumberAirMinum(true)
      setSumberAirMinum(otherSumberAirMinum)
    }else {
      setOtherModeSumberAirMinum(false)
      setSumberAirMinum(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // setIsLoading(true)
    const akses_fasilitas_kesehatan = [
      rs,
      rsb,
      poliklinik,
      puskesmas,
      puskesmasBantu,
      polindes,
      poskesdes,
      posyandu,
      apotek
    ]

    const akses_fasilitas_pendidikan = [
      paud,
      tk,
      sd,
      smp,
      sma,
      pt,
      pesantren,
      seminari,
      keagamaanLain
    ]

    const family = {
      desa_id: desa,
      dusun_id: dusun,
      no_kk: noKk,
      nama_kepala: namaKepala,
      tempat_tinggal: tempatTinggal,
      luas_lahan: luasLahan,
      luas_rumah: luasRumah,
      jenis_lantai: lantai,
      dinding: dinding,
      atap: atap,
      jendela: jendela,
      kotak_nu: kotakNu,
      no_kotak: noKotak,
      mck: mck,
      penerangan: penerangan,
      energi_masak: energiMasak,
      pembuangan: pembuangan,
      sumber_air_mandi: sumberAirMandi,
      sumber_air_minum: sumberAirMinum,
      rumah_dibawah_sutet: rumahDibawahSutet,
      rumah_bantaran_sungai: rumahBantaranSungai,
      kondisi_rumah: kondisiRumah,
      blt_desa: bltDesa,
      pkh: pkh,
      bantuan_sosial_tunai: bantuanSosialTunai,
      bantuan_presiden: bantuanPresiden,
      bantuan_umkm: bantuanUmkm,
      bantuan_pekerja: bantuanPekerja,
      akses_fasilitas_kesehatan: akses_fasilitas_kesehatan,
      akses_fasilitas_pendidikan: akses_fasilitas_pendidikan,
      akses_kerja: aksesKerja,
      akses_lahan: aksesLahan,
      akses_sekolah: aksesSekolah,
      akses_kesehatan: aksesKesehatan,
      kondisi_rumah: kondisiRumah,
      bantuan_pendidikan: bantuanPendidikan,
    }

    httpClient.post('/families',
      family,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
     ).then(res => {
      setIsLoading(false)
      setModalMessage('Data berhasil ditambahkan')
      setIsModalVisible(true)
      cleanState()
     }).catch(err => {
      setIsLoading(false)
      setModalMessage('Data gagal ditambahkan')
      setIsModalVisible(true)
     })
  }

  const cleanState = () => {
    setNoKk('')
    setNamaKepala('')
    setTempatTinggal('')
    setLuasLahan(0)
    setLuasRumah(0)
    setLantai('')
    setDinding('')
    setAtap('')
    setNoKotak('')
    setKotakNu(0)
    setJendela('')
    setMck('')
    setPenerangan('')
    setEnergiMasak('')
    setPembuangan('')
    setSumberAirMandi('')
    setSumberAirMinum('')
    setRumahDibawahSutet(0)
    setRumahBantaranSungai(0)
    setKondisiRumah('Kumuh')
    setBltDesa(0)
    setPkh(0)
    setBantuanSosialTunai(0)
    setBantuanPresiden(0)
    setBantuanUmkm(0)
    setBantuanPekerja(0)
    setBantuanPendidikan(0)
    setAksesKerja('Mudah')
    setAksesLahan('Mudah')
    setAksesSekolah('Mudah')
    setAksesKesehatan('Mudah')

    // Akses Pendidikan
    setPaud({
      fasilitas: 'PAUD',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setTk({
      fasilitas: 'TK/RA',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setSd({
      fasilitas: 'SD/MI/Sederajat',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setSmp({ 
      fasilitas: 'SMP/MTs/Sederajat',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setSma({
      fasilitas: 'SMA/MA/Sederajat',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setPt({
      fasilitas: 'Perguruan Tinggi',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setPesantren({ 
      fasilitas: 'Pesantren',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setSeminari({
      fasilitas: 'Seminari',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setKeagamaanLain({
      fasilitas: 'Pendidikan Keagamaan lain',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })

    // Akses Kesehatan
    setRs({
      fasilitas: 'Rumah Sakit',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setRsb({
      fasilitas: 'Rumah Sakit Bersalin',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setPoliklinik({
      fasilitas: 'Poliklinik',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setPuskesmas({
      fasilitas: 'Puskesmas',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setPuskesmasBantu({
      fasilitas: 'Puskesmas Bantu',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setPolindes({
      fasilitas: 'Polindes',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setPoskesdes({
      fasilitas: 'Poskesdes',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setPosyandu({
      fasilitas: 'Posyandu',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })
    setApotek({
      fasilitas: 'Apotek',
      jarak: 0,
      waktu: 0,
      kemudahan: 'Mudah',
    })

    setOtherModeTempatTinggal(false)
    setOtherTempatTinggal('')

    setOtherModeLantai(false)
    setOtherLantai('')

    setOtherModeDinding(false)
    setOtherDinding('')

    setOtherModeAtap(false)
    setOtherAtap('')

    setOtherModePenerangan(false)
    setOtherPenerangan('')

    setOtherModeEnergiMasak(false)
    setOtherEnergiMasak('')

    setOtherModeSumberAirMandi(false)
    setOtherSumberAirMandi('')

    setOtherModeSumberAirMinum(false)
    setOtherSumberAirMinum('')
  }
  return (
    <CRow>
      <Loader visible={isLoading} />
      <ModalSubmitState visible={isModalVisible} setVisible={setIsModalVisible} message={modalMessage} onClose={() => {
        setIsModalVisible(false)
      }} />
      <CCol xs={12}>
        <DocsCallout name="Form Control" href="forms/form-control" />
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <DocsExample href="forms/form-control">
              <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                  <h3>Data KK</h3>
                  <br></br>
                  <CFormLabel htmlFor="nomorkkdatakk">
                    <h6>Nomor Kartu Keluarga (16 Digit)</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="nomorkkdatakk" 
                    value={noKk}
                    onChange={(e) => setNoKk(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="namakepalakeluarga">
                    <h6>Nama Kepala Keluarga</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="namakepalakeluarga"
                    value={namaKepala}
                    onChange={(e) => setNamaKepala(e.target.value)} 
                    required
                  />
                </div>
                <InputDesa selectedDesa={desa} setSelectedDesa={setDesa} selectedDusun={dusun} setSelectedDusun={setDusun}/>
                <div className="mb-3">
                  <CFormLabel htmlFor="kotaknu">
                    Sudah memiliki kotak NU &nbsp;
                  </CFormLabel>
                  <select 
                    id="kotaknu" 
                    name="kotaknu"
                    value={kotakNu}
                    onChange={(e) => setKotakNu(e.target.value)}
                  >
                    <option value={1}>Ya</option>
                    <option value={0}>Tidak</option>
                  </select>
                  <br></br>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="nokotak">
                    <h6>No registrasi kotak NU</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="nokotak"
                    value={noKotak}
                    onChange={(e) => setNoKotak(e.target.value)} 
                    required={kotakNu === 1 ? true : false}
                    disabled={kotakNu == 1 ? false : true}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="pekerjaanutama">
                    <h6>Tempat Tinggal yang ditempati: &nbsp;</h6>
                  </CFormLabel>
                  <br></br>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="miliksendiri"
                      name="tempattinggal"
                      value="Milik Sendiri"
                      onChange={handleTempatTinggalChange}
                    />
                    <label className="form-check-label" htmlFor="miliksendiri">
                      Milik Sendiri
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="kontrak"
                      name="tempattinggal"
                      value="Kontrak"
                      onChange={handleTempatTinggalChange}
                    />
                    <label className="form-check-label" htmlFor="kontrak">
                      Kontrak/Sewa
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="bebassewa"
                      name="tempattinggal"
                      value="Bebas Sewa"
                      onChange={handleTempatTinggalChange}
                    />
                    <label className="form-check-label" htmlFor="bebassewa">
                      Bebas Sewa
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="dipinjami"
                      name="tempattinggal"
                      value="Dipinjami"
                      onChange={handleTempatTinggalChange}
                    />
                    <label className="form-check-label" htmlFor="dipinjami">
                      Dipinjami
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="dinas"
                      name="tempattinggal"
                      value="Dinas"
                      onChange={handleTempatTinggalChange}
                    />
                    <label className="form-check-label" htmlFor="dinas">
                      Dinas
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="tempattinggalother"
                      name="tempattinggal"
                      value="Other"
                      onChange={handleTempatTinggalChange}
                    />
                    <label className="form-check-label" htmlFor="tempattinggalother">
                      Other :
                    </label>{' '}
                    <CFormInput 
                      type="text" 
                      id="tempattinggalother" 
                      onChange={(e) => {
                        setOtherTempatTinggal(e.target.value)
                        setTempatTinggal(e.target.value)
                      }}
                      disabled={!otherModeTempatTinggal}
                    />
                    <br></br>
                  </div>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="luaslahan">
                    <h6>Luas Lahan Tempat Tinggal (m2)</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="luaslahan" 
                    value={luasLahan}
                    onChange={(e) => setLuasLahan(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="luasrumah">
                    <h6>Luas Rumah Tempat Tinggal (m2)</h6>
                  </CFormLabel>
                  <CFormInput 
                    type="text" 
                    id="luasrumah" 
                    value={luasRumah}
                    onChange={(e) => setLuasRumah(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="jenislantai">
                    <h6>Jenis lantai tempat tinggal terluas &nbsp;</h6>
                  </CFormLabel>
                  <br></br>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="marmergranit"
                      name="jenislantai"
                      value="Marmer/Granit"
                      onChange={handleJenisLantaiChange}
                    />
                    <label className="form-check-label" htmlFor="marmergranit">
                      Marmer/granit
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="keramik"
                      name="jenislantai"
                      value="Keramik"
                      onChange={handleJenisLantaiChange}
                    />
                    <label className="form-check-label" htmlFor="keramik">
                      Keramik
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="vinil"
                      name="jenislantai"
                      value="Vinil"
                      onChange={handleJenisLantaiChange}
                    />
                    <label className="form-check-label" htmlFor="vinil">
                      Vinil
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="ubintegel"
                      name="jenislantai"
                      value="Ubin/Tegel"
                      onChange={handleJenisLantaiChange}
                    />
                    <label className="form-check-label" htmlFor="ubintegel">
                      Ubin/Tegel
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="kayutinggi"
                      name="jenislantai"
                      value="Kayu Tinggi"
                      onChange={handleJenisLantaiChange}
                    />
                    <label className="form-check-label" htmlFor="kayutinggi">
                      Kayu/Papan Kualitas Tinggi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="kayurendah"
                      name="jenislantai"
                      value="Kayu/Papan Kualitas Rendah"
                      onChange={handleJenisLantaiChange}
                    />
                    <label className="form-check-label" htmlFor="kayurendah">
                      Kayu/Papan Kualitas Rendah
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="semenbatamerah"
                      name="jenislantai"
                      value="Semen/Batam Merah"
                      onChange={handleJenisLantaiChange}
                    />
                    <label className="form-check-label" htmlFor="semenbatamerah">
                      Semen/Bata Merah
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="bambu"
                      name="jenislantai"
                      value="Bambu"
                      onChange={handleJenisLantaiChange}
                    />
                    <label className="form-check-label" htmlFor="bambu">
                      Bambu
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="lantaiother"
                      name="jenislantai"
                      value="Other"
                      onChange={handleJenisLantaiChange}
                    />
                    <label className="form-check-label" htmlFor="lantaiother">
                      Other :
                    </label>{' '}
                    <CFormInput 
                      type="text" 
                      id="lantaiother" 
                      onChange={(e) => {
                        setOtherLantai(e.target.value)
                        setLantai(e.target.value)
                      }}
                      disabled={!otherModeLantai}
                    />
                    <br></br>
                  </div>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="dindingrumah">
                    <h6>Dinding sebagian besar rumah &nbsp;</h6>
                  </CFormLabel>
                  <br></br>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="semenbeton"
                      name="dinding"
                      value="Semen/Beton/Kayu Berkualitas Tinggi"
                      onChange={handleDindingChange}
                    />
                    <label className="form-check-label" htmlFor="semenbeton">
                      semen/beton/kayu berkualitas tingi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="kayubambu"
                      name="dinding"
                      value="Kayu berkualitas rendah/bambu"
                      onChange={handleDindingChange}
                    />
                    <label className="form-check-label" htmlFor="kayubambu">
                      kayu berkualitas rendah/bambu
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="dindingother"
                      name="dinding"
                      value="Other"
                      onChange={handleDindingChange}
                    />
                    <label className="form-check-label" htmlFor="dindingother">
                      Other :
                    </label>{' '}
                    <CFormInput 
                      type="text" 
                      id="dindingother" 
                      onChange={(e) => {
                        setOtherDinding(e.target.value)
                        setDinding(e.target.value)
                      }}
                      disabled={!otherModeDinding}
                    />
                    <br></br>
                  </div>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="jendela">
                    <h6>Jendela &nbsp;</h6>
                  </CFormLabel>
                  <br></br>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="adaberfungsi"
                      name="jendela"
                      value="Ada, berfungsi"
                      onChange={(e) => setJendela(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="adaberfungsi">
                      Ada, berfungsi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="adatakberfungsi"
                      name="jendela"
                      value="Ada, tak berfungsi"
                      onChange={(e) => setJendela(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="adatakberfungsi">
                      Ada, tidak berfungsi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="tidakadajendela"
                      name="jendela"
                      value="Tidak ada jendela"
                      onChange={(e) => setJendela(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="tidakadajendela">
                      Tidak ada
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="atap">
                    <h6>Atap &nbsp;</h6>
                  </CFormLabel>
                  <br></br>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="genteng"
                      name="atap"
                      value="Genteng"
                      onChange={handleAtapChange}
                    />
                    <label className="form-check-label" htmlFor="genteng">
                      Genteng
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="kayujerami"
                      name="atap"
                      value="Kayu/Jerami"
                      onChange={handleAtapChange}
                    />
                    <label className="form-check-label" htmlFor="kayujerami">
                      Kayu/Jerami
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="atapother"
                      name="atap"
                      value="Other"
                      onChange={handleAtapChange}
                    />
                    <label className="form-check-label" htmlFor="atapother">
                      Other :
                    </label>{' '}
                    <CFormInput 
                      type="text" 
                      id="atapother" 
                      onChange={(e) => {
                        setOtherAtap(e.target.value)
                        setAtap(e.target.value)
                      }} 
                      disabled={!otherModeAtap} 
                    />
                    <br></br>
                  </div>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="penerangan">
                    <h6>Penerangan Rumah &nbsp;</h6>
                  </CFormLabel>
                  <br></br>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="listrikpln"
                      name="penerangan"
                      value="Listrik PLN"
                      onChange={handlePeneranganChange}
                    />
                    <label className="form-check-label" htmlFor="listrikpln">
                      Listrik PLN
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="listriknonpln"
                      name="penerangan"
                      value="Listrik Non PLN"
                      onChange={handlePeneranganChange}
                    />
                    <label className="form-check-label" htmlFor="listriknonpln">
                      Listrik Non PLN
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="lampuminyak"
                      name="penerangan"
                      value="Lampu Minyak"
                      onChange={handlePeneranganChange}
                    />
                    <label className="form-check-label" htmlFor="lampuminyak">
                      Lampu Minyak
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="tidakadapenerangan"
                      name="penerangan"
                      value="Tidak Ada Penerangan"
                      onChange={handlePeneranganChange}
                    />
                    <label className="form-check-label" htmlFor="tidakadapenerangan">
                      Tidak ada
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="peneranganother"
                      name="penerangan"
                      value="Other"
                      onChange={handlePeneranganChange}
                    />
                    <label className="form-check-label" htmlFor="peneranganother">
                      Other :
                    </label>{' '}
                    <CFormInput 
                      type="text" 
                      id="peneranganother" 
                      onChange={(e) => {
                        setOtherPenerangan(e.target.value)
                        setPenerangan(e.target.value)
                      }}
                      disabled={!otherModePenerangan}
                    />
                    <br></br>
                  </div>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="energi">
                    <h6>Energi Untuk Memasak &nbsp;</h6>
                  </CFormLabel>
                  <br></br>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="lpg"
                      name="energi"
                      value="Gas LPG/Biogas"
                      onChange={handleEnergiMasakChange}
                    />
                    <label className="form-check-label" htmlFor="lpg">
                      Gas LPG/Biogas
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="kayubakar"
                      name="energi"
                      value="Kayu Bakar"
                      onChange={handleEnergiMasakChange} 
                    />
                    <label className="form-check-label" htmlFor="kayubakar">
                      Kayu Bakar
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="minyaktanah"
                      name="energi"
                      value="Minyak Tanah"
                      onChange={handleEnergiMasakChange}
                    />
                    <label className="form-check-label" htmlFor="minyaktanah">
                      Minyak Tanah
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="energiother"
                      name="energi"
                      value="Other"
                      onChange={handleEnergiMasakChange}
                    />
                    <label className="form-check-label" htmlFor="energiother">
                      Other :
                    </label>{' '}
                    <CFormInput 
                      type="text" 
                      id="energiother" 
                      onChange={(e) => {
                        setOtherEnergiMasak(e.target.value)
                        setEnergiMasak(e.target.value)
                      }}
                      disabled={!otherModeEnergiMasak}
                    />
                    <br></br>
                  </div>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="pembuangan">
                    <h6>Tempat pembuangan sampah &nbsp;</h6>
                  </CFormLabel>
                  <br></br>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="dikebun"
                      name="pembuangan"
                      value="Kebun/sungai/drainase"
                      onChange={(e) => setPembuangan(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="dikebun">
                      Di kebun/sungai/drainase
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="dibakar"
                      name="pembuangan"
                      value="Dibakar"
                      onChange={(e) => setPembuangan(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="dibakar">
                      Dibakar
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="sampahangkut"
                      name="pembuangan"
                      value="Sampah diangkut reguler"
                      onChange={(e) => setPembuangan(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="sampahangkut">
                      Tempat sampah diangkut reguler
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="tidakadatempatsampah"
                      name="pembuangan"
                      value="Tidak ada"
                      onChange={(e) => setPembuangan(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="tidakadatempatsampah">
                      Tidak ada
                    </label>
                  </div>
                </div>
                <br></br>
                <div className="mb-3">
                  <CFormLabel htmlFor="mck">
                    <h6>Fasilitas MCK &nbsp;</h6>
                  </CFormLabel>
                  <br></br>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="sendiri"
                      name="mck"
                      value="Sendiri"
                      onChange={(e) => setMck(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="sendiri">
                      Sendiri
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="berkelompok"
                      name="mck"
                      value="Berkelompok/tetangga"
                      onChange={(e) => setMck(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="berkelompok">
                      berkelompok/tetangga
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="mckumum"
                      name="mck"
                      value="MCK umum"
                      onChange={(e) => setMck(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="mckumum">
                      MCK umum
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="tidakadamck"
                      name="mck"
                      value="Tidak ada"
                      onChange={(e) => setMck(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="tidakadamck">
                      Tidak ada
                    </label>
                  </div>
                </div>
                <br></br>
                <div className="mb-3">
                  <CFormLabel htmlFor="sumberairmandi">
                    <h6>Sumber Air Mandi: &nbsp;</h6>
                  </CFormLabel>
                  <br></br>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="sumur"
                      name="sumberairmandi"
                      value="Sumur"
                      onChange={handleSumberAirMandiChange}
                    />
                    <label className="form-check-label" htmlFor="sumur">
                      Mata Air Sumur
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="ledeng"
                      name="sumberairmandi"
                      value="Ledeng/perpiaan berbayar"
                      onChange={handleSumberAirMandiChange}
                    />
                    <label className="form-check-label" htmlFor="ledeng">
                      ledeng/perpiaan berbayar
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="sungaidanau"
                      name="sumberairmandi"
                      value="Sungai/danau/embung"
                      onChange={handleSumberAirMandiChange}
                    />
                    <label className="form-check-label" htmlFor="sungaidanau">
                      sungai, danau, embung
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="tadahairhujan"
                      name="sumberairmandi"
                      value="Tadah air hujan"
                      onChange={handleSumberAirMandiChange}
                    />
                    <label className="form-check-label" htmlFor="tadahairhujan">
                      tadah air hujan
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="airmandiother"
                      name="sumberairmandi"
                      value="Other"
                      onChange={handleSumberAirMandiChange}
                    />
                    <label className="form-check-label" htmlFor="airmandiother">
                      Other :
                    </label>{' '}
                    <CFormInput 
                      type="text" 
                      id="airmandiother" 
                      name="sumberairmandiother"
                      onChange={(e) => {
                        setOtherSumberAirMandi(e.target.value);
                        setSumberAirMandi(e.target.value);
                      }}
                      disabled={!otherModeSumberAirMandi}
                    />
                    <br></br>
                  </div>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="sumberairminum">
                    <h6>Sumber Air Minum: &nbsp;</h6>
                  </CFormLabel>
                  <br></br>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="sumurminum"
                      name="sumberairminum"
                      value="Sumur"
                      onChange={handleSumberAirMinumChange}
                    />
                    <label className="form-check-label" htmlFor="sumurminum">
                      Mata Air Sumur
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="ledengminum"
                      name="sumberairminum"
                      value="Ledeng/perpiaan berbayar"
                      onChange={handleSumberAirMinumChange}
                    />
                    <label className="form-check-label" htmlFor="ledengminum">
                      ledeng/perpiaan berbayar
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="sungaidanauminum"
                      name="sumberairminum"
                      value="Sungai/danau/embung"
                      onChange={handleSumberAirMinumChange}
                    />
                    <label className="form-check-label" htmlFor="sungaidanauminum">
                      sungai, danau, embung
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="tadahairhujanminum"
                      name="sumberairminum"
                      value="Tadah air hujan"
                      onChange={handleSumberAirMinumChange}
                    />
                    <label className="form-check-label" htmlFor="tadahairhujanminum">
                      tadah air hujan
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="airminumother"
                      name="sumberairminum"
                      value="Other"
                      onChange={handleSumberAirMinumChange}
                    />
                    <label className="form-check-label" htmlFor="airminumother">
                      Other :
                    </label>{' '}
                    <CFormInput 
                      type="text" 
                      id="airminumother" 
                      name="sumberairminum"
                      onChange={(e) => {
                        setOtherSumberAirMinum(e.target.value);
                        setSumberAirMinum(e.target.value);
                      }}
                      disabled={!otherModeSumberAirMinum}
                    />
                    <br></br>
                  </div>
                </div>
                <hr></hr>
                <div className="mb-3">
                  <CFormLabel htmlFor="rumahsutet">
                    Rumah berada di bawah sutet/sutt/suttas &nbsp;
                  </CFormLabel>
                  <select 
                    id="rumahsutet" 
                    name="rumahsutet"
                    value={rumahDibawahSutet}
                    onChange={(e) => setRumahDibawahSutet(e.target.value)}
                  >
                    <option value={1}>Ya</option>
                    <option value={0}>Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="rumahsungai">
                    Rumah berada di bantaran sungai &nbsp;
                  </CFormLabel>
                  <select 
                    id="rumahsungai" 
                    name="rumahsungai"
                    value={rumahBantaranSungai}
                    onChange={(e) => setRumahBantaranSungai(e.target.value)}
                  >
                    <option value={1}>Ya</option>
                    <option value={0}>Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="kondisirumah">
                    secara keseluruhan kondisi rumah &nbsp;
                  </CFormLabel>
                  <select 
                    id="kondisirumah" 
                    name="kondisirumah"
                    value={kondisiRumah}
                    onChange={(e) => setKondisiRumah(e.target.value)}
                  >
                    <option value="kumuh">Kumuh</option>
                    <option value="tidak kumuh">Tidak Kumuh</option>
                  </select>
                </div>
                <hr></hr>
                <div className="mb-3">
                  <CFormLabel>
                    <h6>Penerima Program pemerintah:</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="bltdanadesa">BLT dana desa &nbsp;</CFormLabel>
                  <select 
                    id="bltdanadesa" 
                    name="bltdanadesa"
                    value={bltDesa}
                    onChange={(e) => setBltDesa(e.target.value)}
                  >
                    <option value={1}>Ya</option>
                    <option value={0}>Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="keluargaharapan">Program Keluarga Harapan &nbsp;</CFormLabel>
                  <select 
                    id="keluargaharapan"
                    name="keluargaharapan"
                    value={pkh}
                    onChange={(e) => setPkh(e.target.value)}
                  >
                    <option value={1}>Ya</option>
                    <option value={0}>Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="bantaunsosialtunai">Bantuan Sosial Tunai &nbsp;</CFormLabel>
                  <select 
                    id="bantaunsosialtunai" name="bantaunsosialtunai"
                    value={bantuanSosialTunai}
                    onChange={(e) => setBantuanSosialTunai(e.target.value)}
                  >
                    <option value={1}>Ya</option>
                    <option value={0}>Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="bantuanpresiden">Bantuan Presiden &nbsp;</CFormLabel>
                  <select 
                    id="bantuanpresiden" 
                    name="bantuanpresiden"
                    value={bantuanPresiden}
                    onChange={(e) => setBantuanPresiden(e.target.value)}
                  >
                    <option value={1}>Ya</option>
                    <option value={0}>Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="bantuanumkm">Bantuan UMKM &nbsp;</CFormLabel>
                  <select 
                    id="bantuanumkm" 
                    name="bantuanumkm"
                    value={bantuanUmkm}
                    onChange={(e) => setBantuanUmkm(e.target.value)}
                  >
                    <option value={1}>Ya</option>
                    <option value={0}>Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="bantuanuntukpekerja">
                    Bantuan untuk Pekerja &nbsp;
                  </CFormLabel>
                  <select 
                    id="bantuanuntukpekerja" name="bantuanuntukpekerja"
                    value={bantuanPekerja}
                    onChange={(e) => setBantuanPekerja(e.target.value)}
                  >
                    <option value={1}>Ya</option>
                    <option value={0}>Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="bantuanpendidikananak">
                    Bantuan pendidikan anak &nbsp;
                  </CFormLabel>
                  <select 
                    id="bantuanpendidikananak" name="bantuanpendidikananak"
                    value={bantuanPendidikan}
                    onChange={(e) => setBantuanPendidikan(e.target.value)}
                  >
                    <option value={1}>Ya</option>
                    <option value={0}>Tidak</option>
                  </select>
                  <br></br>
                  <br></br>
                </div>
                <div className="mb-3">
                  <h6>Akses Pendidikan</h6>
                  <hr></hr>
                  <CFormLabel htmlFor="paud">
                    <h6>1.PAUD</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakpaud">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakpaud" 
                      value={paud.jarak}
                      onChange={(e) => setPaud({...paud, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhpaud">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhpaud"
                      value={paud.waktu}
                      onChange={(e) => setPaud({...paud, waktu: e.target.value})} 
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanpaud">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanpaud"
                      name="kemudahanpaud"
                      value={paud.kemudahan}
                      onChange={(e) => setPaud({...paud, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="tkra">
                    <br></br>
                    <h6>2.TK/RA</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jaraktkra">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jaraktkra" 
                      value={tk.jarak}
                      onChange={(e) => setTk({...tk, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhtkra">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhtkra" 
                      value={tk.waktu}
                      onChange={(e) => setTk({...tk, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahantkra">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahantk"
                      name="kemudahantk"
                      value={tk.kemudahan}
                      onChange={(e) => setTk({...tk, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="sdmi">
                    <br></br>
                    <h6>3.SD/MI atau Sederajat</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jaraksdmi">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jaraksdmi" 
                      value={sd.jarak}
                      onChange={(e) => setSd({...sd, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhsdmi">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhsdmi" 
                      value={sd.waktu}
                      onChange={(e) => setSd({...sd, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahansdmi">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahansd"
                      name="kemudahansd"
                      value={sd.kemudahan}
                      onChange={(e) => setSd({...sd, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="smpmts">
                    <br></br>
                    <h6>4.SMP/MTs atau Sederajat</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jaraksmpmts">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jaraksmpmts" 
                      value={smp.jarak}
                      onChange={(e) => setSmp({...smp, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhsmpmts">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhsmpmts" 
                      value={smp.waktu}
                      onChange={(e) => setSmp({...smp, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahansmpmts">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahansmp"
                      name="kemudahansmp"
                      value={smp.kemudahan}
                      onChange={(e) => setSmp({...smp, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="smama">
                    <br></br>
                    <h6>5.SMA/MA atau Sederajat</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jaraksmama">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jaraksmama" 
                      value={sma.jarak}
                      onChange={(e) => setSma({...sma, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhsmama">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhsmama" 
                      value={sma.waktu}
                      onChange={(e) => setSma({...sma, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahansmama">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahansma"
                      name="kemudahansma"
                      value={sma.kemudahan}
                      onChange={(e) => setSma({...sma, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="ptn">
                    <br></br>
                    <h6>6.Perguruan Tinggi</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakptn">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakptn" 
                      value={pt.jarak}
                      onChange={(e) => setPt({...pt, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhptn">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhpt" 
                      value={pt.waktu}
                      onChange={(e) => setPt({...pt, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanptn">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanpt"
                      name="kemudahanpt"
                      value={pt.kemudahan}
                      onChange={(e) => setPt({...pt, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="pstrn">
                    <br></br>
                    <h6>7.Pesantren</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakpstrn">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakpstrn" 
                      value={pesantren.jarak}
                      onChange={(e) => setPesantren({...pesantren, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhpstrn">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhpstrn" 
                      value={pesantren.waktu}
                      onChange={(e) => setPesantren({...pesantren, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanpstrn">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanpstrn"
                      name="kemudahanpstrn"
                      value={pesantren.kemudahan}
                      onChange={(e) => setPesantren({...pesantren, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="seminari">
                    <br></br>
                    <h6>8.Seminari</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakseminari">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakseminari" 
                      value={seminari.jarak}
                      onChange={(e) => setSeminari({...seminari, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhseminari">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhseminari" 
                      value={seminari.waktu}
                      onChange={(e) => setSeminari({...seminari, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanseminari">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanseminari"
                      name="kemudahanseminari"
                      value={seminari.kemudahan}
                      onChange={(e) => setSeminari({...seminari, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="ppai">
                    <br></br>
                    <h6>9.Pendidikan Keagamaan Lain</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakppai">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakppai" 
                      value={keagamaanLain.jarak}
                      onChange={(e) => setKeagamaanLain({...keagamaanLain, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhppai">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhppai" 
                      value={keagamaanLain.waktu}
                      onChange={(e) => setKeagamaanLain({...keagamaanLain, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanppai">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanppai"
                      name="kemudahanppai"
                      value={keagamaanLain.kemudahan}
                      onChange={(e) => setKeagamaanLain({...keagamaanLain, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                </div>
                <br></br>
                <div className="mb-3">
                  <h6>Akses Fasilitas Kesehatan</h6>
                  <hr></hr>
                  <CFormLabel htmlFor="rumahsakit">
                    <h6>1.Rumah Sakit</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakrumahsakit">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakrumahsakit" 
                      value={rs.jarak}
                      onChange={(e) => setRs({...rs, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhrumahsakit">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhrumahsakit" 
                      value={rs.waktu}
                      onChange={(e) => setRs({...rs, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanrumahsakit">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanrumahsakit"
                      name="kemudahanrumahsakit"
                      value={rs.kemudahan}
                      onChange={(e) => setRs({...rs, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="rsbersalin">
                    <br></br>
                    <h6>2.Rumah Sakit Bersalin</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakrsbersalin">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakrsbersalin" 
                      value={rsb.jarak}
                      onChange={(e) => setRsb({...rsb, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhrsbersalin">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhrsbersalin" 
                      value={rsb.waktu}
                      onChange={(e) => setRsb({...rsb, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanrsbersalin">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanrsbersalin"
                      name="kemudahanrsbersalin"
                      value={rsb.kemudahan}
                      onChange={(e) => setRsb({...rs, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="poliklinik">
                    <br></br>
                    <h6>3.Poliklinik</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakpoliklinik">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakpoliklinik" 
                      value={poliklinik.jarak}
                      onChange={(e) => setPoliklinik({...poliklinik, jarak: e.target.value})}
                      required  
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhpoliklinik">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhpoliklinik" 
                      value={poliklinik.waktu}
                      onChange={(e) => setPoliklinik({...poliklinik, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanpoliklinik">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanpoliklinik"
                      name="kemudahanpoliklinik"
                      value={poliklinik.kemudahan}
                      onChange={(e) => setPoliklinik({...poliklinik, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="puskesmas">
                    <br></br>
                    <h6>4.Puskesmas</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakpuskesmas">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakpuskesmas" 
                      value={puskesmas.jarak}
                      onChange={(e) => setPuskesmas({...puskesmas, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhpuskesmas">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhpuskesmas" 
                      value={puskesmas.waktu}
                      onChange={(e) => setPuskesmas({...puskesmas, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanpuskesmas">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanpuskesmas"
                      name="kemudahanpuskesmas"
                      value={puskesmas.kemudahan}
                      onChange={(e) => setPuskesmas({...poliklinik, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="pustu">
                    <br></br>
                    <h6>5.Puskesmas Pembantu/Pustu</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakpustu">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakpustu" 
                      value={puskesmasBantu.jarak}
                      onChange={(e) => setPuskesmasBantu({...puskesmasBantu, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhpustu">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhpustu" 
                      value={puskesmasBantu.waktu}
                      onChange={(e) => setPuskesmasBantu({...puskesmasBantu, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanpustu">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanpustu"
                      name="kemudahanpustu"
                      value={puskesmasBantu.kemudahan}
                      onChange={(e) => setPuskesmasBantu({...puskesmasBantu, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="polindes">
                    <br></br>
                    <h6>6.Polindes</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakpolindes">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakpolindes" 
                      value={polindes.jarak}
                      onChange={(e) => setPolindes({...polindes, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhpolindes">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhpolindes" 
                      value={polindes.waktu}
                      onChange={(e) => setPolindes({...polindes, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanpolindes">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanpolindes"
                      name="kemudahanpolindes"
                      value={polindes.kemudahan}
                      onChange={(e) => setPolindes({...polindes, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="poskesdes">
                    <br></br>
                    <h6>7.Poskesdes</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakposkesdes">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakposkesdes" 
                      value={poskesdes.jarak}
                      onChange={(e) => setPoskesdes({...poskesdes, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhposkesdes">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhposkesdes" 
                      value={poskesdes.waktu}
                      onChange={(e) => setPoskesdes({...poskesdes, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanposkesdes">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanposkesdes"
                      name="kemudahanposkesdes"
                      value={poskesdes.kemudahan}
                      onChange={(e) => setPoskesdes({...poskesdes, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="posyandu">
                    <br></br>
                    <h6>8.Posyandu</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakposyandu">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakposyandu" 
                      value={posyandu.jarak}
                      onChange={(e) => setPosyandu({...posyandu, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhposyandu">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhposyandu" 
                      value={posyandu.waktu}
                      onChange={(e) => setPosyandu({...posyandu, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanposyandu">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanposyandu"
                      name="kemudahanposyandu"
                      value={posyandu.kemudahan}
                      onChange={(e) => setPosyandu({...posyandu, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="apotek">
                    <br></br>
                    <h6>9.Apotek</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakapotek">
                    Jarak(km):
                    <CFormInput 
                      type="text" 
                      id="jarakapotek" 
                      value={apotek.jarak}
                      onChange={(e) => setApotek({...apotek, jarak: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhapotek">
                    Waktu Tempuh (jam):
                    <CFormInput 
                      type="text" 
                      id="waktutempuhapotek" 
                      value={apotek.waktu}
                      onChange={(e) => setApotek({...apotek, waktu: e.target.value})}
                      required
                    />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanapotek">
                    Mudah/Sulit?:
                    <select 
                      id="kemudahanapotek"
                      name="kemudahanapotek"
                      value={apotek.kemudahan}
                      onChange={(e) => setApotek({...apotek, kemudahan: e.target.value})}
                    >
                      <option value="Mudah">Mudah</option>
                      <option value="Sulit">Sulit</option>
                    </select>
                  </CFormLabel>
                </div>
                <br></br>
                <div className="mb-3">
                  <h6>Akses Sarana Prasarana:</h6>
                  <hr></hr>
                  <CFormLabel htmlFor="aksessarpras"></CFormLabel>
                  <CFormLabel htmlFor="lokasiputama">Lokasi Pekerjaan Utama &nbsp;</CFormLabel>
                  <select 
                    id="lokasiputama" 
                    name="lokasiputama"
                    value={aksesKerja}
                    onChange={(e) => setAksesKerja(e.target.value)}
                  >
                    <option value="Mudah">Mudah</option>
                    <option value="Sulit">Sulit</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="lahanpertanian">Lahan pertanian &nbsp;</CFormLabel>
                  <select 
                    id="lahanpertaniani" 
                    name="lahanpertanian"
                    value={aksesLahan}
                    onChange={(e) => setAksesLahan(e.target.value)}
                  >
                    <option value="Mudah">Mudah</option>
                    <option value="Sulit">Sulit</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="sekolahsarana">Sekolah &nbsp;</CFormLabel>
                  <select 
                    id="sekolahsarana" 
                    name="sekolahsarana"
                    value={aksesSekolah}
                    onChange={(e) => setAksesSekolah(e.target.value)}  
                  >
                    <option value="Mudah">Mudah</option>
                    <option value="Sulit">Sulit</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="faskes">Fasilitas Kesehatan &nbsp;</CFormLabel>
                  <select 
                    id="faskes" 
                    name="faskes"
                    value={aksesKesehatan}
                    onChange={(e) => setAksesKesehatan(e.target.value)}
                  >
                    <option value="Mudah">Mudah</option>
                    <option value="Sulit">Sulit</option>
                  </select>
                </div>
                <div className="col-auto">
                  <CButton type="submit" className="float-end mb-3">
                    Submit
                  </CButton>
                </div>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Select
