package dev.berlitz.RelationalLibraryApi.controllers;

import dev.berlitz.RelationalLibraryApi.integration.request.LoginRequest;
import dev.berlitz.RelationalLibraryApi.integration.response.GetAll;
import dev.berlitz.RelationalLibraryApi.integration.response.UserResponse;
import dev.berlitz.RelationalLibraryApi.mappers.UserResponseMapper;
import dev.berlitz.RelationalLibraryApi.models.User;
import dev.berlitz.RelationalLibraryApi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "usuarios")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse createBook(@RequestBody User user) {
        return UserResponseMapper.mapFrom(service.createUser(user));
    }

    @PutMapping(value = "/{codigo}")
    @ResponseStatus(HttpStatus.OK)
    public UserResponse updateUser(@PathVariable Integer codigo, @RequestBody User user) {
        return UserResponseMapper.mapFrom(service.updateUser(codigo, user));
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public GetAll<UserResponse> getAllUsers() {
        return new GetAll<>(service.getAllUsers().stream().map(UserResponseMapper::mapFrom).toList());
    }

    @GetMapping(value = "/{codigo}")
    @ResponseStatus(HttpStatus.OK)
    public UserResponse getUser(@PathVariable Integer codigo) {
        return UserResponseMapper.mapFrom(service.getUser(codigo));
    }

    @DeleteMapping(value = "/{codigo}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable Integer codigo) {
        service.deleteUser(codigo);
    }

    @PostMapping(value = "/login")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<UserResponse> login(@RequestBody LoginRequest loginRequest) {
        var user = service.login(loginRequest);
        if (ObjectUtils.isEmpty(user)) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(UserResponseMapper.mapFrom(user));
    }
}
