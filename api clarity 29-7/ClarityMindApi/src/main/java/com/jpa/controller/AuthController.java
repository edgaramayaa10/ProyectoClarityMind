package com.jpa.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RestController;

import com.jpa.entity.LoginRequest;
import com.jpa.entity.Usuario;
import com.jpa.payload.LoginDto;
import com.jpa.service.AuthService;
import com.jpa.service.UsuarioService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UsuarioService usuarioService;
    public AuthController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public void login(HttpServletRequest request, HttpServletResponse response) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Long usuarioId = Long.valueOf(userDetails.getUsername()); // Ajusta según tu implementación
            usuarioService.setUsuarioSesionActiva(usuarioId, true);
        }
        response.setStatus(HttpServletResponse.SC_OK);
    }


    @PostMapping("/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Long usuarioId = Long.valueOf(userDetails.getUsername()); // Ajusta según tu implementación
            usuarioService.setUsuarioSesionActiva(usuarioId, false);
        }
        response.setStatus(HttpServletResponse.SC_OK);
    }


    @PostMapping("/registrar")
    public ResponseEntity<?> registrarUsuario(@RequestBody Usuario usuario) {
        try {
            usuarioService.registrarUsuario(usuario);
            return ResponseEntity.ok()
                    .body(Map.of("message", "Registro exitoso, revisa tu correo para activar la cuenta."));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Error en el registro: " + e.getMessage()));
        }
    }

    @PostMapping("/activar/{token}")
    public ResponseEntity<?> activarCuenta(@PathVariable String token) {
        try {
            usuarioService.activarCuenta(token);
            return ResponseEntity.ok(Map.of("message", "Cuenta activada exitosamente."));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Error en la activación: " + e.getMessage()));
        }
    }

    @GetMapping("/check")
    public String checkAuthentication() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.isAuthenticated() && !(authentication instanceof org.springframework.security.core.userdetails.UserDetails)) {
            return "Authenticated as " + authentication.getName();
        } else {
            return "Not authenticated";
        }
    }
   
}