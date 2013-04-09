'use strict';

describe('Page1Ctrl', function(){
  var scope = {};
  var myCtrl1;

  beforeEach(function(){
    myCtrl1 = new Page1Ctrl(scope);
  });


  it('should have page a attribute with text Page 1', function() {
    expect(scope.page).toBe('Page 1')
  });
});


describe('Page2Ctrl', function(){
  var myCtrl2;
  var scope = {};

  beforeEach(function(){
    myCtrl2 = new Page2Ctrl(scope);
  });


  it('should have a page attribute with text Page 2', function() {
    expect(scope.page).toBe('Page 2')
  });
});
