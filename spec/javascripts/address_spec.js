describe('CarLotApp.Address', function(){
  var address;
  beforeEach(function(){
    address = new CarLotApp.Address('12 Main St', 'Boston', 'MA', 'US');
  });     
  it("should create an address", function(){
    var address = new CarLotApp.Address('12 Main St', 'Boston', 'MA', 'US');
    expect(address).not.toBe(null);
  });

  it("should create an address with a city", function(){
    expect(address.city).toMatch(/ost/);
  });

  it("should display an address", function(){
    expect(address.display()).toMatch(/.* Main.*Boston MA in.*US/);
  });

});