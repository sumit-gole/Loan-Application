package com.loanapp.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loanapp.helper.UserFoundException;
import com.loanapp.model.Role;
import com.loanapp.model.User;
import com.loanapp.model.UserRole;
import com.loanapp.repo.UserRepository;
import com.loanapp.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	// creating user
	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception {

		user.setProfile("default.png");
		
		//encoding password with BCryptPasswordEncoder..
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		
		Set<UserRole> roles = new HashSet<>();

		Role role = new Role();
		role.setRoleId(10L);
		role.setRoleName("NormalUser");

		UserRole userRole = new UserRole();
		userRole.setUser(user);
		userRole.setRole(role);

		roles.add(userRole);

		return this.userService.createUser(user, roles);
	}

	@GetMapping("/{username}")
	// above username value where we can passed dynamically, it will goto the below
	// String username variable..
	public User getUser(@PathVariable("username") String username) {
		return this.userService.getUser(username);
	}

	// delete the user by user id
	@DeleteMapping("/{userId}")
	public void deleteUser(@PathVariable("userId") Long userId) {
		this.userService.deleteUser(userId);
	}

	/*
	 * UserService userService1; //The function receives a PUT request, updates the
	 * User with the specified Id and returns the updated User..
	 * 
	 * @PutMapping({"/{userId}"}) public User updateUser(@PathVariable("userId")
	 * Long userId, @RequestBody User user) { userService1.updateUser(userId, user);
	 * return new User(userService1.getUserById(userId), HttpStatus.OK); }
	 */
	
	
	@ExceptionHandler(UserFoundException.class)
	public ResponseEntity<?> exceptionHandler(ResponseEntity<?> ex){
		return ex;
		 //return ResponseEntity<>(ex);
	}
}
