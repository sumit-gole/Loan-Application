package com.loanapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.loanapp.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
	
}
