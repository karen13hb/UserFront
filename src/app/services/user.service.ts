import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../Models/Iuser';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ApiURL;

  constructor(private http: HttpClient) {
    this.ApiURL = environment.apiUrl;
   }

   getUsers(){
    return this.http.get<User[]>(`${this.ApiURL}/User`).pipe(
			retry(2)
		);
   }

    deleteUser(id: number) {
    return this.http.delete(`${this.ApiURL}/User/${id}`).pipe(
      retry(2)
    );
  }
}
