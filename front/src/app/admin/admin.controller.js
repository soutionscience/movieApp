export class AdminController {
  constructor($http) {
    'ngInject';
    this.http = $http
  }
  upload() {

    this.http.post('http://localhost:8000/api/movies', {
      'title': this.title,
      'url': this.filetoupload,
      'description': this.description,
      'ratings': this.ratings
    })
    console.log("here is: " + this.title + " " + this.ratings + " " + this.filetoupload)
  }

}
