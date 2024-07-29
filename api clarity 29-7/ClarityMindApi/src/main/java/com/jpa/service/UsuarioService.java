package com.jpa.service;


import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


import com.jpa.entity.Usuario;
import com.jpa.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private JavaMailSender mailSender;

    public void setUsuarioSesionActiva(Long id, boolean activo) {
        Usuario usuario = usuarioRepository.findById(id).orElse(null);
        if (usuario != null) {
            usuario.setSesionActiva(activo);
            usuarioRepository.save(usuario);
        } else {
            throw new RuntimeException("Usuario no encontrado");
        }
    }
    
    private void enviarCorreoActivacion(String correo, String token) {
        String subject = "Activación de cuenta";
        String body = "Por favor, activa tu cuenta haciendo clic en el siguiente enlace: "
                + "http://localhost:5173/activar/" + token;

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(correo);
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message); // Envía el correo
    }

    public Usuario registrarUsuario(Usuario usuario) {
        // No encriptar la contraseña, usar texto plano
        usuario.setActivo(false);
        usuario.setToken(UUID.randomUUID().toString()); // Genera un token único
        Usuario nuevoUsuario = usuarioRepository.save(usuario);

        // Envía el correo de activación
        enviarCorreoActivacion(nuevoUsuario.getCorreo(), nuevoUsuario.getToken());

        return nuevoUsuario;
    }


    public void activarCuenta(String token) {
        Usuario usuario = usuarioRepository.findByToken(token);
        if (usuario != null) {
            usuario.setActivo(true);
            usuario.setToken(null); // Limpiar el token después de la activación
            usuarioRepository.save(usuario);
        } else {
            throw new RuntimeException("Token inválido");
        }
    }
    
    public Usuario findByCorreo(String correo) {
        return usuarioRepository.findByCorreo(correo);
    }

    public boolean authenticate(String correo, String contrasenya) {
        Usuario usuario = findByCorreo(correo);
        return usuario != null && usuario.getContrasenya().equals(contrasenya);
    }


    }
    
 

    
