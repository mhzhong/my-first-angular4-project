import { MyFirstAngular4ProjectPage } from './app.po';

describe('my-first-angular4-project App', () => {
  let page: MyFirstAngular4ProjectPage;

  beforeEach(() => {
    page = new MyFirstAngular4ProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
