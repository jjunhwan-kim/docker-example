import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

const PostCreate = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  const onChange = (e) => {
    const nextForm = {
      ...post,
      [e.target.name]: e.target.value,
    };
    setPost(nextForm);
  };

  const createPost = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await axios.post('/api/posts', post);
      navigate('/posts');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <h1>게시글 작성</h1>
      <Form onSubmit={createPost}>
        <Form.Group className="mb-3">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
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
            placeholder="내용을 입력하세요"
            value={post.content}
            onChange={onChange}
          />
        </Form.Group>
        <Link to="/posts">
          <Button variant="secondary">목록</Button>
        </Link>{' '}
        <Button variant="primary" type="submit">
          등록
        </Button>
      </Form>
    </Container>
  );
};

export default PostCreate;
