import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  myGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  showPassword = false;
  incorrectData = false;
  error: any;

  ngOnInit(): void {
  }

  onSubmit() {
    const { value } = this.myGroup;
    this.authService.logIn().subscribe(
        res => {
          if (res.username == value.username && res.password == value.password) {
            localStorage.setItem('currentUser', 'true');
            this.router.navigate(['/profile']);
          }
          else { this.incorrectData = true; }
        },
        err => {
          this.error = err.message;
          alert(err);
        }
      );
  }

  showHiddenPassword() {
    this.showPassword = !this.showPassword;
  }
}
