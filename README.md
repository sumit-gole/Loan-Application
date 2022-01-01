# PROBLEM STATEMENT 

## Loan Fullstack Assignment Using Angular & Spring Boot
In this project I have created a Loan App which contains a features of Create a loan and generate payment schedule for all loans.

## Hosted Using Firebase

I have deployed this project with the help of Firebase, you can see [live-demo](https://loan-app1.web.app/) of project by visiting on below link: 

Host Link - [https://loan-app1.web.app](https://loan-app1.web.app)
 
## Instructions :

#### Deliverable should be ready to work including :

- Workable deployment including sample input/output[Execution guide].

- Proper error/exception handling.

- Avoid hard-coding as much as possible by using command line arguments / config file.

- Proper Logging.

- It is preferred to submit assignment using GitHub repository.


#### Develop a loan application which is built using Angular(latest version) and spring, spring boot as back-end technology stack. 


## High Level Requirements :
```
  1. Create a new loan for customer

  2. Generate payment schedule as soon as the loan is created

  3. Display all loans for a customer

  4. Display payment schedule of a loan
```
  
## Detailed Requirements : 
 
#### 1.   To create a new loan below details are required :
```
 1. CustomerId
 
 2. LoanAmount
 
 3. TradeDate
 
 4. LoanStartDate
 
 5. Maturity Date
 
 6. Payment frequency
 
 7. Interest Rate
```
#### 2.   Field Details : 
```
  1. Trade Date: When loan is approved and entry is created.
  
  2. Start Date: When the interest starts. It can be same as Trade Date also. i.e. Loan is approved today and interest start after 10 days.
  
  3. Payment Frequency(When EMI need to be paid):Monthly, Quarterly,Half Yearly, Yearly.
  
  4. Payment schedule: Based on payment frequency, payment schedule is created, i.e. If loan is for 12 months and payment frequency is 2 months then total payment schedules are 12/2 = 6 . In 6 payments he will be repaying complete loan.
  
  5. Maturity Date: When the complete loan need to be pay off completely.
  
  6. Payment Term : how the loan is repaid. Two options below.
  
  7. Interest Only : Only interest is to be paid at every payment frequency and complete principal is paid off at maturity date.
  
  8. Even Principal : If there are total N payment schedule then on every payment schedule a part of principal ( P/N ) + interest is repaid.
  
  9. Projected interest : This need to be calculate as interest for remaining principal amount for that period. i.e. if Payment term is "Even Principal" Principal : 10000 &  Payment schedule :5 then for first schedule remaining principal is 10000, for second (10000 - 10000/5) for third (10000 - 10000/5 - 10000/5).
```
#### 3.   Each Payment schedule should have : 
```
   1. Payment date
   
   2. Principal (If even principal otherwise 0)
   
   3. Projected interest 
   
   4. Payment status: (PROJECTED, AWAITINGPAYMENT, PAID). By default PROJECTED. On the payment date it should be updated to AWAITINGPAYMENT and after payment is made PAID
   
   5. Payment Amount: When status changes to AWAITINGPAYMENT , populate this with Principal + Interest
```

### Database:  MySQL or your choice of database.
  

<br>
<hr>
	<h3 align = "center" >--THANK YOU--</h3>
<hr>
