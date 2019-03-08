import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components"
import Layout from "../components/layout"
// import SEO from "../components/seo"

import { FaBeer } from "react-icons/fa"

const IndexPage = () => (
  <Layout SEO title="Home" keywords={[`gatsby`, `application`, `react`]}>
    <h3>
      Welcome to IDENTIFID f <FaBeer />
    </h3>
  </Layout>
)

// const ButtonWrapper = styled.button`
//   background: pink;
//   color: blue;
//   font-size: 14px;
//   padding: 10px;
//   border-radius: 3px;
//   border: none;
// `

// const ButtonLeft = styled.button`
//   background: green;
//   color: orange;
//   font-size: 14px;
//   padding: 10px;
//   border-radius: 3px;
//   border: none;
// `
export default IndexPage
