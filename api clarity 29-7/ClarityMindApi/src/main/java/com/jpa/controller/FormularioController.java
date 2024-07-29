package com.jpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jpa.entity.Formulario;
import com.jpa.repository.FormularioRepository;

@RestController
@RequestMapping("/api/formularios")
public class FormularioController {

    @Autowired
    private FormularioRepository formularioRepository;

    @PostMapping
    public ResponseEntity<String> createFormulario(@RequestBody Formulario formulario) {
        try {
            formularioRepository.save(formulario);
            return new ResponseEntity<>("Formulario enviado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error al enviar el formulario", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}