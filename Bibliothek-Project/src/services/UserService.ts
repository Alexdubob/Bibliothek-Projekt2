import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userApiUrl = 'https://localhost:7042';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userApiUrl);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.userApiUrl}/api/Users/${id}`);
  }

  getUserByUsername(username: string): Observable<User>{
    const url = `${this.userApiUrl}/api/Users/Username/${username}`;
    return this.http.get<User>(url)
  }

  createUser(newUser: User): Observable<User> {
    return this.http.post<User>(`${this.userApiUrl}/api/Users`, newUser);
  }

  updateUser(id: string, updateUser: User): Observable<any> {
    return this.http.put(`${this.userApiUrl}/api/Users/${id}`, updateUser);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.userApiUrl}/${id}`);
  }

  verifyUser(username:string, password:string): Observable<User>{
    return this.http.post<User>(`${this.userApiUrl}/api/Users/login`,{username , password});
  }

  checkUserName(username: string): Observable<boolean>{
    const url = `${this.userApiUrl}/api/Users/checkUsername/${username}`;
    return this.http.get<boolean>(url)
  }




}
