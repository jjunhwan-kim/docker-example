package com.example.backend.controller;

import com.example.backend.request.PostCreateRequest;
import com.example.backend.request.PostUpdateRequest;
import com.example.backend.response.PostCreateResponse;
import com.example.backend.response.PostListReadResponse;
import com.example.backend.response.PostReadResponse;
import com.example.backend.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api")
@RequiredArgsConstructor
@RestController
public class PostController {

    private final PostService postService;

    @PostMapping("/posts")
    public PostCreateResponse createPost(@RequestBody PostCreateRequest request) {
        return postService.createPost(request);
    }

    @GetMapping("/posts")
    public PostListReadResponse getPosts() {
        return postService.getPosts();
    }

    @GetMapping("/posts/{id}")
    public PostReadResponse getPost(@PathVariable Long id) {
        return postService.getPost(id);
    }

    @PutMapping("/posts/{id}")
    public void updatePost(@PathVariable Long id, @RequestBody PostUpdateRequest request) {
        postService.updatePost(id, request);
    }

    @DeleteMapping("/posts/{id}")
    public void deletePost(@PathVariable Long id) {
        postService.deletePost(id);
    }
}
