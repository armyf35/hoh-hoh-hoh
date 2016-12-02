angular.module('hoh.wishlist', [])

.controller('WishlistController', function ($scope, Wishlist) {
  $scope.data = {};

  $scope.add = function() {
    Wishlist.addList($scope.wishlistName)
      .then(function (lists) {
        $scope.data.lists = lists;
      });
  };

  $scope.show = function() {
    // TODO: MAKE A GET REQUEST TO BACKEND
  }
});
