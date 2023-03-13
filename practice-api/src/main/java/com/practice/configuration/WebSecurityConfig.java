package com.practice.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.practice.jwt.AuthEntryPointJwt;
import com.practice.jwt.AuthTokenFilter;
import com.practice.services.UserDetailsServiceImpl;


/**
 * 
 * Provides a convenient security implementation from WebSecurityConfigurerinstance 
 * 1. Filter the request by AuthTokenFilter -> 
 * 2. Authenticate user by AuthenticationManager -> 
 * 3. Retrieve user principal by UserDetailService -> 
 * 4. Authorizer user to grant authority by HttpSecurity configurations
 *   
 * EnableWebSecurity : tell spring to apply global security on classes 
 * EnableGlobalMethodSecurity : provide @PreAuthorize, @PostAuthorize AOP security on methods
 * 
 * @author Manish Luste
 *
 */
@EnableWebSecurity
@EnableGlobalMethodSecurity(
		// securedEnabled = true,
		// jsr250Enabled = true,
		prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	// bind user detail service wrapper to perform authentication and authorization - username and password
	@Autowired
	UserDetailsServiceImpl userDetailsService;
	
	// bind AuthEntryPoint that enable ExceptionTranslationFilter to commence an authentication scheme to thrown 401 in case of un authenticate user tries to access HTTP secure resource
	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;

	// bind AuthTokenFilter to filter each new request with OncePerRequestFilter from spring filter chain after authentication but before authorization
	@Bean
	public AuthTokenFilter authenticationJwtTokenFilter() {
		return new AuthTokenFilter();
	}

	/**
	 * Authentication process with building user credential that retrieve user detail
	 * Authentication manager instruct authentication builder to build user detail with encoded password 
	 */
	@Override
	public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
		authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}

	/**
	 * Authorization Process of authenticated user on each type of filtered request from filter chain
	 * HttpSecurity configurations to configure cors, csrf, session management, rules for protected resources
	 */
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable()
			.exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
			.authorizeRequests().antMatchers("/api/auth/**").permitAll()
			.antMatchers("/v2/api-docs", "/configuration/**", "/swagger*/**", "/webjars/**")
            .permitAll()
			.antMatchers("/api/test/**").permitAll()
			.anyRequest().authenticated();

		// add filter for each request with OncePerRequestFilter from spring filter chain
		// each request contain auth token that should match with secrete key
		// if match then grant authority to make authorize user
		// else throws AuthenticationException with 401 status code
		http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
	}
	
	/**
	 * Responsible to create authentication object by authenticating user via UsernamePasswordAuthenticationToken object with user name and password
	 * It probably used while login/signin 
	 * Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
	 * UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();
	 */
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	/**
	 * org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder.BCryptPasswordEncoder()
	 * PasswordEncoder interface to encode or transform passwords to facilitate the secure storage of the credentials
	 * @return encrypted/encode password based on hashing function 
	 */
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
