import { Component, OnInit } from '@angular/core';
import { IDate } from 'src/app/models/date';

@Component({
  selector: 'ecomm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public remember: boolean;
  public date: IDate;

  constructor() { }

  ngOnInit() {
  }

  public setEmail($data: string): void {
    this.email = $data;
  }

  public setPassword($data: string): void {
    this.password = $data;
  }

  public setRemember($data: boolean): void {
    this.remember = $data;
  }

  public setDate($data: IDate): void {

    this.date = $data;
    console.log(this.date);
  }

  public loginSubmit(): void {
    console.log('login');
  }
}
