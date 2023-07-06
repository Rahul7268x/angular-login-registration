import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  hideshowPass(){
    this.isText = !this.isText
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon =  "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
}


}
