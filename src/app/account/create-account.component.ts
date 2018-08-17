import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../shared/models/useraccount';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {


  userAccount: UserAccount = {
    email: '',
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    dateofbirth: new Date()
  }

  constructor() { }

  ngOnInit() {
  }

}
