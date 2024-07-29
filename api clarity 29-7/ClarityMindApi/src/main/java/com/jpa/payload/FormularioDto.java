package com.jpa.payload;



import java.util.Map;

public class FormularioDto {
    private Map<String, String> respuestas;

	public Map<String, String> getRespuestas() {
		return respuestas;
	}

	public void setRespuestas(Map<String, String> respuestas) {
		this.respuestas = respuestas;
	}
}