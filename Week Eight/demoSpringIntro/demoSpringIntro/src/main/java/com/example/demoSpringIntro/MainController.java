package com.example.demoSpringIntro;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//Indicator turns into a rest controller
@RestController
public class MainController {

    @RequestMapping("/")
    public String home (){
        return "Hello Spring";
    }

}
