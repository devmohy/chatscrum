import { Component, OnInit } from '@angular/core';
import { Scrumuser } from '../scrumuser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userTypes = ['regular user', 'project owner'];

  scumUserModel = new Scrumuser('mohammed', '', '', 'regular user')

}
