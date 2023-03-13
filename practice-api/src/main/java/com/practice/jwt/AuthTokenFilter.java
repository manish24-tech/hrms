package com.practice.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.practice.services.UserDetailsServiceImpl;

/**
 * Responsible to filter each request with OncePerRequestFilter from spring filter chain after authentication but before authorization
 * Single execution per request dispatch with help of doFilterInternal() with HttpServletRequest and HttpServletResponse arguments
 * each & every request verified from this filter and decide granted authority of user to be authorization  
 * @author Manish Luste
 *
 */
public class AuthTokenFilter extends OncePerRequestFilter {
	
	// bind jwt util bean for validating jwt token with secrete key - which should be same after authentication
	@Autowired
	private JwtUtils jwtUtils;

	// bind user detail service to get user detail from database via user name
	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	private static final Logger logger = LoggerFactory.getLogger(AuthTokenFilter.class);

	/**
	 * 1. get jwt token from header(Authorization) and removed Bearer from the start index
	 * 2. get user name from token by validating and parsing
	 * 3. create user detail object via user name via jpa service call(from database)
	 * 4. Authenticate user detail via UsernamePasswordAuthenticationToken
	 * 5. stored authenticated user detail in Spring Security Context(SecurityContextHolder). So, every time we can get from the context itself(SecurityContextHolder.getContext().getAuthentication().getPrincipal()) 
	 */
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		try {
			String jwt = parseJwt(request);
			if (jwt != null && jwtUtils.validateJwtToken(jwt)) {
				String username = jwtUtils.getUserNameFromJwtToken(jwt);

				UserDetails userDetails = userDetailsService.loadUserByUsername(username);
				UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
						userDetails, null, userDetails.getAuthorities());
				authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

				SecurityContextHolder.getContext().setAuthentication(authentication);
			}
		} catch (Exception e) {
			logger.error("Cannot set user authentication: {}", e);
		}

		filterChain.doFilter(request, response);
	}

	/**
	 * Responsible to get jwt token from header(Authorization) and removed Bearer from the start index
	 * @param request HttpServletRequest object that intercepted  
	 * @return customized header with removed Bearer : From Authorization : Barere_jwttoken To Authorization : jwttoken
	 */
	private String parseJwt(HttpServletRequest request) {
		String headerAuth = request.getHeader("Authorization");

		if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
			return headerAuth.substring(7, headerAuth.length());
		}

		return null;
	}
}
