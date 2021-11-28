package dev.berlitz.RelationalLibraryApi.controllers;

import dev.berlitz.RelationalLibraryApi.integration.request.LoginRequest;
import dev.berlitz.RelationalLibraryApi.integration.response.GetAll;
import dev.berlitz.RelationalLibraryApi.models.User;
import dev.berlitz.RelationalLibraryApi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(value = "/{codigo}")
    @ResponseStatus(HttpStatus.OK)
    public User getUser(@PathVariable Integer codigo) {
        return service.getUser(codigo);
    }

    @DeleteMapping(value = "/{codigo}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable Integer codigo) {
        service.deleteUser(codigo);
    }

    @PostMapping(value = "/login")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<User> login(@RequestBody LoginRequest loginRequest) {
        var user = service.login(loginRequest);
        if (null == user) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(user);
    }
}
