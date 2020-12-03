import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsList from "../components/newsList"
import Featured from '../components/featured'
import MainJumbotron from '../components/mainJumbotron'
import { Container } from 'react-bootstrap'

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
       <MainJumbotron/>
      <SEO title="Grow Factory" />
      <Container fluid style={{ backgroundColor: '#000000'}}>
        <Container>
          <Featured />
        </Container>
      </Container>
      <Container className="text-center">
          <h1 style={{ lineHeight: 2.5 }}>Join fellow home & craft growers in The Garden.</h1>
          <h5 style={{ lineHeight: 2.5 }}>
The Garden allows viewers to easily interact with everything you choose to promote online.
Saves time, promotes trust and is the most efficient way to view all social and other online media quickly, easily and in a highly targeted way.
Perfect way to grow and promote yourself and your cannabis brand.
Make it simple for your cannabis customers, fans and friends to see everything you share, verified — all in one spot.
          </h5>
        <h5 style={{ lineHeight: 2.5 }}>
          PLANT A SEED.
          </h5>
      </Container>
      <Container style={{ backgroundColor: '#000000', paddingTop: 20, paddingBottom: 20 }} fluid className="text-center">
          <Container>
          <h1 style={{ lineHeight: 2.5, color: '#ffffff' }}>Cultivation News, Goods, Tips & Tricks</h1>
          <h5 style={{ lineHeight: 2.5, color: '#ffffff'}}>
          All the most current and up-to-date news for the home grower + the traditional tried and true ways from the legacy books.
          Get all the latest home grow essentials and must haves right here in one spot. Fire only.
          </h5>
        <h5 style={{ lineHeight: 2.5, color: '#ffffff' }}>
        All of your favorite cannabis publications
          </h5>
      </Container>
          </Container>
      <Container style={{ backgroundColor: '#000000' }} fluid >
        <Container className="text-center">
        <h1 style={{ color: '#ffffff', padding: 20 }}>Trending Now</h1>
        <NewsList />
        </Container>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
