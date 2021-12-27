/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { CButton, CCard, CCardBody, CCol, CForm, CFormInput, CFormLabel, CRow } from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Select = () => {
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
              <CForm>
                <div className="mb-3">
                  <h3>Data KK</h3>
                  <br></br>
                  <CFormLabel htmlFor="nomorkkdatakk">
                    <h6>Nomor Kartu Keluarga (16 Digit)</h6>
                  </CFormLabel>
                  <CFormInput type="text" id="nomorkkdatakk" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="namakepalakeluarga">
                    <h6>Nama Kepala Keluarga</h6>
                  </CFormLabel>
                  <CFormInput type="text" id="namakepalakeluarga" />
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
                      name="flexRadioDefault"
                      id="miliksendiri"
                    />
                    <label className="form-check-label" htmlFor="miliksendiri">
                      Milik Sendiri
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="kontrak"
                    />
                    <label className="form-check-label" htmlFor="kontrak">
                      Kontrak/Sewa
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="bebassewa"
                    />
                    <label className="form-check-label" htmlFor="bebassewa">
                      Bebas Sewa
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="dipinjami"
                    />
                    <label className="form-check-label" htmlFor="dipinjami">
                      Dipinjami
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="dinas"
                    />
                    <label className="form-check-label" htmlFor="dinas">
                      Dinas
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="tempattinggalother"
                    />
                    <label className="form-check-label" htmlFor="tempattinggalother">
                      Other :
                    </label>{' '}
                    <CFormInput type="text" id="tempattinggalother" />
                    <br></br>
                  </div>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="luaslahan">
                    <h6>Luas Lahan Tempat Tinggal (m2)</h6>
                  </CFormLabel>
                  <CFormInput type="text" id="luaslahan" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="luasrumah">
                    <h6>Luas Rumah Tempat Tinggal (m2)</h6>
                  </CFormLabel>
                  <CFormInput type="text" id="luasrumah" />
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
                      name="flexRadioDefault"
                      id="marmergranit"
                    />
                    <label className="form-check-label" htmlFor="marmergranit">
                      Marmer/granit
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="keramik"
                    />
                    <label className="form-check-label" htmlFor="keramik">
                      Keramik
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="vinil"
                    />
                    <label className="form-check-label" htmlFor="vinil">
                      Vinil
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="ubintegel"
                    />
                    <label className="form-check-label" htmlFor="ubintegel">
                      Ubin/Tegel
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="kayutinggi"
                    />
                    <label className="form-check-label" htmlFor="kayutinggi">
                      Kayu/Papan Kualitas Tinggi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="kayurendah"
                    />
                    <label className="form-check-label" htmlFor="kayurendah">
                      Kayu/Papan Kualitas Rendah
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="semenbatamerah"
                    />
                    <label className="form-check-label" htmlFor="semenbatamerah">
                      Semen/Bata Merah
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="bambu"
                    />
                    <label className="form-check-label" htmlFor="bambu">
                      Bambu
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="lantaiother"
                    />
                    <label className="form-check-label" htmlFor="lantaiother">
                      Other :
                    </label>{' '}
                    <CFormInput type="text" id="lantaiother" />
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
                      name="flexRadioDefault"
                      id="semenbeton"
                    />
                    <label className="form-check-label" htmlFor="semenbeton">
                      semen/beton/kayu berkualitas tingi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="kayubambu"
                    />
                    <label className="form-check-label" htmlFor="kayubambu">
                      kayu berkualitas rendah/bambu
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="dindingother"
                    />
                    <label className="form-check-label" htmlFor="dindingother">
                      Other :
                    </label>{' '}
                    <CFormInput type="text" id="dindingother" />
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
                      name="flexRadioDefault"
                      id="adaberfungsi"
                    />
                    <label className="form-check-label" htmlFor="adaberfungsi">
                      Ada, berfungsi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="adatakberfungsi"
                    />
                    <label className="form-check-label" htmlFor="adatakberfungsi">
                      Ada, tidak berfungsi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="tidakadajendela"
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
                      name="flexRadioDefault"
                      id="genteng"
                    />
                    <label className="form-check-label" htmlFor="genteng">
                      Genteng
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="kayujerami"
                    />
                    <label className="form-check-label" htmlFor="kayujerami">
                      Kayu/Jerami
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="atapother"
                    />
                    <label className="form-check-label" htmlFor="atapother">
                      Other :
                    </label>{' '}
                    <CFormInput type="text" id="atapother" />
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
                      name="flexRadioDefault"
                      id="listrikpln"
                    />
                    <label className="form-check-label" htmlFor="listrikpln">
                      Listrik PLN
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="listriknonpln"
                    />
                    <label className="form-check-label" htmlFor="listriknonpln">
                      Listrik Non PLN
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="lampuminyak"
                    />
                    <label className="form-check-label" htmlFor="lampuminyak">
                      Lampu Minyak
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="tidakadapenerangan"
                    />
                    <label className="form-check-label" htmlFor="tidakadapenerangan">
                      Tidak ada
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="peneranganother"
                    />
                    <label className="form-check-label" htmlFor="peneranganother">
                      Other :
                    </label>{' '}
                    <CFormInput type="text" id="peneranganother" />
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
                      name="flexRadioDefault"
                      id="lpg"
                    />
                    <label className="form-check-label" htmlFor="lpg">
                      Gas LPG/Biogas
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="kayubakar"
                    />
                    <label className="form-check-label" htmlFor="kayubakar">
                      Kayu Bakar
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="minyaktanah"
                    />
                    <label className="form-check-label" htmlFor="minyaktanah">
                      Minyak Tanah
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="energiother"
                    />
                    <label className="form-check-label" htmlFor="energiother">
                      Other :
                    </label>{' '}
                    <CFormInput type="text" id="energiother" />
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
                      name="flexRadioDefault"
                      id="dikebun"
                    />
                    <label className="form-check-label" htmlFor="dikebun">
                      Di kebun/sungai/drainase
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="dibakar"
                    />
                    <label className="form-check-label" htmlFor="dibakar">
                      Dibakar
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="sampahangkut"
                    />
                    <label className="form-check-label" htmlFor="sampahangkut">
                      Tempat sampah diangkut reguler
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="tidakadatempatsampah"
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
                      name="flexRadioDefault"
                      id="sendiri"
                    />
                    <label className="form-check-label" htmlFor="sendiri">
                      Sendiri
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="berkelompok"
                    />
                    <label className="form-check-label" htmlFor="berkelompok">
                      berkelompok/tetangga
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="mckumum"
                    />
                    <label className="form-check-label" htmlFor="mckumum">
                      MCK umum
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="tidakadamck"
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
                      name="flexRadioDefault"
                      id="sumur"
                    />
                    <label className="form-check-label" htmlFor="sumur">
                      Mata Air Sumur
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="ledeng"
                    />
                    <label className="form-check-label" htmlFor="ledeng">
                      ledeng/perpiaan berbayar
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="sungaidanau"
                    />
                    <label className="form-check-label" htmlFor="sungaidanau">
                      sungai, danau, embung
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="tadahairhujan"
                    />
                    <label className="form-check-label" htmlFor="tadahairhujan">
                      tadah air hujan
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="airmandiother"
                    />
                    <label className="form-check-label" htmlFor="airmandiother">
                      Other :
                    </label>{' '}
                    <CFormInput type="text" id="airmandiother" />
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
                      name="flexRadioDefault"
                      id="sumurminum"
                    />
                    <label className="form-check-label" htmlFor="sumurminum">
                      Mata Air Sumur
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="ledengminum"
                    />
                    <label className="form-check-label" htmlFor="ledengminum">
                      ledeng/perpiaan berbayar
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="sungaidanauminum"
                    />
                    <label className="form-check-label" htmlFor="sungaidanauminum">
                      sungai, danau, embung
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="tadahairhujanminum"
                    />
                    <label className="form-check-label" htmlFor="tadahairhujanminum">
                      tadah air hujan
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="airminumother"
                    />
                    <label className="form-check-label" htmlFor="airminumother">
                      Other :
                    </label>{' '}
                    <CFormInput type="text" id="airminumother" />
                    <br></br>
                  </div>
                </div>
                <hr></hr>
                <div className="mb-3">
                  <CFormLabel htmlFor="rumahsutet">
                    Rumah berada di bawah sutet/sutt/suttas &nbsp;
                  </CFormLabel>
                  <select id="rumahsutet" name="rumahsutet">
                    <option value="ya">Ya</option>
                    <option value="tidak">Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="rumahsungai">
                    Rumah berada di bantaran sungai &nbsp;
                  </CFormLabel>
                  <select id="rumahsungai" name="rumahsungai">
                    <option value="ya">Ya</option>
                    <option value="tidak">Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="kondisirumah">
                    secara keseluruhan kondisi rumah &nbsp;
                  </CFormLabel>
                  <select id="kondisirumah" name="kondisirumah">
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
                  <select id="bltdanadesa" name="bltdanadesa">
                    <option value="ya">Ya</option>
                    <option value="tidak">Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="keluargaharapan">Program Keluarga Harapan &nbsp;</CFormLabel>
                  <select id="keluargaharapan" name="keluargaharapan">
                    <option value="ya">Ya</option>
                    <option value="tidak">Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="tunawicara">Tunawicara &nbsp;</CFormLabel>
                  <select id="tunawicara" name="tunawicara">
                    <option value="ya">Ya</option>
                    <option value="tidak">Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="bantaunsosialtunai">Bantuan Sosial Tunai &nbsp;</CFormLabel>
                  <select id="bantaunsosialtunai" name="bantaunsosialtunai">
                    <option value="ya">Ya</option>
                    <option value="tidak">Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="bantuanpresiden">Bantuan Presiden &nbsp;</CFormLabel>
                  <select id="bantuanpresiden" name="bantuanpresiden">
                    <option value="ya">Ya</option>
                    <option value="tidak">Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="bantuanumkm">Bantuan UMKM &nbsp;</CFormLabel>
                  <select id="bantuanumkm" name="bantuanumkm">
                    <option value="ya">Ya</option>
                    <option value="tidak">Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="bantuanuntukpekerja">
                    Bantuan untuk Pekerja &nbsp;
                  </CFormLabel>
                  <select id="bantuanuntukpekerja" name="bantuanuntukpekerja">
                    <option value="ya">Ya</option>
                    <option value="tidak">Tidak</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="bantuanpendidikananak">
                    Bantuan pendidikan anak &nbsp;
                  </CFormLabel>
                  <select id="bantuanpendidikananak" name="bantuanpendidikananak">
                    <option value="ya">Ya</option>
                    <option value="tidak">Tidak</option>
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
                    <CFormInput type="text" id="jarakpaud" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhpaud">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhpaud" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanpaud">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanpaud" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="tkra">
                    <br></br>
                    <h6>2.TK/RA</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jaraktkra">
                    Jarak(km):
                    <CFormInput type="text" id="jaraktkra" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhtkra">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhtkra" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahantkra">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahantkra" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="sdmi">
                    <br></br>
                    <h6>3.SD/MI atau Sederajat</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jaraksdmi">
                    Jarak(km):
                    <CFormInput type="text" id="jaraksdmi" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhsdmi">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhsdmi" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahansdmi">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahansdmi" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="smpmts">
                    <br></br>
                    <h6>4.SMP/MTs atau Sederajat</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jaraksmpmts">
                    Jarak(km):
                    <CFormInput type="text" id="jaraksmpmts" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhsmpmts">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhsmpmts" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahansmpmts">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahansmpmts" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="smama">
                    <br></br>
                    <h6>5.SMA/MA atau Sederajat</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jaraksmama">
                    Jarak(km):
                    <CFormInput type="text" id="jaraksmama" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhsmama">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhsmama" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahansmama">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahansmama" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="ptn">
                    <br></br>
                    <h6>6.Perguruan Tinggi</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakptn">
                    Jarak(km):
                    <CFormInput type="text" id="jarakptn" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhptn">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhptn" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanptn">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanptn" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="pstrn">
                    <br></br>
                    <h6>7.Pesantren</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakpstrn">
                    Jarak(km):
                    <CFormInput type="text" id="jarakpstrn" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhpstrn">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhpstrn" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanpstrn">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanpstrn" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="seminari">
                    <br></br>
                    <h6>8.Seminari</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakseminari">
                    Jarak(km):
                    <CFormInput type="text" id="jarakseminari" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhseminari">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhseminari" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanseminari">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanseminari" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="ppai">
                    <br></br>
                    <h6>9.Pendidikan Keagamaan Lain</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakppai">
                    Jarak(km):
                    <CFormInput type="text" id="jarakppai" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhppai">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhppai" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanppai">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanppai" />
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
                    <CFormInput type="text" id="jarakrumahsakit" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhrumahsakit">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhrumahsakit" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanrumahsakit">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanrumahsakit" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="rsbersalin">
                    <br></br>
                    <h6>2.Rumah Sakit Bersalin</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakrsbersalin">
                    Jarak(km):
                    <CFormInput type="text" id="jarakrsbersalin" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhrsbersalin">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhrsbersalin" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanrsbersalin">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanrsbersalin" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="poliklinik">
                    <br></br>
                    <h6>3.Poliklinik</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakpoliklinik">
                    Jarak(km):
                    <CFormInput type="text" id="jarakpoliklinik" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhpoliklinik">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhpoliklinik" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanpoliklinik">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanpoliklinik" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="puskesmas">
                    <br></br>
                    <h6>4.Puskesmas</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakpuskesmas">
                    Jarak(km):
                    <CFormInput type="text" id="jarakpuskesmas" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhpuskesmas">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhpuskesmas" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanpuskesmas">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanpuskesmas" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="pustu">
                    <br></br>
                    <h6>5.Puskesmas Pembantu/Pustu</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakpustu">
                    Jarak(km):
                    <CFormInput type="text" id="jarakpustu" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhpustu">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhpustu" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanpustu">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanpustu" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="polindes">
                    <br></br>
                    <h6>6.Polindes</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakpolindes">
                    Jarak(km):
                    <CFormInput type="text" id="jarakpolindes" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhpolindes">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhpolindes" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanpolindes">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanpolindes" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="poskesdes">
                    <br></br>
                    <h6>7.Poskesdes</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakposkesdes">
                    Jarak(km):
                    <CFormInput type="text" id="jarakposkesdes" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhposkesdes">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhposkesdes" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanposkesdes">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanposkesdes" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="posyandu">
                    <br></br>
                    <h6>8.Posyandu</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakposyandu">
                    Jarak(km):
                    <CFormInput type="text" id="jarakposyandu" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhposyandu">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhposyandu" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanposyandu">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanposyandu" />
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="apotek">
                    <br></br>
                    <h6>9.Apotek</h6>
                  </CFormLabel>
                  <br></br>
                  <CFormLabel htmlFor="jarakapotek">
                    Jarak(km):
                    <CFormInput type="text" id="jarakapotek" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="waktutempuhapotek">
                    Waktu Tempuh (jam):
                    <CFormInput type="text" id="waktutempuhapotek" />
                  </CFormLabel>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <CFormLabel htmlFor="kemudahanapotek">
                    Mudah/Sulit?:
                    <CFormInput type="text" id="kemudahanapotek" />
                  </CFormLabel>
                </div>
                <br></br>
                <div className="mb-3">
                  <h6>Akses Sarana Prasarana:</h6>
                  <hr></hr>
                  <CFormLabel htmlFor="aksessarpras"></CFormLabel>
                  <CFormLabel htmlFor="lokasiputama">Lokasi Pekerjaan Utama &nbsp;</CFormLabel>
                  <select id="lokasiputama" name="lokasiputama">
                    <option value="mudah">Mudah</option>
                    <option value="sulit">Sulit</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="lahanpertanian">Lahan pertanian &nbsp;</CFormLabel>
                  <select id="lahanpertaniani" name="lahanpertanian">
                    <option value="mudah">Mudah</option>
                    <option value="sulit">Sulit</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="sekolahsarana">Sekolah &nbsp;</CFormLabel>
                  <select id="sekolahsarana" name="sekolahsarana">
                    <option value="mudah">Mudah</option>
                    <option value="sulit">Sulit</option>
                  </select>
                  <br></br>
                  <CFormLabel htmlFor="faskes">Fasilitas Kesehatan &nbsp;</CFormLabel>
                  <select id="faskes" name="faskes">
                    <option value="mudah">Mudah</option>
                    <option value="sulit">Sulit</option>
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
