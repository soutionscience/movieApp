export class AdminController {
  constructor ($http) {
    'ngInject';

   this.http= $http
 

  }
    upload(){

  	this.http.post('http://localhost:5000/api/movies',{'title': this.title
  		, 'url': this.filetoupload, 'description': this.description, 'ratings': this.ratings
  	})
  	console.log(this.title+ " "+ this.ratings+" "+ this.url)
  }

}