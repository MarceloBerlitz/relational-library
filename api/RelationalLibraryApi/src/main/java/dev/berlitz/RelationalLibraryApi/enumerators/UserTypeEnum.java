package dev.berlitz.RelationalLibraryApi.enumerators;

public enum UserTypeEnum {
    FUNCIONARIO("funcionario"), CLIENTE("cliente");

    public String tipoUsuario;

    UserTypeEnum(String tipo) {
        tipoUsuario = tipo;
    }
}