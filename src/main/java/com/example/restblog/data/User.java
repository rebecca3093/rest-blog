package com.example.restblog.data;

import javax.management.relation.Role;
import java.time.LocalDateTime;

public class User {

    private Long id;
    private String username;
    private String email;
    private String password;
    private LocalDateTime createdAt;
    private Role role;

    public enum Role {USER, ADMIN}
}

