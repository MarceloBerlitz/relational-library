package dev.berlitz.RelationalLibraryApi.controllers;

import dev.berlitz.RelationalLibraryApi.models.Book;
import dev.berlitz.RelationalLibraryApi.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "book")
public class BookController {

    @Autowired
    private BookService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Book createBook(@RequestBody Book book) {
        return service.createBook(book);
    }

}
