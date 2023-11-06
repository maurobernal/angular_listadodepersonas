import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  token: string | any;

  constructor(private router: Router) {}
  login(email: string, passsword: string) {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, passsword)
      .then((userCredential) => {
        const user = userCredential.user;
        user.getIdToken().then((token) => {
          this.token = token;
          console.log('token', this.token);
          this.router.navigate(['/']);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error', error);
        this.router.navigate(['/']);
      });
  }
  getIdToken() {
    return this.token;
  }
  isAutenticado() {
    return this.token != null;
  }
  logout() {
    const auth = getAuth();
    auth.signOut().then(() => {
      this.token = null;
      console.log('Sesion cerrada');
      this.router.navigate(['/']);
    });
  }
}
