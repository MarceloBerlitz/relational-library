package dev.berlitz.RelationalLibraryApi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Book {
    @Id
    @GeneratedValue
    private Integer codigo;
    @Column(nullable = false)
    private String titulo;
    private String descricao;
    private Integer ano;
    @ElementCollection
    @Column(nullable = false)
    private List<String> autores;
    @ManyToOne
    @JoinColumn(name="codigo_usuario")
    @JsonIgnoreProperties("livros")
    private User usuario;
    @Lob
    @Type(type="org.hibernate.type.BinaryType")
    private byte[] image;
    private String imageType;
}

