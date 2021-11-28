package dev.berlitz.RelationalLibraryApi.repository;

import dev.berlitz.RelationalLibraryApi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    public User getByEmail(String email);
}
