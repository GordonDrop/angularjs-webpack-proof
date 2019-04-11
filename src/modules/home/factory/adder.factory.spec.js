import '../index';

describe('AdderFactory', function() {
  beforeEach(angular.mock.module('app.home'));

  let _AdderFactory;

  beforeEach(inject(AdderFactory => {
    _AdderFactory = AdderFactory;
  }));

  it('1 + 1 should equal 2', function() {
    const actual = _AdderFactory.add(1, 1);
    expect(actual).toEqual(2);
  });

  it('10 + 5 should equal 15', function() {
    const actual = _AdderFactory.add(10, 5);
    expect(actual).toEqual(15);
  });
});
