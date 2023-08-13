package com.example.backend.service;

import com.example.backend.model.Post;
import com.example.backend.repository.PostRepository;
import com.example.backend.request.PostCreateRequest;
import com.example.backend.request.PostUpdateRequest;
import com.example.backend.response.PostCreateResponse;
import com.example.backend.response.PostListReadResponse;
import com.example.backend.response.PostReadResponse;
import io.micrometer.core.annotation.Counted;
import io.micrometer.core.annotation.Timed;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Timed("my.posts.time")
@RequiredArgsConstructor
@Service
public class PostService {

    private final PostRepository postRepository;

    //@Counted("my.posts")
    @Transactional
    public PostCreateResponse createPost(PostCreateRequest request) {

        String title = request.getTitle();
        String content = request.getContent();

        Post post = new Post(title, content);

        postRepository.save(post);

        return new PostCreateResponse(post.getId());
    }

    @Transactional(readOnly = true)
    public PostListReadResponse getPosts() {

        List<Post> posts = postRepository.findAll();
        return PostListReadResponse.from(posts);
    }

    @Transactional(readOnly = true)
    public PostReadResponse getPost(Long id) {

        Post post = postRepository.findById(id)
                .orElseThrow(IllegalArgumentException::new);

        return new PostReadResponse(post.getId(), post.getTitle(), post.getContent());
    }

    @Transactional
    public void updatePost(Long id, PostUpdateRequest request) {

        Post post = postRepository.findById(id)
                .orElseThrow(IllegalArgumentException::new);

        String title = request.getTitle();
        String content = request.getContent();

        post.update(title, content);
    }

    //@Counted("my.posts")
    @Transactional
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public Long getPostSize() {
        return postRepository.count();
    }
}
