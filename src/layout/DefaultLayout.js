import React from 'react'
import { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useData } from 'src/context/DataContext'
import { useUser } from 'src/context/UserContext'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  const { state: userState } = useUser() 
  
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <h1>{}</h1>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
