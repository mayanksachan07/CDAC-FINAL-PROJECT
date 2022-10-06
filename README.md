# CDAC-STUDENT-PORTAL
## CDAC Final Major Project <br />

This is a complete open-source Spring-Boot web based application which can be easily downloaded and deployed using STS tool. 

## Technologies Involved: <br />
* HTML5, CSS3, BootStrap 5
* JS, JQuery
* Spring Security (Bearer Token Authorization)
* Password Encryption at DB side using BCrypt PasswordEncoder
* Spring MVC, JAVA 11, Spring Boot
* Spring JPA, JPQL, MySQL

## Screens:
### Login Page
![LoginPage](https://github.com/CDAC-PGDAC-2203/CDAC-FINAL-PROJECT/blob/main/Documentation/screenshots/login.jpeg)

### Registration Page
![Registration](https://github.com/CDAC-PGDAC-2203/CDAC-FINAL-PROJECT/blob/main/Documentation/screenshots/registration1.jpeg)

### Registration Success
![RegistrationSuccess](https://github.com/CDAC-PGDAC-2203/CDAC-FINAL-PROJECT/blob/main/Documentation/screenshots/success.png)

### Admin Dashboard
![AdminDashboard](https://github.com/CDAC-PGDAC-2203/CDAC-FINAL-PROJECT/blob/main/Documentation/screenshots/adminDashboard1.png)

### Student Dashboard
![StudentDashboard](https://github.com/CDAC-PGDAC-2203/CDAC-FINAL-PROJECT/blob/main/Documentation/screenshots/dashboardStudent1.png)

### My Profile
![MyProfile](https://github.com/hardikagarwal1703/CDAC-FINAL-PROJECT/blob/main/Documentation/screenshots/Screenshot%20(1).png)

### Exam Screen
![Exam](https://github.com/CDAC-PGDAC-2203/CDAC-FINAL-PROJECT/blob/main/Documentation/screenshots/Exampage.png)

### Result Screen
![Result](https://github.com/CDAC-PGDAC-2203/CDAC-FINAL-PROJECT/blob/main/Documentation/screenshots/ResultPage.png)

### Feedback Screen
![Feedback](https://github.com/CDAC-PGDAC-2203/CDAC-FINAL-PROJECT/blob/main/Documentation/screenshots/feedback.png)

## Steps to Deploy
1. Download Zip from Github
2. Create db using create database cdac_app_final;
3. Change your login-id password of MySQL Db in application.properties.
4. Add your gmail id and gmail application password in application.properties from where you want to send emails. (Refer: https://www.geeksforgeeks.org/spring-boot-sending-email-via-smtp/)
5. Run Create Script (src/main/db/Create Script) & Insert Script(src/main/db/Insert Script)
6. Register users using registration page.
7. Once all students are registered login to admin dashboard using login credentials UserName: 11111 & Password: 11111
8. Click on generate PRN to generate login id password of all students of perticular course.


## Use-Case Diagram
![UseCase](https://github.com/hardikagarwal1703/CDAC-FINAL-PROJECT/blob/main/Documentation/UseCaseDiagram.jpg)

## ER Diagram
![ERDiagram](https://github.com/hardikagarwal1703/CDAC-FINAL-PROJECT/blob/main/ER%20Diagram.jpg)


#### For any queries please mail at mayanksachan0703@gmail.com
#### Note: Refer to documentation files for better understanding.
