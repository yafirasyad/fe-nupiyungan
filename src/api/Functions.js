import { httpClient } from "src/util/Api"


export const DeleteDataIndividu = async (id) => {
    return await httpClient.delete(`/persons/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const DeleteDataKk = async (id) => {
    return await httpClient.delete(`/families/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const GetDesa = async () => {
    return await httpClient.get(`/desa`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const UpdateDataKk = async (id, data) => {
    return await httpClient.put(`/families/${id}`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }   
    })
}

export const GetUsers = async () => {
    return await httpClient.get(`/users`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const SaveUser = async (data) => {
    return await httpClient.post(`/users`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const UpdateUser = async (id, data) => {
    return await httpClient.put(`/users/${id}`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const DeleteUser = async (id) => {
    return await httpClient.delete(`/users/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const GetRoles = async () => {
    return await httpClient.get(`/roles`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const GetAccess = async () => {
    return await httpClient.get(`/access`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })

}

export const AddRole = async (data) => {
    return await httpClient.post(`/roles`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const DeleteRole = async (id) => {
    return await httpClient.delete(`/roles/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const GetStats = async () => {
    return await httpClient.get(`/stats`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}