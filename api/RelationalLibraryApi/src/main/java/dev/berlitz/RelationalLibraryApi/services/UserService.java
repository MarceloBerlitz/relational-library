package dev.berlitz.RelationalLibraryApi.services;

import dev.berlitz.RelationalLibraryApi.integration.request.LoginRequest;
import dev.berlitz.RelationalLibraryApi.integration.response.GetAll;
import dev.berlitz.RelationalLibraryApi.models.Book;
import dev.berlitz.RelationalLibraryApi.models.User;
import dev.berlitz.RelationalLibraryApi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public User createUser(User user) {
        return repository.save(user);
    }

    public User updateUser(Integer codigo, User user) {
        User toEdit = repository.getById(codigo);
        toEdit.setNome(user.getNome());
        toEdit.setEmail(user.getEmail());
        toEdit.setSenha(user.getSenha());
        toEdit.setTipo(user.getTipo());
        return repository.save(toEdit);
    }

    public GetAll<User> getAllUsers() {
        return new GetAll<>(repository.findAll());
    }

    public User getUser(Integer codigo) {
        return repository.getById(codigo);
    }

    public void deleteUser(Integer codigo) {
        repository.deleteById(codigo);
    }

    public User login(LoginRequest request) {
        var user = repository.getByEmail(request.getEmail());
        return !ObjectUtils.isEmpty(user) && user.getSenha().equals(request.getSenha()) ? user : null;
    }

}
