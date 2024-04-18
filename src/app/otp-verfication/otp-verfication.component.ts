import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-verfication',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './otp-verfication.component.html',
  styleUrl: './otp-verfication.component.css'
})
export class OtpVerficationComponent {

  otp:string=''
  verificationLogic:string=''
  private http = inject(HttpClient)

  constructor(){
    this.veryfyOTP()
  }
  veryfyOTP(){
    const otpData = {otp: this.otp};
    this.http.post('http://localhost:3000/verify-otp',otpData)
    .subscribe((res:any)=>{
      if(res.success){
        this.verificationLogic = 'OTP verified successfully!'
      }
      else{
        this.verificationLogic = 'OTP verification failed!'
      }
      this.verificationLogic = 'OTP verfied successfully!'
    },(error:any)=>{
      this.verificationLogic ='An Error occured : ';
      console.log('OTP Error : ',error)
    }
  )
  }
}
