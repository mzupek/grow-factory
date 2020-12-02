import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Container from 'react-bootstrap/Container';
import NavBar from  '../components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../../content/assets/grow_factory_logo-2.png'

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <Container data-is-root-path={isHomePage}>
    <NavBar />

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, The Grow Factory
      </footer>
    </Container>
  )
}

export default Layout
