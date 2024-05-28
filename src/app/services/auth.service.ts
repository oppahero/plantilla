import { Injectable } from '@angular/core'
import { StorageService } from './storage.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService) {}

  public login(userInfo: any) {
    sessionStorage.setItem('UserOPENSIPCA', JSON.stringify(userInfo))
  }

  public isLoggedIn() {
    return sessionStorage.getItem('UserOPENSIPCA') !== null
  }

  public logout() {
    sessionStorage.removeItem('UserOPENSIPCA')
  }

  public getCurrentUser() {
    return sessionStorage.getItem('UserOPENSIPCA')
  }

  // SESSION STORAGE ENCRIPTADO

  setSessionStorage(key: string, value: any) {
    this.storageService.secureStorage.setItem(key, value)
  }

  getSessionStorage(key: string) {
    const user = this.storageService.secureStorage.getItem(key)
    user.username = user.username.toUpperCase()
    return user
  }

  userIsLoggedIn(key: string) {
    return this.storageService.secureStorage.getItem(key) !== null
  }

  clearToken() {
    return this.storageService.secureStorage.clear()
  }

  user() {
    return this.getSessionStorage('userOPENSIPCA')
  }
}
