package com.jpa.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.jpa.entity.Usuario;
import com.jpa.service.UsuarioService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
    private UsuarioService usuarioService;

	@PostMapping("/registrar")
	public ResponseEntity<?> registrarUsuario(@RequestBody Usuario usuario) {
	    try {
	        usuarioService.registrarUsuario(usuario);
	        return ResponseEntity.ok().body(Map.of("message", "Registro exitoso, revisa tu correo para activar la cuenta."));
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("message", "Error en el registro: " + e.getMessage()));
	    }
	}
	@PostMapping("/activar/{token}")
	public ResponseEntity<?> activarCuenta(@PathVariable String token) {
	    try {
	        usuarioService.activarCuenta(token);
	        return ResponseEntity.ok(Map.of("message", "Cuenta activada exitosamente."));
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("message", "Error en la activación: " + e.getMessage()));
	    }
	}
}