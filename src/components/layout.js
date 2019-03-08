import React from "react"
import PropTypes from "prop-types"

import Navbar from "..//components/globals/navbar"

import "./bootstrap.min.css"
// import "./layout.css"
// import "../sass/layout.scss"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
