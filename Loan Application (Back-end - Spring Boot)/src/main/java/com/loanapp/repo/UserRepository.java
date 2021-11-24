package com.loanapp.repo;

import com.loanapp.model.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> 
{
	
	public User findByUsername(String username);
	
	//adding after.. For LoanManagementService..
	public List<User> findByEmailAndPassword(String email, String password);
	
}
