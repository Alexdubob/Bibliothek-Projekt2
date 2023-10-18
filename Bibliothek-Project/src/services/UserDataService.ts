import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private readonly storageKey = "";

  setUserData(data: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));  }

  getUserData() {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : null;
  }

  clearUserData(){
    localStorage.removeItem(this.storageKey)
  
  }
}
