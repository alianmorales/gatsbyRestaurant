import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/logo.svg"
import { IoIosMenu } from "react-icons/io"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class Navbarheader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img className="logo" src={logo} alt="Identifid" />
        </Link>
        <IoIosMenu
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.5rem;
  background: #140c62;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    height: 50px;
  }
  .toggle-icon {
    font-size: 33px;
    margin-right: 10px;
    cursor: pointer;
    color: ${styles.colors.primaryC};
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
