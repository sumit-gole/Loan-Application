package com.loanapp.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loanapp.helper.UserFoundException;
import com.loanapp.model.User;
import com.loanapp.model.UserRole;
import com.loanapp.repo.RoleRepository;
import com.loanapp.repo.UserRepository;
import com.loanapp.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	// creating user
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		// TODO Auto-generated method stub
		User local = this.userRepository.findByUsername(user.getUsername());
		
		if(local != null) 
		{
			System.out.println("User is already there !!");
			//throw new Exception("User already present");
			throw new UserFoundException();
		}
		else 
		{
			//user create
			for(UserRole ur: userRoles)
			{
				roleRepository.save(ur.getRole());
			}
			
			user.getUserRoles().addAll(userRoles);
			local = this.userRepository.save(user);
		}
		return local;
	}

	
	//getting user by username
	@Override
	public User getUser(String username) {
		// TODO Auto-generated method stub
		return this.userRepository.findByUsername(username);
	}


	//delete the user by user id
	@Override
	public void deleteUser(Long userId) {
		// TODO Auto-generated method stub
		this.userRepository.deleteById(userId);
	}	
	
	
/*
	//update the user by user id
	@Override
    public void updateUser(Long id, User user) {
        User userRepos = userRepository.findById(id).get();
        System.out.println(userRepos.toString());
        userRepos.setUsername(user.getUsername());
        userRepos.setPassword(user.getPassword());
        userRepos.setFirstname(user.getFirstname());
        userRepos.setLastname(user.getLastname());
        userRepos.setEmail(user.getEmail());
        userRepos.setPhone(user.getPhone());
        userRepos.setProfile(user.getProfile());
     
        userRepository.save(userRepos);
    }
	
	//update & get the user by user id
	 @Override
	 public User getUserById(Long id) {
	        return userRepository.findById(id).get();
	 } 
*/
	
}
