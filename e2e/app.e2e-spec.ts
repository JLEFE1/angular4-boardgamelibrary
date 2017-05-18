import { BoardgameLibraryFrontendPage } from './app.po';

describe('boardgame-library-frontend App', () => {
  let page: BoardgameLibraryFrontendPage;

  beforeEach(() => {
    page = new BoardgameLibraryFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
