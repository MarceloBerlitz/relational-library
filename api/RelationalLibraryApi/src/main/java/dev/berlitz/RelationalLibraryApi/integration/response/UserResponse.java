package dev.berlitz.RelationalLibraryApi.integration.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import dev.berlitz.RelationalLibraryApi.enumerators.UserTypeEnum;
import lombok.Data;

import java.util.List;

@Data
public class UserResponse {
    private Integer codigo;
    private String nome;
    private UserTypeEnum tipo;
    private String email;
    private String senha;
    @JsonIgnoreProperties("usuario")
    private List<BookResponse> livros;
}
