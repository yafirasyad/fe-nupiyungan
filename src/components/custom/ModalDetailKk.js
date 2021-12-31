import React from 'react'
import { CButton, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'

const ModalDetailKk = ({item, visible, setVisible}) => {
    console.log('====ITEM====')
    console.log(item)
    const renderFasilitasKesehatan = (item) => {
        return (
            <CRow>
                    <CCol className='mb-3'>
                        <h6>{item.fasilitas}</h6>
                    </CCol>
                    <CRow>
                        <CCol className="ms-3">
                            <h6>Jarak: </h6>
                        </CCol>
                        <CCol>
                            <p>{item.jarak} Kilometer</p>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol className="ms-3">
                            <h6>Waktu: </h6>
                        </CCol>
                        <CCol>
                            <p>{item.waktu} jam</p>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol className="ms-3">
                            <h6>Kemudahan: </h6>
                        </CCol>
                        <CCol>
                            <p>{item.kemudahan}</p>
                        </CCol>
                    </CRow>
                </CRow>
        )
    }
    return (
        <CModal
            visible={visible}
            onClose={() => {
                setVisible(false)
            }}
            size="lg"
        >
            <CModalHeader>
                <CModalTitle>Detail</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CRow>
                    <CCol>
                        <h6>No KK: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.no_kk}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Nama kepala: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.nama_kepala}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Tempat tinggal: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.tempat_tinggal}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Luas lahan: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.luas_lahan}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Luas rumah: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.luas_rumah}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Jenis lantai: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.jenis_lantai}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Dinding: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.dinding}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Atap: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.atap}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Jendela: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.jendela}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Mck: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.mck}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Penerangan: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.penerangan}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Energi Masak: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.energi_masak}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Pembuangan: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.pembuangan}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Sumber air mandi: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.sumber_air_mandi}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Sumber air minum: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.sumber_air_minum}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Rumah dibawah sutet: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.rumah_dibawah_sutet ? 'Ya' : 'Tidak'}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Rumah bantaran sungai: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.rumah_bantaran_sungai ? 'Ya' : 'Tidak'}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Kondisi rumah: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.kondisi_rumah}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Bantuan langsung tunai desa: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.blt_desa ? 'Ya' : 'Tidak'}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Program keluarga harapan: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.pkh ? 'Ya' : 'Tidak'}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Bantuan sosial tunai: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.bantuan_sosial_tunai ? 'Ya' : 'Tidak'}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Bantuan presiden: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.bantuan_presiden ? 'Ya' : 'Tidak'}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Bantuan UMKM: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.bantuan_umkm ? 'Ya' : 'Tidak'}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Bantuan pekerja: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.bantuan_pekerja ? 'Ya' : 'Tidak'}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Akses kerja: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.akses_kerja}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Akses lahan: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.akses_lahan}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Akses sekolah: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.akses_sekolah}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Akses kesehatan: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.akses_kesehatan}</p>
                    </CCol>
                </CRow>
                <CRow className='my-3'>
                    <h5>Akses Fasilitas Kesehatan</h5>
                </CRow>
                {item.akses_fasilitas_kesehatan && item.akses_fasilitas_kesehatan.map((item, index) => renderFasilitasKesehatan(item))}
                <CRow className='my-3'>
                    <h5>Akses Fasilitas Pendidikan</h5>
                </CRow>
                {item.akses_fasilitas_pendidikan && item.akses_fasilitas_pendidikan.map((item, index) => renderFasilitasKesehatan(item))}
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
                <CButton color="primary">Edit</CButton>
            </CModalFooter>
        </CModal>
    )
}

export default ModalDetailKk