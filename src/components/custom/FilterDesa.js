import React, { useState } from 'react'
import { useEffect } from 'react'
import { GetDesa } from 'src/api/Functions'


const FilterDesa = ({filterDesa, setFilterDesa, filterDusun, setFilterDusun}) => {
    const [desa, setDesa] = useState([])
    const [dusunOption, setDusunOption] = useState([])
    useEffect(() => {
        GetDesa()
            .then(res => {
                const desaData = res.data.data
                setDesa(desaData)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    
    return (
        <div className='mt-3'>
           <select
             id="filterdesa"
             name="filterdesa"
             value={filterDesa}
             onChange={(e) =>{
               setFilterDesa(e.target.value)
               if(e.target.value == '') setFilterDusun('')
               setDusunOption(desa.find(x => x.nama_desa == e.target.value)?.dusun)
             }}
           >
             <option value="">Semua Desa</option>
             {desa.map((item, index) => (
               <option key={index} value={item.nama_desa}>{item.nama_desa}</option>
             ))}
           </select>
           <select
             id="filterdusun"
             name="filterdusun"
             value={filterDusun}
             onChange={(e) =>{
               setFilterDusun(e.target.value)
             }}
           >
             <option value="">Semua Dusun</option>
             {dusunOption && dusunOption.map((item, index) => (
               <option key={index} value={item.nama_dusun}>{item.nama_dusun}</option>
             ))}
           </select>
        </div> 
     )
}

export default FilterDesa