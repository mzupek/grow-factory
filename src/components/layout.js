import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from 'react-bootstrap/Container';
import NavBar from  '../components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Container fluid style={{paddingRight: 0, paddingLeft: 0 }}>
    <NavBar />
    <main>{children}</main>
      <footer className="text-center">
        © {new Date().getFullYear()}, The Grow Factory
      </footer>
    </Container>
  )
}

export default Layout
