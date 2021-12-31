import { CButton, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import React from 'react'

const ModalDetailIndividu = ({item, visible, setVisible}) => {
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
                <CRow style={{
                    marginBottom: '50px'
                }}>
                    <CCol>
                        <h6>Nik: </h6>
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
                        <h6>Nama: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.nama}</p>
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
                        <h6>Tempat lahir: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.tempat_lahir}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Tanggal lahir: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.tanggal_lahir}</p>
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
                        <p>{item.jaminan_sosial_ketenagakerjaan}</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <h6>Jaminan sosial kesehatan: </h6>
                    </CCol>
                    <CCol>
                        <p>{item.jaminan_sosial_kesehatan}</p>
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
                        <p>{item.siskamlin}</p>
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
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
                <CButton color="primary">Save changes</CButton>
            </CModalFooter>
        </CModal>
    )
}

export default ModalDetailIndividu