package dev.berlitz.RelationalLibraryApi.controllers;

import dev.berlitz.RelationalLibraryApi.integration.request.UpdateBookRequest;
import dev.berlitz.RelationalLibraryApi.integration.response.BookResponse;
import dev.berlitz.RelationalLibraryApi.integration.response.GetAll;
import dev.berlitz.RelationalLibraryApi.mappers.BookResponseMapper;
import dev.berlitz.RelationalLibraryApi.models.Book;
import dev.berlitz.RelationalLibraryApi.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "livros")
public class BookController {

    @Autowired
    private BookService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public BookResponse createBook(@RequestBody Book book) {
        return BookResponseMapper.mapFrom(service.createBook(book));
    }

    @PatchMapping(value = "/{codigo}/capa")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Void> setCoverImage(@PathVariable Integer codigo, @RequestParam("file") MultipartFile file) {
        try {
            service.setCoverImage(codigo, file);
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping(value = "/{codigo}")
    @ResponseStatus(HttpStatus.OK)
    public BookResponse updateBook(@PathVariable Integer codigo, @RequestBody UpdateBookRequest book) {
        return BookResponseMapper.mapFrom(service.updateBook(codigo, book));
    }

    @GetMapping(value = "/{codigo}")
    @ResponseStatus(HttpStatus.OK)
    public BookResponse getBook(@PathVariable Integer codigo) {
        return BookResponseMapper.mapFrom(service.getBook(codigo));
    }

    @DeleteMapping(value = "/{codigo}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteBook(@PathVariable Integer codigo) {
        service.deleteBook(codigo);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public GetAll<BookResponse> getAllBooks(@RequestParam(required = false) String search) {
        return new GetAll<>(service.getAllBooks(Optional.ofNullable(search).orElse("")).stream().map(BookResponseMapper::mapFrom).toList());
    }


}
