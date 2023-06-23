import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

const PostUpdate = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  const onChange = (e) => {
    const nextForm = {
      ...post,
      [e.target.name]: e.target.value,
    };
    setPost(nextForm);
  };

  const updatePost = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    await axios.put('/api/posts/' + post.id, post);
    navigate('/posts');
  };

  const deletePost = async (e) => {
    await axios.delete('/api/posts/' + post.id);
    navigate('/posts');
  };

  return (
    <Container>
      <h1>게시글 수정</h1>
      <Form onSubmit={updatePost}>
        <Form.Group className="mb-3">
          <Form.Label>글번호</Form.Label>
          <Form.Control type="text" value={post.id} readOnly />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={post.title}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            rows={3}
            value={post.content}
            onChange={onChange}
          />
        </Form.Group>
        <Link to="/posts">
          <Button variant="secondary">목록</Button>
        </Link>{' '}
        <Button variant="primary" type="submit">
          수정
        </Button>{' '}
        <Button variant="danger" onClick={deletePost}>
          삭제
        </Button>
      </Form>
    </Container>
  );
};

export default PostUpdate;
