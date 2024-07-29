package com.jpa.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "formularios")
public class Formulario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fecha_creacion")
    private LocalDateTime fechaCreacion = LocalDateTime.now();
    
    @Column(name = "respuesta1")
    private String respuesta1;

    @Column(name = "respuesta2")
    private String respuesta2;

    @Column(name = "respuesta3")
    private String respuesta3;

    @Column(name = "respuesta4")
    private String respuesta4;

    @Column(name = "respuesta5")
    private String respuesta5;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDateTime getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(LocalDateTime fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public String getRespuesta1() {
		return respuesta1;
	}

	public void setRespuesta1(String respuesta1) {
		this.respuesta1 = respuesta1;
	}

	public String getRespuesta2() {
		return respuesta2;
	}

	public void setRespuesta2(String respuesta2) {
		this.respuesta2 = respuesta2;
	}

	public String getRespuesta3() {
		return respuesta3;
	}

	public void setRespuesta3(String respuesta3) {
		this.respuesta3 = respuesta3;
	}

	public String getRespuesta4() {
		return respuesta4;
	}

	public void setRespuesta4(String respuesta4) {
		this.respuesta4 = respuesta4;
	}

	public String getRespuesta5() {
		return respuesta5;
	}

	public void setRespuesta5(String respuesta5) {
		this.respuesta5 = respuesta5;
	}
}