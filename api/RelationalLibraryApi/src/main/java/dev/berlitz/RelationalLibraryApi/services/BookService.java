package dev.berlitz.RelationalLibraryApi.services;

import dev.berlitz.RelationalLibraryApi.integration.request.UpdateBookRequest;
import dev.berlitz.RelationalLibraryApi.integration.response.GetAll;
import dev.berlitz.RelationalLibraryApi.models.Book;
import dev.berlitz.RelationalLibraryApi.repository.BookRepository;
import dev.berlitz.RelationalLibraryApi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository repository;
    @Autowired
    private UserRepository userRepository;

    public Book createBook(Book book) {
        return repository.save(book);
    }

    public Book updateBook(Integer codigo, UpdateBookRequest book) {
        var toEdit = repository.getById(codigo);
        toEdit.setTitulo(book.getTitulo());
        toEdit.setAno(book.getAno());
        toEdit.setDescricao(book.getDescricao());
        toEdit.setAutores(book.getAutores());
        Optional.ofNullable(book.getCodigoUsuario()).ifPresentOrElse((value) ->
            toEdit.setUsuario(userRepository.getById(value)), () -> toEdit.setUsuario(null));
        return repository.save(toEdit);
    }

    public void setCoverImage(Integer codigo, MultipartFile image) throws Exception {
        var bytes = image.getBytes();
        var type = image.getContentType();
        System.out.println(bytes.length);
        var toAddImage = repository.getById(codigo);
        toAddImage.setImage(bytes);
        toAddImage.setImageType(type);
        repository.save(toAddImage);
    }

    public Book getBook(Integer codigo) {
        return repository.getById(codigo);
    }

    public void deleteBook(Integer codigo) {
        repository.deleteById(codigo);
    }

    public List<Book> getAllBooks(String search) {
        return repository.findByTituloContaining(search);
    }
}
