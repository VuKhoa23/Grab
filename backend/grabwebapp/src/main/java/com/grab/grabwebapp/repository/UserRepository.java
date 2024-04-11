package com.grab.grabwebapp.repository;

import com.grab.grabwebapp.entity.GrabUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<GrabUser, Integer> {
    Optional<GrabUser> findByUsername(String username);
    Boolean existsByUsername(String username);
}
