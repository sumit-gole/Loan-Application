package com.loanapp;

import java.util.Set;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.loanapp.helper.UserFoundException;
import com.loanapp.model.Role;
import com.loanapp.model.User;
import com.loanapp.model.UserRole;
import com.loanapp.service.UserService;

@SpringBootApplication
public class LoanApplication implements CommandLineRunner{

	@Autowired
	private UserService userService;
	
	@Autowired
	private PasswordEncoder bCryptPasswordEncoder;
	
	public static void main(String[] args) {
		
		SpringApplication.run(LoanApplication.class, args);
		System.out.println("@@@@ Loan-App Started...");
	}

	@Override 
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		/*
		try 
		{
			System.out.println("@@@@ Starting Code...");
			
			// To add Admin Details in db..
			User user = new User();
			user.setUsername("sumitgole");
			//set password through bcrypt pswd encoder..
			user.setPassword(this.bCryptPasswordEncoder.encode("sumit"));
			//user.setPassword("sumit");
			user.setFirstname("SUMIT");
			user.setLastname("GOLE");
			user.setEmail("sumitgole@gmail.com");
			user.setPhone("9730977849");
			user.setProfile("default.png");
			
			Role role1 = new Role();
			role1.setRoleId(1L);
			role1.setRoleName("ADMIN");
			
			Set<UserRole> userRoleSet = new HashSet<>();
			UserRole userRole = new UserRole();
			userRole.setRole(role1);
			userRole.setUser(user);
			
			userRoleSet.add(userRole);
			
			User user1 = this.userService.createUser(user, userRoleSet);
			System.out.println(user1.getUsername());
		}
		catch (UserFoundException e) {
			e.printStackTrace();
		}
		*/
		/*
		try 
		{
			System.out.println("@@@@ Starting Code...");
			
			// To add Admin Details in db..
			User user = new User();
			
			//set password through bcrypt pswd encoder..
			user.setPassword(this.bCryptPasswordEncoder.encode("sumit"));
			//user.setPassword("sumit");
			//user.setCustomerId("CID1");
			user.setName("sumit gole");
			user.setAccno(1234);
			user.setAddress("pune");
			user.setUsername("sumitgole@gmail.com");
			user.setEmail("sumitgole@gmail.com");
			user.setPhone(9730977849L);
			//set password through bcrypt pswd encoder..
			user.setPassword(this.bCryptPasswordEncoder.encode("sumit"));
			
			user.setProfile("default.png");
			
			Role role1 = new Role();
			role1.setRoleId(1L);
			role1.setRoleName("ADMIN");
			
			Set<UserRole> userRoleSet = new HashSet<>();
			UserRole userRole = new UserRole();
			userRole.setRole(role1);
			userRole.setUser(user);
			
			userRoleSet.add(userRole);
			
			User user1 = this.userService.createUser(user, userRoleSet);
			System.out.println(user1.getUsername());
		}
		catch (UserFoundException e) {
			e.printStackTrace();
		}
		*/
				
	}
}