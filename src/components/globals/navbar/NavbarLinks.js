import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "home",
      },
      {
        id: 1,
        path: "/industries/",
        name: "industries",
      },
      {
        id: 2,
        path: "/our-solution/",
        name: "our solution",
      },
      {
        id: 3,
        path: "/intellectual-property/",
        name: "intellectual-property",
      },
      {
        id: 4,
        path: "/contact-us",
        name: "contact us",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  background: ${styles.colors.secondaryC};
  outline: 1px solid pink;
  padding: 0;
  overflow: hidden;
  height: ${props => (props.open ? "153px" : "0px")};
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    color: white;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      color: ${styles.colors.primaryC};
      padding-left: 1.2rem;
    }
  }
`
