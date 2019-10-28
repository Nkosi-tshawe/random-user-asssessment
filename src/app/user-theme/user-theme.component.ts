import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-user-theme',
  templateUrl: './user-theme.component.html',
  styleUrls: ['./user-theme.component.scss']
})
export class UserThemeComponent implements OnInit {
  userData: any;
  title: string;
  subtitle: string;
  name: string;
  userpicture: string;
  email: string;
  dob: string;
  address: string;
  contact: string;
  password: string;
  displayVal = 1;


  constructor( private restServiceApi: RestApiService) { }

  ngOnInit() {
    this.restServiceApi.getUsers()
    .subscribe(
      userData => {
        this.userData = userData;
        console.log(this.userData.results[0]);
        this.name = this.userData.results[0].name.first + ' ' + this.userData.results[0].name.last;
        this.userpicture = this.userData.results[0].picture.large;
        this.email = this.userData.results[0].email;
        this.dob = this.userData.results[0].dob.date;
        this.address = this.userData.results[0].location;
        this.contact = this.userData.results[0].phone;
        this.password = this.userData.results[0].login.password;

        this.title = 'Hi, My name is';
        this.subtitle = this.name;
      }
    );
    
  }

  updateDetails(value) {

    switch (value) {
      case'name':
        this.title = 'Hi, My name is';
        this.subtitle = this.name;
        console.log("Hover");
        break;
      case 'email':
        this.title = 'emaill address';
        this.subtitle = this.email;
        console.log("Hover");
        break;
      case 'dob':
        this.title = 'Data of Birth';
        this.subtitle = this.dob;
        console.log("Hover");
        break;
      case 'password':
        this.title = 'Password';
        this.subtitle = this.password;
        console.log("Hover");
        break;
      case 'address':
        this.title = 'Address';
        this.subtitle = this.address;
        console.log("Hover");
        break;
      case 'contact':
        this.title = 'Phone number';
        this.subtitle = this.contact;
        console.log("Hover");
        break;
      default:
          this.title = 'Hi, My name is';
          this.subtitle = this.name;
          console.log("Hover");
          break;

    }
  }

}
