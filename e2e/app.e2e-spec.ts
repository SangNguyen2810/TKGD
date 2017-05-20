import { ParadisePage } from './app.po';

describe('paradise App', () => {
  let page: ParadisePage;

  beforeEach(() => {
    page = new ParadisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
