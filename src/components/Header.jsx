import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from "./Navbar"
import styled from 'styled-components'

const Header = () => {
  return (
    
      <MainHeader>
          <NavLink to='/'>
              <img src="./images/newacctav.gif" alt="logo" className='logo'/>
          </NavLink>
          {/* <button>Search</button> */}
          <Navbar />
      </MainHeader>

  )
}

const MainHeader = styled.header`
  padding : 0 4.8rem;
  height : 6rem;
  background-color : ${({ theme }) => theme.colors.bg};
  display : flex;
  justify-content : space-between;
  align-items : center;
  /* position: fixed; */

  .logo {
    height : auto;
    max-width : 40%;
  }
`;

export default Header
