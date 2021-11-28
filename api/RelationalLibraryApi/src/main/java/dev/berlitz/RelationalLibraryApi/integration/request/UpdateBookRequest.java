package dev.berlitz.RelationalLibraryApi.integration.request;

import lombok.Data;

import java.util.List;

@Data
public class UpdateBookRequest {
	private Integer codigo;
    private String titulo;
    private String descricao;
    private Integer ano;
    private List<String> autores;
    private Integer codigoUsuario;
}
