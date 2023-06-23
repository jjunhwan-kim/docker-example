package com.example.backend.request;

import lombok.Data;

@Data
public class PostUpdateRequest {
    private String title;
    private String content;
}
