package com.loanapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loanapp.model.Loan;
import com.loanapp.model.PaymentSchedule;
import com.loanapp.service.LoanManagementService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/token")
public class LoanManagementController {
	@Autowired
	LoanManagementService loanManagementService;
	
	/*@RequestMapping("/hello")
	private String helloWorld()
	{
		return "Hello World..";
	}*/
	
	
	@GetMapping("/loans/{customerId}")
	private List<Loan> getLoans(@PathVariable("customerId") String customerId) {
		return loanManagementService.getLoansByCustomerId(customerId);
	}

	
	@GetMapping("/loan/payment-schedule/{loanId}")
	private List<PaymentSchedule> getPaymentSchedule(@PathVariable("loanId") String loanId) {
		return loanManagementService.getPaymentScheduleByLoanId(loanId);
	}
	
	//For Sort the Payment_Schedule by Paymment_Date..
	/*@GetMapping("/loan/payment-schedule/{loanId}")
	public ResponseEntity<List<PaymentSchedule>> getPaymentScheduleDate(@PathVariable String loanId){
		return new ResponseEntity<>(loanManagementService.getPaymentSchedule(loanId), HttpStatus.OK);
	}*/

	@PutMapping("/update-payment/{paymentId}")
	private PaymentSchedule updatePaymentStatus(@PathVariable("paymentId") String paymentId) {
		return loanManagementService.updatePaymentStatus(paymentId);
	}

	
	@PostMapping("/loan")
	private Loan saveLoan(@RequestBody Loan loan) {
		return loanManagementService.saveLoan(loan);
	}

	@PutMapping("/update-loanstatus/{loanId}")
	private Loan approvedLoan(@PathVariable("loanId") String LoanId) {
		return loanManagementService.approvedLoan(LoanId);
	}
	
}