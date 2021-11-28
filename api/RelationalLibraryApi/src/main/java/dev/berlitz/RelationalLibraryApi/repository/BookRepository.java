package dev.berlitz.RelationalLibraryApi.repository;

import dev.berlitz.RelationalLibraryApi.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {
}
