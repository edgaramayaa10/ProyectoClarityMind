package com.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jpa.entity.Formulario;

@Repository
public interface FormularioRepository extends JpaRepository<Formulario, Long> {
}