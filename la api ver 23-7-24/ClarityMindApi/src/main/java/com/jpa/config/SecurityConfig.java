package com.jpa.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.jpa.service.UsuarioService;


import jakarta.servlet.http.HttpServletResponse;


import java.util.Collections;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	private final HttpFirewall httpFirewall;
    private final UsuarioService usuarioService;

    // Constructor injection
    public SecurityConfig(HttpFirewall httpFirewall, UsuarioService usuarioService) {
        this.httpFirewall = httpFirewall;
        this.usuarioService = usuarioService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/auth/registrar", "/api/auth/activar/**", "/activar/**", "/api/auth/login", "/api/auth/logout").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginProcessingUrl("/api/auth/login")
                .successHandler((request, response, authentication) -> {
                    // Asegúrate de que `authentication.getPrincipal()` es un `CustomUserDetails` y no `User`
                    CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
                    Long userId = userDetails.getId();
                    
                    // Actualiza el campo `sesionActiva` en la base de datos
                    usuarioService.setUsuarioSesionActiva(userId, true);

                    // Envía una respuesta de éxito
                    response.setStatus(HttpServletResponse.SC_OK);
                    response.getWriter().write("Login successful");
                })
                .failureHandler((request, response, exception) -> {
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Authentication Failed");
                })
                .permitAll()
            )
            .logout(logout -> logout
                .logoutUrl("/api/auth/logout")
                .logoutSuccessHandler((request, response, authentication) -> {
                    // Asegúrate de que `authentication.getPrincipal()` es un `CustomUserDetails` y no `User`
                    CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
                    Long userId = userDetails.getId();
                    
                    // Actualiza el campo `sesionActiva` en la base de datos
                    usuarioService.setUsuarioSesionActiva(userId, false);

                    // Envía una respuesta de éxito
                    response.setStatus(HttpServletResponse.SC_OK);
                })
                .permitAll()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
            );

        return http.build();
    }


    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.httpFirewall(httpFirewall);
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.addAllowedOriginPattern("*"); // Permitir todos los orígenes
        configuration.setAllowedMethods(Collections.singletonList("*")); // Permitir todos los métodos
        configuration.setAllowedHeaders(Collections.singletonList("*")); // Permitir todos los encabezados

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public AuthenticationSuccessHandler successHandler() {
        return (request, response, authentication) -> {
            response.sendRedirect("/");
        };
    }
}