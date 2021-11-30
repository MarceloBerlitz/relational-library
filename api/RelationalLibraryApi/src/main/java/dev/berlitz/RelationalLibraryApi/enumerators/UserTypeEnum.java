package dev.berlitz.RelationalLibraryApi.enumerators;

public enum UserTypeEnum {
    FUNCIONARIO(1), CLIENTE(2);

    public Integer tipoUsuario;

    UserTypeEnum(Integer tipo) {
        tipoUsuario = tipo;
    }
}