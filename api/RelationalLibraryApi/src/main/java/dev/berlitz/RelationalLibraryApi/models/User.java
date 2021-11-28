package dev.berlitz.RelationalLibraryApi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import dev.berlitz.RelationalLibraryApi.enumerators.UserTypeEnum;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity(name = "usr")
@Data
public class User {
    @Id
    @GeneratedValue
    private Integer codigo;
    @Column(nullable = false)
    private String nome;
    @Column(nullable = false)
    private UserTypeEnum tipo;
    @Column(unique = true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String senha;
    @OneToMany(mappedBy = "usuario")
    @JsonIgnoreProperties("usuario")
    private List<Book> livros;
}
