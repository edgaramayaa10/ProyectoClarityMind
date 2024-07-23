package com.jpa.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jpa.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	Usuario findByNombre(String nombre);
    boolean existsByCorreo(String correo);
    Usuario findByToken(String token);
    Usuario findByCorreo(String correo);
}