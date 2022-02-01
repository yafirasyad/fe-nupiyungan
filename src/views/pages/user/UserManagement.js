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
import { DeleteUser, GetUsers } from 'src/api/Functions'
import { Role } from 'src/util/Type'
import ModalAddEditUser from 'src/components/custom/ModalAddEditUser'
import ModalDelete from 'src/components/custom/ModalDelete'
import { useData } from 'src/context/DataContext'
import Spinner from 'src/components/custom/Spinner'
import { isTokenExpired } from 'src/util/Api'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { useUser } from 'src/context/UserContext'

const UserManagement = () => {
    const [query, setQuery] = useState('')
    const [addEditMode, setAddEditMode] = useState(false)
    const [selectedData, setSelectedData] = useState({})
    const [deleteMode, setDeleteMode] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [unauthorized, setUnauthorized] = useState(false)
    const { logoutUser } = useUser();
    const { state: dataState, setUsers, removeUser, selectUser, setEditUserMode } = useData();

    useEffect(() => {
        GetUsers()
            .then(res => {
                setUsers(res.data.data)
                setIsLoading(false)
            }).catch(err => {
                isTokenExpired(err.response.data.errors, logoutUser)
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
          <CTableDataCell>{item.email}</CTableDataCell>
          <CTableDataCell>{item.role.name}</CTableDataCell>
          <CTableDataCell>
            <div>
                <CButton 
                  color="primary"
                  style={{
                    marginRight: '2px', 
                    marginLeft: '2px', 
                  }}
                  onClick={() => {
                    selectUser(item)
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

    const filterFunc = (value) => {
        return value.name.toLowerCase().includes(query.toLowerCase()) || value.email.toLowerCase().includes(query.toLowerCase()) || Role[value.role].toLowerCase().includes(query.toLowerCase())
    }

    const deleteFunc = () => {
      DeleteUser(selectedData.id)
        .then(res => {
          console.log(res.data)
          removeUser(selectedData.id)
          setDeleteMode(false)
        }).catch(err => {
          console.log(err.response)
          setDeleteMode(false)
        })
    }

    return (
        <>
        <ModalAddEditUser visible={addEditMode} setVisible={setAddEditMode} />
        <ModalDelete visible={deleteMode} item={selectedData.id} setVisible={setDeleteMode} deleteFunc={deleteFunc} />
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
        <h2>Data User</h2>
        <CRow>
        <CButton 
            color="primary"
            style={{
                width: '100px',
                marginBottom: '10px',
            }}
            onClick={() => setAddEditMode(true)}
        >
            Add User
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
              <CTableHeaderCell scope="col">Email/Username</CTableHeaderCell>
              <CTableHeaderCell scope="col">Role</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {dataState.users.filter(filterFunc).map((item, index) => renderTable(item, index))}
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

export default UserManagement