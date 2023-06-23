package com.example.backend.response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class PostReadResponse {
    private final Long id;
    private final String title;
    private final String content;
}
