package com.loanapp.service;

import java.util.Set;

import com.loanapp.model.User;
import com.loanapp.model.UserRole;

public interface UserService {
	
	//creating user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
	//get user by username..
	public User getUser(String user); 
	
	//delete the user by user id..
	public void deleteUser(Long userId);
	
	
/*
	//update the user by user id..
	public void updateUser(Long id, User user);

	//get the user user by user id for update record..
	User getUserById(Long id);
*/

}
