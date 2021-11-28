package dev.berlitz.RelationalLibraryApi.services;

import dev.berlitz.RelationalLibraryApi.models.Book;
import dev.berlitz.RelationalLibraryApi.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    @Autowired
    private BookRepository repository;

    public Book createBook(Book book) {
        return repository.save(book);
    }
}
