package dev.berlitz.RelationalLibraryApi.mappers;

import dev.berlitz.RelationalLibraryApi.integration.response.UserResponse;
import dev.berlitz.RelationalLibraryApi.models.User;
import org.springframework.util.ObjectUtils;

public class UserResponseMapper {
    public static UserResponse mapFrom(User user) {
        var response = new UserResponse();
        response.setCodigo(user.getCodigo());
        response.setEmail(user.getEmail());
        response.setLivros(ObjectUtils.isEmpty(user.getLivros()) ? null : user.getLivros().stream().map(BookResponseMapper::mapInsideUser).toList());
        response.setNome(user.getNome());
        response.setSenha(user.getSenha());
        response.setTipo(user.getTipo());
        return response;
    }

    public static UserResponse mapInsideBook(User user) {
        var response = new UserResponse();
        response.setCodigo(user.getCodigo());
        response.setEmail(user.getEmail());
        response.setNome(user.getNome());
        response.setSenha(user.getSenha());
        response.setTipo(user.getTipo());
        return response;
    }
}
