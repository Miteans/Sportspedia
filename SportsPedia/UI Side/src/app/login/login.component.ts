import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {email: '', password: '', remember: false};

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('User: ', this.user);
    this.dialogRef.close();
  }
  openSignupForm() {
    this.dialog.open(SignupComponent, {width: '400px', height: '450px'});
    this.dialogRef.close();
  }

}

