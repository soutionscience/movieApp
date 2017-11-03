export class AuthController {
  constructor ($auth) {
    'ngInject';


 
  this.$auth = $auth;

  }
  register(){
  	this.$auth.signup({'username': this.user.email, 'pwd': this.user.pwd})
  	console.log(this.user.email)
  }
}