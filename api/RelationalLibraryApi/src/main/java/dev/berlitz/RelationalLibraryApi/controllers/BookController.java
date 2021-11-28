package dev.berlitz.RelationalLibraryApi.controllers;

import dev.berlitz.RelationalLibraryApi.integration.response.GetAll;
import dev.berlitz.RelationalLibraryApi.models.Book;
import dev.berlitz.RelationalLibraryApi.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "livros")
public class BookController {

    @Autowired
    private BookService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Book createBook(@RequestBody Book book) {
        return service.createBook(book);
    }

    @PutMapping(value = "/{codigo}")
    @ResponseStatus(HttpStatus.OK)
    public Book editBook(@PathVariable Integer codigo, @RequestBody Book book) {
        return service.updateBook(codigo, book);
    }

    @GetMapping(value = "/{codigo}")
    @ResponseStatus(HttpStatus.OK)
    public Book getBook(@PathVariable Integer codigo) {
        return service.getBook(codigo);
    }

    @DeleteMapping(value = "/{codigo}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteBook(@PathVariable Integer codigo) {
        service.deleteBook(codigo);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public GetAll<Book> getAllBooks(@RequestParam(required = false) String search) {
        return service.getAllBooks(Optional.ofNullable(search).orElse(""));
    }


}
