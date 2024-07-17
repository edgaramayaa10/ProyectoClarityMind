package com.jpa.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.jpa.entity.Usuario;
import com.jpa.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private JavaMailSender mailSender; // Inyecta JavaMailSender

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Usuario registrarUsuario(Usuario usuario) {
        usuario.setContraseña(passwordEncoder.encode(usuario.getContraseña()));
        usuario.setActivo(false);
        usuario.setToken(UUID.randomUUID().toString()); // Genera un token único
        Usuario nuevoUsuario = usuarioRepository.save(usuario);

        enviarCorreoActivacion(nuevoUsuario.getCorreo(), nuevoUsuario.getToken());

        return nuevoUsuario;
    }

    private void enviarCorreoActivacion(String correo, String token) {
        String subject = "Activación de cuenta";
        String body = "Por favor, activa tu cuenta haciendo clic en el siguiente enlace: "
                + "http://localhost:5173/activar/" + token; // Ajusta la URL según sea necesario

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(correo);
        message.setSubject(subject);
        message.setText(body);
        
        mailSender.send(message); // Envía el correo
    }
    public void activarCuenta(String token) {
        Usuario usuario = usuarioRepository.findByToken(token);
        if (usuario != null) {
            usuario.setActivo(true);
            usuario.setToken(null); // Asumiendo que hay un campo 'token' en el modelo Usuario
            usuarioRepository.save(usuario);
        } else {
            throw new RuntimeException("Token inválido");
        }
    }
}