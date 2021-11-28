package dev.berlitz.RelationalLibraryApi.services;

import dev.berlitz.RelationalLibraryApi.integration.response.GetAll;
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

    public Book updateBook(Integer codigo, Book book) {
        Book toEdit = repository.getById(codigo);
        toEdit.setTitulo(book.getTitulo());
        toEdit.setAno(book.getAno());
        toEdit.setDescricao(book.getDescricao());
        toEdit.setAutores(book.getAutores());
        return repository.save(toEdit);
    }

    public Book getBook(Integer codigo) {
        return repository.getById(codigo);
    }

    public void deleteBook(Integer codigo) {
        repository.deleteById(codigo);
    }

    public GetAll<Book> getAllBooks(String search) {
        return new GetAll<>(repository.findByTituloContaining(search));
    }
}
