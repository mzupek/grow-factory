import React from "react"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
const axios = require('axios').default;

const MAX_LENGTH = 50;

class Featured extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        data: [],
    }
}

componentDidMount() {
    console.log('component did mount');
    axios.get('https://grow-factory.com/wp-json/wp/v2/posts?per_page=4').then(
    (response) => {
        this.setState({ data: response.data });
        console.log(response.data);
    }
    )
}

render() {
const { data } = this.state;
const posts = data;
console.log(posts);
if (posts !== undefined) {
    return (
        <Row>
            {posts.map(post => (
              <Col key={post.id}>
              <Row>
                <Col style={{height: 150, width: 150, margin: 20, backgroundImage: `url(${post['featured_image_src']})` }}>
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <strong style={{ color: '#ffffff' }}>{`${post.title.rendered.substring(0, 25)}...`}</strong>    
                </Col>     
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