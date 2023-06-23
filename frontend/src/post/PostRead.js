import { Link, useParams } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PostRead = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`/api/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <Container>
      <h1>게시글 조회</h1>
      <Form.Group className="mb-3" controlId="id">
        <Form.Label>글번호</Form.Label>
        <Form.Control type="text" value={post.id} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" value={post.title} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>내용</Form.Label>
        <Form.Control as="textarea" rows={3} value={post.content} disabled />
      </Form.Group>
      <Link to="/posts">
        <Button variant="secondary">목록</Button>
      </Link>{' '}
      <Link to={`/posts/edit/${post.id}`}>
        <Button variant="primary">수정</Button>
      </Link>
    </Container>
  );
};

export default PostRead;
