import React, { useEffect, useState } from 'react'
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
import { DeleteRole, DeleteUser, GetRoles, GetUsers } from 'src/api/Functions'
import { Role } from 'src/util/Type'
import ModalAddEditUser from 'src/components/custom/ModalAddEditUser'
import ModalDelete from 'src/components/custom/ModalDelete'
import { useData } from 'src/context/DataContext'
import Spinner from 'src/components/custom/Spinner'
import ModalAddEditRole from 'src/components/custom/ModalAddEditRole'

const RoleManagement = () => {
    const [query, setQuery] = useState('')
    const [addEditMode, setAddEditMode] = useState(false)
    const [mode, setMode] = useState('add')
    const [selectedData, setSelectedData] = useState({})
    const [deleteMode, setDeleteMode] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [unauthorized, setUnauthorized] = useState(false)
    const { state: dataState, setRoles, selectRole, setEditUserMode, removeRole } = useData();
    
    useEffect(() => {
        GetRoles()
          .then(res => {
            setRoles(res.data.data)
            setIsLoading(false)
          }).catch(err => {
            if (err.response.status === 401) {
              setUnauthorized(true)
            }
            setIsLoading(false)
          })
    }, [])

    const renderTable = (item, index) => {
        return (
            <>
        <CTableRow>
          <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
          <CTableDataCell>{item.name}</CTableDataCell>
          <CTableDataCell>
            <div>
                <CButton 
                  color="primary"
                  style={{
                    marginRight: '2px', 
                    marginLeft: '2px', 
                  }}
                  onClick={() => {
                    selectRole(item)
                    setMode('edit')
                    setAddEditMode(true)
                    setEditUserMode(true)
                  }}
                >
                    edit
                </CButton>
              <CButton 
                color="danger"
                style={{
                  marginRight: '2px', 
                  marginLeft: '2px', 
                }}
                onClick={() => {
                  setDeleteMode(true)
                  setSelectedData(item)
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

    const deleteFunc = () => {
      DeleteRole(selectedData.id)
        .then(res => {
          console.log(res.data)
          setDeleteMode(false)
          removeRole(selectedData.id)
        }).catch(err => {
          console.log(err.response)
        })
    }

    return (
        <>
        {/* <ModalAddEditUser visible={addEditMode} setVisible={setAddEditMode} /> */}
        <ModalDelete visible={deleteMode} item={selectedData.id} setVisible={setDeleteMode} deleteFunc={deleteFunc} />
        <ModalAddEditRole visible={addEditMode} setVisible={setAddEditMode} mode={mode} />
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
                            <div className="fs-5 fw-semibold">{dataState.users.length}</div>
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
        <h2>Role</h2>
        <CRow>
        <CButton 
            color="primary"
            style={{
                width: '100px',
                marginBottom: '10px',
            }}
            onClick={() => {
              setAddEditMode(true)
              setMode('add')
            }}
        >
            Add Role
        </CButton>
        </CRow>
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
              <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {dataState.roles.map((item, index) => renderTable(item, index))}
          </CTableBody>
        </CTable>
        <div className='d-flex justify-content-center'>  
          {/* <Pagination itemsPerPage={itemsPerPage} totalItems={dataState.individu.length} changePage={changePage} currentPage={page}/> */}
        </div>
      </CRow>
      {unauthorized ? (
        <p className='text-center'>Anda tidak memiliki akses</p>
      ) : dataState.roles.length === 0 && !isLoading  ? (
        <p className='text-center'>Tidak ada data</p>
      ) : ''}
      <Spinner visible={isLoading} />
      </>
    )
}

export default RoleManagement