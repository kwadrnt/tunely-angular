/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */
angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);

// injected $http to AlbumsIndexController
AlbumsIndexController.$inject = ['$http'];
function AlbumsIndexController ($http) {
  var vm = this;
  vm.newAlbum = {};

  $http({
    method: 'GET',
    url: '/api/albums'
  }).then(function successCallback(response) {
    vm.albums = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
