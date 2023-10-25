// View.js
import BookPreviewComponent from './bookPreviewComponent';

class View {
  constructor() {
    this.elements = {
      searchOverlay: document.querySelector('[data-search-overlay]'),
      searchTitle: document.querySelector('[data-search-title]'),
    };
  }

  // ...

  createPreviewButton(book) {
    const bookPreview = document.createElement('book-preview');
    bookPreview.setAttribute('data-preview', book.id);
    bookPreview.setAttribute('data-image', book.image);
    bookPreview.setAttribute('data-title', book.title);
    bookPreview.setAttribute('data-author', authors[book.author]);
    return bookPreview;
  }

  // ...
}

export default View;
