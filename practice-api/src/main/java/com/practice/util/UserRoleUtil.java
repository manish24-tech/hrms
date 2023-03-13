package com.practice.util;

import java.util.HashSet;
import java.util.Set;

import com.practice.models.Role;
import com.practice.models.UserRole;
import com.practice.repository.RoleRepository;

/**
 * Responsible to provide utilities regarding user roles such as : 1. get user
 * roles 2. get user roles by name 3. get specific role
 * 
 * @author Manish Luste
 *
 */
public interface UserRoleUtil {

	/**
	 * Responsible to get user role by user name
	 * 
	 * @param strRoles
	 * @param roleRepository
	 * @return
	 */
	static Set<Role> getUserRolesByUserName(Set<String> strRoles, RoleRepository roleRepository) {
		Set<Role> roles = new HashSet<>();
		if (strRoles == null) {
			Role userRole = roleRepository.findByName(UserRole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(UserRole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;
				case "mod":
					Role modRole = roleRepository.findByName(UserRole.ROLE_MODERATOR)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(modRole);

					break;
				default:
					Role userRole = roleRepository.findByName(UserRole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}
		return roles;
	}
}
