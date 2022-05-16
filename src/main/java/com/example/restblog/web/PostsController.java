package com.example.restblog.web;

import com.example.restblog.data.Post;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
    @RequestMapping(value = "/api/posts", headers = "Accept=application/json")
    public class PostsController {

    List<Post> posts = new ArrayList<>();

    @GetMapping
    public List<Post> getAll() {
        posts.add(new Post(1L, "CoolTitle", "Cool Content"));
        posts.add(new Post(2L, "CoolTitle 2", "Cool Content 2"));
        posts.add(new Post(3L, "CoolTitle 3", "Cool Content 3"));
        return posts;
    }

    @GetMapping("{id}")
    public Post getById(@PathVariable Long id){
        for(Post post: getAll()){
            if(Objects.equals(post.getId(), id)){
                return post;
            }
        }
        return new Post();
    }


}

