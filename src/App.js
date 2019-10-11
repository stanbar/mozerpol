import React from 'react';
import Editor from 'react-medium-editor';
import './App.css';
// import request from 'request';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
const host = 'http://home.stasbar.com:9999'
class App extends React.Component {
  state = {
    text: "Enter post here",
  }

  getPosts = () => {
    axios.get(`${host}/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  componentDidMount() {
    this.getPosts();
  }

  handleChange = (text, medium) => {
    this.setState({ text: text });
  }

  createPost = () => {
    axios.post(`${host}/posts`, { content: this.state.text })
      .then(res => {
        console.log(res);
      })
      .then(() => this.getPosts());
  }

  deletePost = (postId) => {
    axios.delete(`${host}/posts/${postId}`)
      .then(res => {
        console.log(res);
      })
      .then(() => this.getPosts());
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App" style={{
        paddingLeft: '20%', paddingRight: '20%',
          paddingBottom: '100px', paddingTop: '40px'}} >

      <h1>Posts</h1>
      {posts && posts.map((post) => 
        (<Card>
          <Card.Header>Post #{post.id}
            <Button variant="link" onClick={() => this.deletePost(post.id)}>Delete</Button>
          </Card.Header>
          <Card.Body>
            <Card.Text>
          <p dangerouslySetInnerHTML={{__html: post.content}} />
            </Card.Text>
          </Card.Body>
        </Card>)
      )}
        <h1>Create post</h1>
        <Editor style={{minHeight: '200px'}} text={this.state.text} onChange={this.handleChange}  />
        <Button onClick={this.createPost}>Create</Button>
      </div>
    );
  }


}
export default App;
