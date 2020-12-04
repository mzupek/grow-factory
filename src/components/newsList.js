import React from "react"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import timeSince from './../utilities/timeSince';
const axios = require('axios').default;


class NewsList extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        data: [],
    }
}

componentDidMount() {
    console.log('component did mount');
    axios.get('https://grow-factory.com/wp-json/wp/v2/posts?per_page=4&page=2&_embed=1').then(
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
              <Card style={{ marginBottom: 10 }}>
                <Card.Img variant="top" src={post['featured_image_src']} />
                <Card.Body>
                    <Card.Title style={{ fontSize: 16 }}>{`${post.title.rendered.substring(0, 50)}...`}</Card.Title>
                    <Card.Text>
                    <p><strong style={{ backgroundColor: 'blue', padding: 3.5, color: '#ffffff', fontSize: 12 }}>{post['_embedded']['wp:term'][0][0].name}</strong> </p>  
                    <p style={{ color: 'black', fontSize: 12, fontStyle: 'italic', opacity: 0.6 }}>{timeSince(new Date(post.date))}</p> 
                    </Card.Text>
                    <footer>
                    <Button target="_blank" variant="success" href={encodeURI(post['postMeta']['source_link'])} >Read More</Button>
                    </footer>
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