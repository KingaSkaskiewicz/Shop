import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  private dataKey;
  private adminDataKey;
  userProfile;
  adminData;
  errorMessageEmail;
  errorMessagePassword;

  constructor() {

    this.dataKey = 'userProfile';
    this.adminDataKey = 'adminData'

    var userProfileInMemory = localStorage.getItem(this.dataKey);
    if (typeof userProfileInMemory !== 'undefined' && userProfileInMemory != null) {
      this.userProfile = JSON.parse(userProfileInMemory);
    }
    else {
      this.userProfile = {
        isNewsletterSigned: false,
        email: '',
        isAutheniticated: false,
      };
    }

    var adminDataInMemory = localStorage.getItem(this.adminDataKey);
    if (typeof adminDataInMemory !== 'undefined' && adminDataInMemory != null) {
      this.adminData = JSON.parse(adminDataInMemory);
    }
    else {
      this.adminData = {
        newsletterEmails: [],
      }
    }
  }

  subscribeToNewsletter = function (email) {
    this.userProfile.isNewsletterSigned = true;
    this.userProfile.email = email;
    this.adminData.newsletterEmails.push(email);

    localStorage.setItem(this.dataKey, JSON.stringify(this.userProfile));
    localStorage.setItem(this.adminDataKey, JSON.stringify(this.adminData));
  }

  unsubscribeFromNewsletter = function () {
    this.userProfile.isNewsletterSigned = false;

    this.adminData.newsletterEmails = this.adminData.newsletterEmails.filter(function (email) {
      return email !== this.userProfile.email;
    }, this);

    localStorage.setItem(this.dataKey, JSON.stringify(this.userProfile));
  }



  onLoginButtonClick = function (email, password) {
    this.errorMessageEmail = false;
    this.errorMessagePassword = false;

    if (email !== "admin@homesweethome.com") {
      this.errorMessageEmail = true;
      return;
    }

    if (password !== "admin") {
      this.errorMessagePassword = true;
      return;
    }

    this.userProfile.isAutheniticated = true;
    localStorage.setItem(this.dataKey, JSON.stringify(this.userProfile));
  }

  logout = function () {
    this.userProfile.isAutheniticated = false;
    localStorage.setItem(this.dataKey, JSON.stringify(this.userProfile));
  }
}
