package com.loanapp.repo;

import java.util.List; 
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import com.loanapp.model.PaymentSchedule;

@EnableJpaRepositories 
public interface PaymentScheduleRepository extends CrudRepository<PaymentSchedule, String> 
{	
	
	List<PaymentSchedule> findByLoanId(String loanId);
	
	/*//For Sort the Payment_Schedule by Paymment_Date..
	@Query(value="SELECT * from payment_schedule p where p.loan_id = 'LOAN176b5f27' ORDER BY payment_date ASC", nativeQuery = true)
	public List<PaymentSchedule> sortPaymentScheduleByDate(String loan_id); */

}
