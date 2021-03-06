package dev.berlitz.RelationalLibraryApi.mappers;

import dev.berlitz.RelationalLibraryApi.integration.response.BookResponse;
import dev.berlitz.RelationalLibraryApi.models.Book;
import org.springframework.util.ObjectUtils;

import java.util.Base64;

public class BookResponseMapper {
    public static BookResponse mapFrom(Book book) {
        var response = new BookResponse();
        response.setAutores(book.getAutores());
        response.setDescricao(book.getDescricao());
        response.setAno(book.getAno());
        response.setUsuario(ObjectUtils.isEmpty(book.getUsuario()) ? null : UserResponseMapper.mapInsideBook(book.getUsuario()));
        response.setTitulo(book.getTitulo());
        response.setCodigo(book.getCodigo());
        response.setImage(ObjectUtils.isEmpty(book.getImage()) ? null : String.format("data:%s;base64,%s", book.getImageType(), Base64.getEncoder().encodeToString(book.getImage())));
        return response;
    }

    public static BookResponse mapInsideUser(Book book) {
        var response = new BookResponse();
        response.setAutores(book.getAutores());
        response.setDescricao(book.getDescricao());
        response.setAno(book.getAno());
        response.setTitulo(book.getTitulo());
        response.setCodigo(book.getCodigo());
        response.setImage(ObjectUtils.isEmpty(book.getImage()) ? null : String.format("data:%s;base64,%s", book.getImageType(), Base64.getEncoder().encodeToString(book.getImage())));
        return response;
    }
}
