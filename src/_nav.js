import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilAccountLogout,
  cilSettings,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Input Data',
  },
  {
    component: CNavItem,
    name: 'Data Individu',
    to: '/individu/input',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Data KK',
    to: '/kk/input',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Lihat Data',
  },
  {
    component: CNavItem,
    name: 'Data Individu',
    to: '/individu',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Data KK',
    to: '/kk',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'User Management',
  },
  {
    component: CNavItem,
    name: 'Data User',
    to: '/users',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Data Role',
    to: '/roles',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Lain-Lain',
  },
  {
    component: CNavItem,
    name: 'Setting',
    to: '/register',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/logout',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  },
]

export default _nav
