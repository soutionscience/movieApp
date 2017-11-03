export class MainController {
  constructor($http) {
    'ngInject';

    this.http = $http
    this.getMovies();

  }


  getMovies() {
    var vm = this;
    this.http.get('http://localhost:5000/api/movies')
      .then(function(result) {
        vm.movies = result.data



      })
  }

}
