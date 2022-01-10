import { CFormLabel } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { GetDesa } from 'src/api/Functions'
import { useData } from 'src/context/DataContext'

const InputDesa = ({selectedDesa, setSelectedDesa, selectedDusun, setSelectedDusun}) => {
    const [desa, setDesa] = useState([])
    const [dusunOption, setDusunOption] = useState()
    const { state: dataState, setEditMode } = useData();
    
    useEffect(() => {
        GetDesa()
            .then(res => {
                const desaData = res.data.data
                const dusunData = desaData.find(desa => desa.id == selectedDesa).dusun
                setDesa(desaData)
                setDusunOption(dusunData)
                if (dataState.isEditMode) {
                    setSelectedDesa(dataState.selectedData.desa.id)
                    setSelectedDusun(dataState.selectedData.dusun.id)      
                    setDusunOption(desaData.find(desa => desa.id == dataState.selectedData.desa.id).dusun)
                }
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className='mb-3'>
                <CFormLabel>
                    <h6>Desa</h6>
                </CFormLabel>
                <select
                    id="desa"
                    name="desa"
                    value={selectedDesa}
                    onChange={(e) => {
                        setSelectedDesa(e.target.value)
                        setDusunOption(desa.find(x => x.id == e.target.value).dusun)
                        setSelectedDusun(desa.find(x => x.id == e.target.value).dusun[0].id)
                    }}
                >
                    {desa.map((item, index) => {
                        return (
                            <option key={index} value={item.id}>{item.nama_desa}</option>
                        )
                    })}
                </select>
            </div>
            <div className='mb-3'>
                <CFormLabel>
                    <h6>dusun</h6>
                </CFormLabel>
                <select
                    id="dusun"
                    name="dusun"
                    value={selectedDusun}
                    onChange={(e) => {
                        setSelectedDusun(e.target.value)
                    }}
                >
                    {dusunOption && dusunOption.map((item, index) => {
                        return (
                            <option key={index} value={item.id}>{item.nama_dusun}</option>
                        )
                    })}
                    {/* {desa.length > 0 && selectedDesa && desa.find(o => o.id === selectedDesa).dusun && desa.find(o => o.id === selectedDesa).dusun.map((item, index) => {
                        return (
                            <option key={index} value={item.id}>{item.nama_dusun}</option>
                        )
                    })} */}
                </select>
            </div>
        </>
        
    )
}

export default InputDesa