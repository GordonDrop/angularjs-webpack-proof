import template from './clickable-btn.template.html';

/* @ngInject */
function clickableBtn($timeout) {
  return {
    restrict: 'E',
    template,
    scope: {
      message: '=',
    },
    link: $scope => {
      $scope.cnt = 0;
      $scope.cntMessage = 'Not clicked.';

      function debounceClick(delay) {
        let timerPromise = null;

        return function() {
          const onComplete = () => {
            $scope.cntMessage = `Clicked ${$scope.cnt} times`;
            $scope.cnt = 0;
            timerPromise = null;
          };

          if (timerPromise) {
            $timeout.cancel(timerPromise);
          }

          $scope.cnt++;
          timerPromise = $timeout(onComplete, delay);
        };
      }

      $scope.click = debounceClick(400);
    },
  };
}

export default ['clickableBtn', clickableBtn];
