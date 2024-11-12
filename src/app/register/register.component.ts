import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { AuthService } from '../_services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  formdata ={name:"",email:"", password:""};
  submit=false;
  errorMessage=''
  loading=false;

  constructor(private auth:AuthService){}

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

  onSubmit(){
    console.log(this.formdata);
    this.loading=true;

    this.auth
      .register(this.formdata.name,this.formdata.email,this.formdata.password)
      .subscribe({
          next:data=>{
              //store token from response data
              this.auth.storeToken(data.idToken);
              console.log('Registered idtoken is '+data.idToken);
              this.auth.canAuthenticate();
          },
          error:data=>{
              if (data.error.error.message=="INVALID_EMAIL") {

                  this.errorMessage = "Invalid Email!";

              } else if (data.error.error.message=="EMAIL_EXISTS") {

                  this.errorMessage = "Already Email Exists!";

              }else{

                  this.errorMessage = "Unknown error occured when creating this account!";
              }
          }
      }).add(()=>{
          this.loading =false;
          console.log('Register process completed!');
      })
    
  }
}
