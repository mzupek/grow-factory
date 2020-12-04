import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import timeSince from '../utilities/timeSince'
const axios = require('axios').default;


class Featured extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        data: [],
    }
}

componentDidMount() {
    console.log('component did mount');
    axios.get('https://grow-factory.com/wp-json/wp/v2/posts?per_page=4&_embed=1').then(
    (response) => {
        this.setState({ data: response.data });
        console.log(response.data);
    }
    )
}

render() {
const { data } = this.state;
const posts = data;
if (posts !== undefined) {
    return (
        <Row>
            {posts.map(post => (
              <Col className="text-center" style={{marginTop: 40, marginBottom: 40 }} key={post.id}>
              <Row style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <img
                    className="d-block"
                    src={post['featured_image_src']}
                    alt="featured img"
                    />    
              </Row>
              <Row className="d-block w" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
              <p><strong style={{ backgroundColor: 'blue', padding: 3.5, color: '#ffffff', fontSize: 12 }}>{post['_embedded']['wp:term'][0][0].name}</strong> </p>  
              <p><strong style={{ padding: 3.5, color: '#ffffff', fontSize: 12 }}>{`${post.title.rendered.substring(0, 50)}...`}</strong> </p> 
              <p style={{ color: 'white', fontSize: 12, fontStyle: 'italic', opacity: 0.6 }}>{timeSince(new Date(post.date))}</p> 
              </Row> 
              </Col>
             
            ))}
        </Row>
      )
} 
return (
    <div>
        <p>Something went wrong...smoke a bowl while we figure it out</p>
    </div>
)   
}

}

export default Featured