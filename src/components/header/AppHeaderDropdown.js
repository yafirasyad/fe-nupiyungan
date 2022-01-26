import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilAccountLogout,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/profile.png'
import { Link } from 'react-router-dom'
import { useUser } from 'src/context/UserContext'

const AppHeaderDropdown = () => {
  const {state: userState} = useUser();

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <img src={userState.user.avatar ? `${process.env.REACT_APP_DEV_API_URL}/public/user/${userState.user.avatar}` : avatar8} height={40} width={40} style={{
          borderRadius: "50%",
        }} />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Profile</CDropdownHeader>
        <Link to="/profile">
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Profile saya
        </CDropdownItem>
        </Link>
        <CDropdownDivider />
        <Link 
          to='/logout'
        >
          <CDropdownItem href="#">
            <CIcon icon={cilAccountLogout} className="me-2" />
            Logout
          </CDropdownItem>
        </Link>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
