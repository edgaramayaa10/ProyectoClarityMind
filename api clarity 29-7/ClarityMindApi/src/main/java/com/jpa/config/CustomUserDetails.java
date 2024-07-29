package com.jpa.config;

import com.jpa.entity.Usuario;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class CustomUserDetails implements UserDetails {

	private static final long serialVersionUID = 1L;
	private final Usuario usuario;

    public CustomUserDetails(Usuario usuario) {
        this.usuario = usuario;
    }

    public Long getId() {
        return usuario.getId();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null; // Implementar según sea necesario
    }

    @Override
    public String getPassword() {
        return usuario.getContrasenya(); // Ajustar según sea necesario
    }

    @Override
    public String getUsername() {
        return usuario.getNombre();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // Implementar según sea necesario
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Implementar según sea necesario
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Implementar según sea necesario
    }

    @Override
    public boolean isEnabled() {
        return true; // Implementar según sea necesario
    }
}