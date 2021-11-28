package dev.berlitz.RelationalLibraryApi.controllers;

import dev.berlitz.RelationalLibraryApi.integration.response.GetAll;
import dev.berlitz.RelationalLibraryApi.models.Book;
import dev.berlitz.RelationalLibraryApi.models.User;
import dev.berlitz.RelationalLibraryApi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "usuarios")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createBook(@RequestBody User user) {
        return service.createUser(user);
    }

    @PutMapping(value = "/{codigo}")
    @ResponseStatus(HttpStatus.OK)
    public User updateUser(@PathVariable Integer codigo, @RequestBody User user) {
        return service.updateUser(codigo, user);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public GetAll<User> getAllUsers() {
        return service.getAllUsers();
    }
}
