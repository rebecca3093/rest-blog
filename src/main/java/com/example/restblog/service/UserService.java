package com.example.restblog.service;

import com.example.restblog.data.Post;
import com.example.restblog.data.PostsRepository;
import com.example.restblog.data.User;
import com.example.restblog.data.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final PostsRepository postsRepository;

    public UserService(UserRepository userRepository, PostsRepository postsRepository) {
        this.userRepository = userRepository;
        this.postsRepository = postsRepository;
    }


    /*<Public> Public UserService(UserRepository userRepository, PostsRepository postsRepository){
        this.userRepository = userRepository;
        this.postsRepository = postsRepository;
    }*/

    public List<User> getUserList(){
        return userRepository.findAll();
    }

    public List<Post> getPostList(){
        return postsRepository.findAll();
    }

    public void addPost (Post newPost, String username){

        User user = getUserByUsername(username);

        user.getPosts().add(newPost);
        newPost.setUser(user);

        postsRepository.save(newPost);

    }

    public User getUserbyId(Long id){
        return userRepository.findById(id).orElseThrow();
    }

    public User getUserByUsername(String username){
        return userRepository.findByUsername(username);
    }

    public void deletePostById(long id){
        postsRepository.deleteById(id);
    }




}

