package com.jpa.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import jakarta.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable()) // Deshabilitar CSRF
            .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Configurar CORS
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/api/auth/registrar", "/api/auth/activar/**","/activar/**").permitAll() // Permitir acceso sin autenticación
                .anyRequest().authenticated() // Requerir autenticación para cualquier otra solicitud
            )
            .exceptionHandling(exception -> exception.authenticationEntryPoint((request, response, authException) -> {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
            }))
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Política de creación de sesiones
            );

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.addAllowedOriginPattern("*"); // Permitir todos los orígenes
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
	}

