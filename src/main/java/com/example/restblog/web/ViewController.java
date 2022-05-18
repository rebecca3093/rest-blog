package com.example.restblog.web;

import org.springframework.stereotype.Controller;
//import org.springframework.stereotype.Repository;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping({"/", "/about", "/posts", "/login", "/home", "/register"})
    public String showView(){
        return "forward: /index.html";
    }

}



