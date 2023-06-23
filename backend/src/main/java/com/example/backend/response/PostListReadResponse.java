package com.example.backend.response;

import com.example.backend.model.Post;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class PostListReadResponse {

    private final List<PostResponse> posts;

    private PostListReadResponse(List<PostResponse> posts) {
        this.posts = posts;
    }

    public static PostListReadResponse from(List<Post> posts) {
        return new PostListReadResponse(posts.stream()
                .map(PostResponse::from)
                .collect(Collectors.toList()));
    }

    @Getter
    public static class PostResponse {
        private final Long id;
        private final String title;

        private PostResponse(Long id, String title) {
            this.id = id;
            this.title = title;
        }

        public static PostResponse from(Post post) {
            return new PostResponse(post.getId(), post.getTitle());
        }
    }
}
