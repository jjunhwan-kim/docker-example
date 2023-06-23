import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Table } from 'react-bootstrap';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then((response) => {
      setPosts(response.data.posts);
    });
  }, []);

  const postList = posts.map((post) => {
    return (
      <tr>
        <td>{post.id}</td>
        <td>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <h1>게시글 목록</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>{postList}</tbody>
      </Table>
      <Link to="/posts/create">
        <Button variant="primary">등록</Button>
      </Link>
    </Container>
  );
};

export default PostList;
