import {App} from '../../src/app';
import {Home} from '../../src/home';

var app: App;
var home: Home;

beforeAll(() => {
  app = new App(undefined);
  home = new Home();
});

describe('the app', () => {
  it('should have the title "Memory Practice"', () => {
    expect(app.title).toBe('Memory Practice');
  });
});

describe('home', () => {
  it('should have a title with value "Home"', () => {
    expect(home.title).toBe('Home');
  });

  describe('getNumber()', () => {
    it('should return a number between min=3 and max=20', () => {
      // hard to test a random number generator properly
      let min = 3;
      let max = 20;
      let number = home.getNumberInRange(min, max);

      console.log('number was', number);

      expect(number).toBeGreaterThanOrEqual(min);
      expect(number).toBeLessThanOrEqual(max);
    });
  });
})
