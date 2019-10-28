import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';
import { Observable, throwError} from 'rxjs';
import { retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  //Define API
  apiURL = 'https://randomuser.me/api/';

  constructor( private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':'application/json'
    })
  };

    // HttpClient API get() method => Fetch employees list
  getUsers() {
    return this.http.get<any[]>(this.apiURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
  
}
