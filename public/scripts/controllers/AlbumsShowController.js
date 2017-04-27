angular
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController);

AlbumsShowController.$inject = ['$http', '$routeParams'];

function AlbumsShowController ($http, $routeParams) {
  var vm = this;
  vm.newSong = {};
  console.log('route params', $routeParams);
  $http({
    method: 'GET',
    url: '/api/albums/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.album = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  // delete song function
  vm.deleteSong = function (song) {

    $http({
      method: 'DELETE',
      url: '/api/albums/'+ $routeParams.id + '/songs/' + song._id
    }).then(function successCallback(json) {
      var index = vm.album.songs.indexOf(song);
      vm.album.songs.splice(index,1)
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

}
