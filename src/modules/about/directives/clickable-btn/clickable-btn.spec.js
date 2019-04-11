import '../../index';

describe('Should test button', function() {
  let _$el;

  // Load module, which contains the directive
  beforeEach(() => {
    angular.mock.module('app.about');

    inject(($compile, $rootScope) => {
      _$el = $compile('<clickable-btn messsage="\'testMessage\'"></clickable-btn>')($rootScope);
      $rootScope.$digest();
      $rootScope.$digest();
    });
  });

  it('Correctly rendered', () => {
    const actualMessageContent = _$el.html();
    expect(actualMessageContent).toContain('Click me fast.');
    expect(actualMessageContent).toContain('Not clicked.');
  });
});
