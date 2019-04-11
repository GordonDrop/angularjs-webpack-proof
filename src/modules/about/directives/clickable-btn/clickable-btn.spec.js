import '../../index';

describe('Should test button', function() {
  let _$el;

  // Load module, which contains the directive
  beforeEach(() => {
    angular.mock.module('app.about');

    inject(($compile, $rootScope) => {
      _$el = $compile('<clickable-btn></clickable-btn>')($rootScope);
      $rootScope.$digest();
    });
  });

  it('Correctly rendered', () => {
    const actualMessageContent = _$el.html();
    expect(actualMessageContent).toContain('Not clicked.');
    expect(actualMessageContent).toContain('Click me fast.');
  });
});
