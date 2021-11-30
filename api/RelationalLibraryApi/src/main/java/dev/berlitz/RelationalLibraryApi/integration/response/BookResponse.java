package dev.berlitz.RelationalLibraryApi.integration.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import dev.berlitz.RelationalLibraryApi.models.User;
import lombok.Data;

import java.util.List;

@Data
public class BookResponse {
    private Integer codigo;
    private String titulo;
    private String descricao;
    private Integer ano;
    private List<String> autores;
    @JsonIgnoreProperties("livros")
    private UserResponse usuario;
    private String image;
}
