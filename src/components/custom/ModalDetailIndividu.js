import { CButton, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import moment from 'moment'
import React from 'react'

const ModalDetailIndividu = ({item, visible, setVisible}) => {
    const renderPenyakit = (item) => {
        return (
            <CRow>
                <CCol className='mb-3'>
                    <h5>Penyakit</h5>
                </CCol>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Campak: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.campak ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Chikungunya </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.chikungunya ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Covid: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.covid ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Demam berdarah: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.demam_berdarah ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Diabetes: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.diabetes ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Difteri: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.difteri ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Flu burung: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.flu_burung ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Gizi buruk: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.gizi_buruk ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Hepatitis B: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.hepatitis_b ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Hepatitis E: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.hepatitis_e? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Jantung: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.jantung ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Kanker: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.kanker ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Kolerea: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.kolerea ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Leptospirosis: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.leptospirosis ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Lumpuh: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.lumpuh ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Malaria: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.malaria ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Muntaber: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.muntaber ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>TBC: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.tbc ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Lainnya: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.lainnya}</p>
                        </CCol>
                </CRow>
            </CRow>
        )
    }

    const renderDisabilitas = (item) => {
        return (
            <CRow className='mt-3'>
                <CCol className='mb-3'>
                    <h5>Disabilitas</h5>
                </CCol>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Tunadaksa: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.tunadaksa ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Tunagrahita: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.tunagrahita ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Tunalaras: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.tunalaras ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Tunanetra: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.tunanetra ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Tunarungu: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.tunarungu ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Tunawicara: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.tunawicara ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Tunarungu-wicara: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.tunarungu_wicara ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Cacat eks kusta: </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.cacat_eks_kusta ? 'Ya' : 'Tidak'}</p>
                        </CCol>
                </CRow>
                <CRow>
                        <CCol className="ms-3">
                            <h6>Cacat ganda </h6>
                        </CCol>
                        <CCol>
                            <p>{item?.cacat_ganda ? 'Ya' : 'Tidak'}</p>
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
                        <h6>Foto: </h6>
                    </CCol>
                    <CCol>
                        <img src={item.foto ? `${process.env.REACT_APP_DEV_API_URL}/public/person/${item.foto}` : ''} height={200} width={200}/>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>NIK: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.nik}</p>
                    </CCol>
                </CRow>
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
                        <h6>No kartu NU: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.kartu_nu}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Pengurus NU: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.pengurus_nu}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Banom: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.banom}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Kaderisasi: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.kaderisasi}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Nama: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.nama}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Thariqah Mutabarah: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.thariqah_mut}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Jenis kelamin: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.jenis_kelamin}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Golongan darah: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.golongan_darah}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Tempat lahir: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.tempat_lahir}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Desa: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.desa && item.desa.nama_desa}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Dusun: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.desa && item.dusun.nama_dusun}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Tanggal lahir: </h6>
                    </CCol>
                    <CCol>
                        <p>{moment(item.tanggal_lahir).format('DD-MM-YYYY')}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Status: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.status}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Ibu Kandung: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.ibu_kandung}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Agama: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.agama}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Suku: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.suku}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Warga negara: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.warga_negara}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>No hp: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.no_hp}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Email: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.email}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Facebook: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.facebook}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Instagram: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.instagram}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Kondisi pekerjaan: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.kondisi_pekerjaan}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Pekerjaan utama: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.pekerjaan_utama}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Jaminan sosial ketenagakerjaan: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.jaminan_sosial_ketenagakerjaan ? 'Ya' : 'Tidak'}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Jaminan sosial kesehatan: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.jaminan_sosial_kesehatan ? 'Ya' : 'Tidak'}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Penghasilan setahun: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.penghasilan_setahun}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Pendidikan: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.pendidikan}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Bahasa rumah: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.bahasa_rumah}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Bahasa formal: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.bahasa_formal}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Kerja bakti: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.kerja_bakti}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Siskamling: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.siskamling}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Pesta rakyat: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.pesta_rakyat}</p>
                    </CCol>
                </CRow>
                {renderPenyakit(item.penyakit)}
                {renderDisabilitas(item.disabilitas)}
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
            </CModalFooter>
        </CModal>
    )
}

export default ModalDetailIndividu