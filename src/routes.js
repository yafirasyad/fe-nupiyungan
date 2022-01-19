import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const DataIndividu = React.lazy(() => import('./views/pendataan/data-individu/DataIndividu'))
const DataKK = React.lazy(() => import('./views/pendataan/data-kk/DataKK'))


//Forms
const FormIndividu = React.lazy(() => import('./views/forms/individu/FormIndividu'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const FormEditKk = React.lazy(() => import('./views/forms/select/FormEditKk'))
const UserManagement = React.lazy(() => import('./views/pages/user/UserManagement'))
const RoleManagement = React.lazy(() => import('./views/pages/user/RoleManagement'))
const Profile = React.lazy(() => import('./views/pages/profile/Profile'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/individu', name: 'DataIndividu', component: DataIndividu, exact: true },
  { path: '/kk', name: 'DataKK', component: DataKK, exact: true },
  { path: '/forms', name: 'Forms', component: FormIndividu, exact: true },
  { path: '/individu/edit', name: 'Individu Edit', component: FormIndividu, exact: true },
  { path: '/individu/input', name: 'Individu Input', component: FormIndividu, exact: true },
  { path: '/kk/input', name: 'KK input', component: Select, exact: true },
  { path: '/kk/edit', name: 'KK edit', component: FormEditKk, exact: true },
  { path: '/users', name: 'User Management', component: UserManagement, exact: true },
  { path: '/roles', name: 'Role Management', component: RoleManagement, exact: true },
  { path: '/profile', name: 'Profile', component: Profile, exact: true },
]

export default routes
