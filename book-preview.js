class BookPreview extends HTMLElement {
  constructor() {
    super();

    // Create a shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });

    // Define a template for the book preview
    this.shadowRoot.innerHTML = `
      <style>
        /* Add your CSS styles for the book preview here */
      </style>
      <button class="preview" data-preview></button>
    `;
  }

  connectedCallback() {
    // Get the book data from attributes
    const author = this.getAttribute('author');
    const id = this.getAttribute('id');
    const image = this.getAttribute('image');
    const title = this.getAttribute('title');

    // Create the content of the book preview
    this.shadowRoot.querySelector('.preview').innerHTML = `
      <img class="preview__image" src="${image}" />
      <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${author}</div>
      </div>
    `;
  }
}

// Define the custom element
customElements.define('book-preview', BookPreview);
