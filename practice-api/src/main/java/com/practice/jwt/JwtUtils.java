package com.practice.jwt;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.practice.services.UserDetailsImpl;

import io.jsonwebtoken.*;

/**
 * Responsible to get user detail(principal) by generating and validating jwt token with username, date, expiration, secret
 * @author Manish Luste
 *
 */
@Component
public class JwtUtils {
	private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

	// jwt secrete key that pass on JWT signature algorithm
	@Value("${practice.app.jwtSecret}")
	private String jwtSecret;

	// jwt expiration time in millisecond that will configure at generating token
	@Value("${practice.app.jwtExpirationMs}")
	private int jwtExpirationMs;

	/**
	 * Responsible to building jwt token with user principle, secrete key that going to exchange in header with hashing algorithm with expiration time in millisecond
	 * @param authentication contain user detail as principal after successful authentication 
	 * @return fresh jwt token that will store at client-side in cookie 
	 */
	public String generateJwtToken(Authentication authentication) {

		// after successful authentication get basic user information like username and password
		UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

		// building jwt token with user principle, secrete key that going to exchange in header with JWA hashing algorithm {@code HMAC using SHA-512} name for with expiration time in millisecond
		return Jwts.builder()
				.setSubject((userPrincipal.getUsername()))
				.setIssuedAt(new Date())
				.setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
				.signWith(SignatureAlgorithm.HS512, jwtSecret)
				.compact();
	}

	/**
	 * Responsible to get user name form jwt token body with matching secrete key which exchange in header during intercepting request
	 * @param token token that should same as generated token 
	 * @return user name from token body via getSubject()
	 */
	public String getUserNameFromJwtToken(String token) {
		return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
	}

	/**
	 * Responsible to validate generated(once) token with same secrete key that exchange in header every time while intercepting each request
	 * @param authToken token that should same as generated token 
	 * @return if match then claimed true flag otherwise claimed error 
	 */
	public boolean validateJwtToken(String authToken) {
		try {
			Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
			return true;
		} catch (SignatureException e) {
			logger.error("Invalid JWT signature: {}", e.getMessage());
		} catch (MalformedJwtException e) {
			logger.error("Invalid JWT token: {}", e.getMessage());
		} catch (ExpiredJwtException e) {
			logger.error("JWT token is expired: {}", e.getMessage());
		} catch (UnsupportedJwtException e) {
			logger.error("JWT token is unsupported: {}", e.getMessage());
		} catch (IllegalArgumentException e) {
			logger.error("JWT claims string is empty: {}", e.getMessage());
		}

		return false;
	}
}
