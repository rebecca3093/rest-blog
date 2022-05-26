package com.example.restblog.service;

import com.example.restblog.data.Post;
import com.example.restblog.data.User;
import com.example.restblog.data.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {


    private final UsersRepository usersRepository;

    public UserService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<User> getUsersList() { //
        return usersRepository.findAll();
    }


    public User getUserById(Long id) {
        return usersRepository.findById(id).orElseThrow();
    }

    public User getUserByUsername(String username) {
        return usersRepository.findByUsername(username);
    }

    public void updateEmail(Long userId, String newEmail){
        User user = getUserById(userId);
        user.setEmail(newEmail);
        usersRepository.save(user);
    }



}

