package com.grab.grabwebapp.repository;

import com.grab.grabwebapp.entity.user.Operator;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OperatorRepository extends JpaRepository<Operator, Integer> {
}
