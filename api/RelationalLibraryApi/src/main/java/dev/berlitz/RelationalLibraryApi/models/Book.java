package dev.berlitz.RelationalLibraryApi.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Book {
    @Id
    @GeneratedValue
    private Integer codigo;
    private String titulo;
    private String descricao;
    private Integer ano;
    @ElementCollection
    private List<String> autores;
}

