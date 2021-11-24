package com.loanapp.helper;

public class UserFoundException extends Exception {

	public UserFoundException() {
		super("User with this Username is already present in DB !! Try with another Username..");
	}
	
	public UserFoundException(String msg) {
		super(msg);
	}
}
