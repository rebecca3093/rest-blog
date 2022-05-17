package com.example.restblog.web;

import com.example.restblog.data.Post;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@CrossOrigin
@RestController
    @RequestMapping(value = "/api/posts", headers = "Accept=application/json")
    public class PostsController {

    List<Post> posts = new ArrayList<>();

    @GetMapping
    public List<Post> getAll() {
        posts.add(new Post(1L, "This is my first title", "This is some content"));
        posts.add(new Post(2L, "This is my second title", "This is more content"));
        posts.add(new Post(3L, "This is my third title", "This is even more content"));
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

    @PostMapping
        public void createPost(@RequestBody Post postItem){
        System.out.println(postItem);

    }

    @PutMapping("{id}")
    public void updatePost(@PathVariable Long id, @RequestBody Post updateItem){
        System.out.println(updateItem);
    }

    @DeleteMapping("{id}")
    public void deletePost(@PathVariable Long id){
        System.out.println("Delete Post with id: " + id);
    }
}

