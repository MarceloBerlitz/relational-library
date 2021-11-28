package dev.berlitz.RelationalLibraryApi.repository;

import dev.berlitz.RelationalLibraryApi.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> findByTituloContaining(String search);
}
