import React from "react"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
const axios = require('axios').default;

const MAX_LENGTH = 50;

class NewsList extends React.Component {
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
              <Col key={post.id} sm={3}>
              {/* {console.log(console.log(post['postMeta']['source_link']))} */}
              {/* <img src={post['postMeta']['wprss_ftp_featured_image_source']} />
              <p key={post.id}><a href={post['postMeta']['source_link']}>{post.title.rendered}</a></p>
              <Button variant="success" >Success</Button> */}
              <Card style={{ marginBottom: 10 }}>
                <Card.Img variant="top" src={post['featured_image_src']} />
                <Card.Body>
                    <Card.Title style={{ height: 75 }}>{`${post.title.rendered.substring(0, MAX_LENGTH)}...`}</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                    <Button target="_blank" variant="success" href={encodeURI(post['postMeta']['source_link'])} >Read More</Button>
                </Card.Body>
                </Card>
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

export default NewsList