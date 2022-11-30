package com.bmar1.demosecureapioidc.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"${app.security.cors.origin}"})
@RestController
public class SecureApiController {
    @GetMapping("/api/test")
    public String getMessage() {
        return "TEST OK - Bravo";
    }
}
