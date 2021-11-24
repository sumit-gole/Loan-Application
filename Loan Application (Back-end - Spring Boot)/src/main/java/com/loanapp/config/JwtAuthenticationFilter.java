package com.loanapp.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.loanapp.service.impl.UserDetailsServiceImpl;

import io.jsonwebtoken.ExpiredJwtException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	
	@Autowired
	private JwtUtils jwtUtil;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		final String requestTokenHeader = request.getHeader("Authorization");
		System.out.println(requestTokenHeader);
		String username=null;
		String jwtToken=null;
		
		if(requestTokenHeader != null && requestTokenHeader.startsWith("Bearer "))
		{
			// yes token valid
			jwtToken = requestTokenHeader.substring(7);
			
			try {
				username = this.jwtUtil.extractUsername(jwtToken);
			}
			catch (ExpiredJwtException e) {
				e.printStackTrace();
				System.out.println("JWT Token Has Expired!!");
			}
			catch (Exception e) {
				e.printStackTrace();
				System.out.println("Error Occured!!");
			}
		}
		else 
		{
			System.out.println("Invalid Token, Not start with bearer string");
		}
		
		//validated the token
		if(username != null && SecurityContextHolder.getContext().getAuthentication() == null)
		{
			final UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
			if(this.jwtUtil.validateToken(jwtToken, userDetails))
			{
				// token is valid
				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
				usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}
		}
		else
		{
			System.out.println("Token is not valid!!");
		}
		
		filterChain.doFilter(request, response);
	}
}
