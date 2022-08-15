import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/social'])
    localStorage.setItem('isLoggedIn','true')
  }
}
