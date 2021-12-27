/* eslint-disable react/jsx-no-undef */
import React from 'react'
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

const FormControl = () => {
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
                  <h3>Data Individu</h3>
                  <br></br>
                  <CFormLabel htmlFor="nomorkkdataindividu">
                    <h6>Nomor Kartu Keluarga (16 Digit)</h6>
                  </CFormLabel>
                  <CFormInput type="text" id="nomorkkdataindividu" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="nomornikdataindividu">
                    <h6>NIK (16 Digit)</h6>
                  </CFormLabel>
                  <CFormInput type="text" id="nomornikdataindividu" />
                </div>
                {/* <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
                  <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                </div> */}
                <div className="mb-3">
                  <CFormLabel htmlFor="nama">
                    <h6>Nama</h6>
                  </CFormLabel>
                  <CFormInput type="text" id="nama" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="JenisKelamin">
                    <h6>Jenis Kelamin &nbsp;</h6>
                  </CFormLabel>
                  <select id="JenisKelamin" name="JenisKelamin">
                    <option value="Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="tempatlahir">
                    <h6>Tempat Lahir</h6>
                  </CFormLabel>
                  <CFormInput type="text" id="tempatlahir" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="statuspernikahan">
                    <h6>Status Pernikahan &nbsp;</h6>
                  </CFormLabel>
                  <select id="statusNikah" name="statuspernikahan">
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
                      id="islam"
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
                    />
                    <label className="form-check-label" htmlFor="agamaother">
                      Other :
                    </label>{' '}
                    <CFormInput type="text" id="agamaother" />
                  </div>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="suku">
                    <h6>Suku Bangsa</h6>
                  </CFormLabel>
                  <CFormInput type="text" id="suku" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="warganegara">
                    <h6>Warganegara &nbsp;</h6>
                  </CFormLabel>
                  <select id="warganegara" name="warganegara">
                    <option value="WNI">WNI</option>
                    <option value="WNA">WNA</option>
                  </select>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="nomorhp">
                    <h6>Nomor HP</h6>
                  </CFormLabel>
                  <CFormInput type="text" id="nomorhp" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="email">
                    <h6>Alamat Email</h6>
                  </CFormLabel>
                  <CFormInput type="email" id="email" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="facebook">
                    <h6>Alamat Facebook</h6>
                  </CFormLabel>
                  <CFormInput type="text" id="facebook" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="instagram">
                    <h6>Alamat Instagram</h6>
                  </CFormLabel>
                  <CFormInput type="text" id="instagram" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="pekerjaan">
                    <h6>Kondisi Pekerjaan &nbsp;</h6>
                  </CFormLabel>
                  <select id="pekerjaan" name="pekerjaan">
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
                    />
                    <label className="form-check-label" htmlFor="pekerjaanother">
                      Other :
                    </label>{' '}
                    <CFormInput type="text" id="pekerjaanother" />
                    <br></br>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="jamsostek">
                      <h6>Jaminan Sosial Ketenagakerjaan &nbsp;</h6>
                    </CFormLabel>
                    <select id="jamsostek" name="jamsostek">
                      <option value="peserta">Peserta</option>
                      <option value="bukan peserta">Bukan Peserta</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="jamsoskes">
                      <h6>Jaminan Sosial Kesehatan &nbsp;</h6>
                    </CFormLabel>
                    <select id="jamsoskes" name="jamsoskes">
                      <option value="peserta">Peserta</option>
                      <option value="bukan peserta">Bukan Peserta</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="penghasilansetahun">
                      <h6>Penghasilan Setahun Terakhir</h6>
                    </CFormLabel>
                    <CFormInput type="text" placeholder="Rp36.000.000" id="penghasilansetahun" />
                  </div>
                  <br></br>
                  <div className="mb-3">
                    <CFormLabel>
                      <h6>Penyakit yang diderita setahun terakhir:</h6>
                    </CFormLabel>
                    <br></br>
                    <CFormLabel htmlFor="muntaber">Muntaber &nbsp;</CFormLabel>
                    <select id="muntaber" name="muntaber">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="dbd">Demam Berdarah &nbsp;</CFormLabel>
                    <select id="dbd" name="dbd">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="campak">Campak &nbsp;</CFormLabel>
                    <select id="campak" name="campak">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="malaria">Malaria &nbsp;</CFormLabel>
                    <select id="malaria" name="malaria">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="fluburung">Flu Burung &nbsp;</CFormLabel>
                    <select id="fluburung" name="fluburung">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="covid">Covid-19 &nbsp;</CFormLabel>
                    <select id="covid" name="covid">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="hepatitisb">Hepatitis B &nbsp;</CFormLabel>
                    <select id="hepatitisb" name="hepatitisb">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="hepatitise">Hepatitis E &nbsp;</CFormLabel>
                    <select id="hepatitise" name="hepatitise">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="difteri">Difteri &nbsp;</CFormLabel>
                    <select id="difteri" name="difteri">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="chikungunya">Chikungunya &nbsp;</CFormLabel>
                    <select id="chikungunya" name="chikungunya">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="leptospirosis">Leptospirosis &nbsp;</CFormLabel>
                    <select id="leptospirosis" name="leptospirosis">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="kolerea">Kolerea &nbsp;</CFormLabel>
                    <select id="kolerea" name="kolerea">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="giziburuk">Gizi Buruk &nbsp;</CFormLabel>
                    <select id="giziburuk" name="giziburuk">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="jantung">Jantung &nbsp;</CFormLabel>
                    <select id="jantung" name="jantung">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="tbc">TBC &nbsp;</CFormLabel>
                    <select id="tbc" name="tbc">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="kanker">Kanker &nbsp;</CFormLabel>
                    <select id="kanker" name="kanker">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="diabetes">Diabetes &nbsp;</CFormLabel>
                    <select id="diabetes" name="diabetes">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="lumpuh">Lumpuh &nbsp;</CFormLabel>
                    <select id="lumpuh" name="lumpuh">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <label className="form-check-label" htmlFor="penyakitother">
                      Lainnya :
                    </label>{' '}
                    <CFormInput type="text" id="penyakitother" />
                  </div>
                  <br></br>
                  <div className="mb-3">
                    <CFormLabel>
                      <h6>Disabilitas:</h6>
                    </CFormLabel>
                    <br></br>
                    <CFormLabel htmlFor="tunanetra">Tunanetra &nbsp;</CFormLabel>
                    <select id="tunanetra" name="tunanetra">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="tunarungu">Tunarungu &nbsp;</CFormLabel>
                    <select id="tunarungu" name="tunarungu">
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
                    <CFormLabel htmlFor="runguwicara">Tunarungu-wicara &nbsp;</CFormLabel>
                    <select id="runguwicara" name="runguwicara">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="tunadaksa">Tunadaksa(anggotatubuh) &nbsp;</CFormLabel>
                    <select id="tunadaksa" name="tunadaksa">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="tunagrahita">
                      Tunagrahita(keterbelakangan mental) &nbsp;
                    </CFormLabel>
                    <select id="tunagrahita" name="tunagrahita">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="tunalaras">Tunalaras(sakit jiwa) &nbsp;</CFormLabel>
                    <select id="tunalaras" name="tunalaras">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="ekskusta">Cacat eks-kusta&nbsp;</CFormLabel>
                    <select id="ekskusta" name="ekskusta">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="cacatganda">Cacat ganda &nbsp;</CFormLabel>
                    <select id="cacatganda" name="cacatganda">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <CFormLabel>
                      <h6>Pendidikan tertinggi yang ditamatkan:</h6>
                    </CFormLabel>
                    <br></br>
                    <CFormLabel htmlFor="tidaksekolah">Tidak Sekolah &nbsp;</CFormLabel>
                    <select id="tidaksekolah" name="tidaksekolah">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="sd">SD/Sederajat &nbsp;</CFormLabel>
                    <select id="sd" name="sd">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="smp">SMP/Sederajat &nbsp;</CFormLabel>
                    <select id="smp" name="smp">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="sma">SMA/Sederajat &nbsp;</CFormLabel>
                    <select id="sma" name="sma">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="diploma">Diploma 1-3 &nbsp;</CFormLabel>
                    <select id="diploma" name="diploma">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="strata1">S1/Sederajat &nbsp;</CFormLabel>
                    <select id="strata1" name="strata1">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="strata2">S2/Sederajat &nbsp;</CFormLabel>
                    <select id="strata2" name="strata2">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CFormLabel htmlFor="strata3">S3/Sederajat &nbsp;</CFormLabel>
                    <select id="strata3" name="strata3">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <CFormLabel htmlFor="pesantren">Pesantren &nbsp;</CFormLabel>
                    <select id="pesantren" name="pesantren">
                      <option value="ya">Ya</option>
                      <option value="tidak">Tidak</option>
                    </select>
                    <br></br>
                    <label className="form-check-label" htmlFor="penyakitother">
                      Lainnya :
                    </label>{' '}
                    <CFormInput type="text" id="penyakitother" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="bahasa">
                      <h6>Bahasa yang digunakan di rumah</h6>
                    </CFormLabel>
                    <CFormInput type="text" id="bahasa" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="bahasaformal">
                      <h6>Bahasa yang digunakan di lembaga formal</h6>
                    </CFormLabel>
                    <CFormInput type="text" id="bahasaformal" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="kerjabakti">
                      <h6>Kerja bakti setahun terakhir(jumlah)</h6>
                    </CFormLabel>
                    <CFormInput type="text" id="kerjabakti" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="siskamling">
                      <h6>Siskamling setahun terakhir(jumlah)</h6>
                    </CFormLabel>
                    <CFormInput type="text" id="siskamling" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="pestarakyat">
                      <h6>Pesta rakyat setahun terakhir(jumlah)</h6>
                    </CFormLabel>
                    <CFormInput type="text" id="pestarakyat" />
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
      {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Set heights using <code>size</code> property like <code>size=&#34;lg&#34;</code> and{' '}
              <code>size=&#34;sm&#34;</code>.
            </p>
            <DocsExample href="forms/form-control#sizing">
              <CFormInput
                type="text"
                size="lg"
                placeholder="Large input"
                aria-label="lg input example"
              />
              <br />
              <CFormInput
                type="text"
                placeholder="Default input"
                aria-label="default input example"
              />
              <br />
              <CFormInput
                type="text"
                size="sm"
                placeholder="Small input"
                aria-label="sm input example"
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add the <code>disabled</code> boolean attribute on an input to give it a grayed out
              appearance and remove pointer events.
            </p>
            <DocsExample href="forms/form-control#disabled">
              <CFormInput
                type="text"
                placeholder="Disabled input"
                aria-label="Disabled input example"
                disabled
              />
              <br />
              <CFormInput
                type="text"
                placeholder="Disabled readonly input"
                aria-label="Disabled input example"
                disabled
                readOnly
              />
              <br />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Readonly</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add the <code>readOnly</code> boolean attribute on an input to prevent modification of
              the input&#39;s value. Read-only inputs appear lighter (just like disabled inputs),
              but retain the standard cursor.
            </p>
            <DocsExample href="forms/form-control#readonly">
              <CFormInput
                type="text"
                placeholder="Readonly input here..."
                aria-label="readonly input example"
                readOnly
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Readonly plain text</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              If you want to have <code>&lt;input readonly&gt;</code> elements in your form styled
              as plain text, use the <code>plainText</code> boolean property to remove the default
              form field styling and preserve the correct margin and padding.
            </p>
            <DocsExample href="components/accordion">
              <CRow className="mb-3">
                <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
                  Email
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput
                    type="text"
                    id="staticEmail"
                    defaultValue="email@example.com"
                    readOnly
                    plainText
                  />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                  Password
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="password" id="inputPassword" />
                </div>
              </CRow>
            </DocsExample>
            <DocsExample href="components/accordion">
              <CForm className="row g-3">
                <div className="col-auto">
                  <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
                    Email
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="staticEmail2"
                    defaultValue="email@example.com"
                    readOnly
                    plainText
                  />
                </div>
                <div className="col-auto">
                  <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
                    Password
                  </CFormLabel>
                  <CFormInput type="password" id="inputPassword2" placeholder="Password" />
                </div>
                <div className="col-auto">
                  <CButton type="submit" className="mb-3">
                    Confirm identity
                  </CButton>
                </div>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>File input</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control#file-input">
              <div className="mb-3">
                <CFormLabel htmlFor="formFile">Default file input example</CFormLabel>
                <CFormInput type="file" id="formFile" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFileMultiple">Multiple files input example</CFormLabel>
                <CFormInput type="file" id="formFileMultiple" multiple />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFileDisabled">Disabled file input example</CFormLabel>
                <CFormInput type="file" id="formFileDisabled" disabled />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFileSm">Small file input example</CFormLabel>
                <CFormInput type="file" size="sm" id="formFileSm" />
              </div>
              <div>
                <CFormLabel htmlFor="formFileLg">Large file input example</CFormLabel>
                <CFormInput type="file" size="lg" id="formFileLg" />
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Color</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control#color">
              <CFormLabel htmlFor="exampleColorInput">Color picker</CFormLabel>
              <CFormInput
                type="color"
                id="exampleColorInput"
                defaultValue="#563d7c"
                title="Choose your color"
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
    </CRow>
  )
}

export default FormControl
