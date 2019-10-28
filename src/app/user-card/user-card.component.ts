import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  userData: any;

  constructor( private restServiceApi: RestApiService) { }

  ngOnInit() {
    this.restServiceApi.getUsers()
    .subscribe(
      userData => {
        this.userData = userData;
        console.log(this.userData);
      }
    );
  }

}
