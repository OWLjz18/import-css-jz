<h1 align="center">import-css-jz</h1>

Creates a 'link' element with the path specified in the first parameter and connects it to the element specified in the second parameter (which defaults to document.body).

- - -

### 📝 Pre-Requirements ### 

All the pre-requisites mentioned here are not necessary, only the one you choose to install.

  * [git](https://git-scm.com/) To clone the repository using git.
  * [npm](https://npmjs.com) To install the package using npm.

- - - 

### 🔧 Instalation ### 

#### Git

``` sh
git clone 'https://github.com/OWLjz18/import-css-jz.git'
```

Or as a submodule:

``` sh
git submodule add 'https://github.com/OWLjz18/import-css-jz.git'
```

#### NPM

``` sh
npm install import-css-jz
```

- - - 

### 🔎 Use ### 

First of all, they need to import the module. Then you can save it with the name you like, I choose to do it under the name "importCSS".

Now suppose you have a file called code.js and a style sheet called magic.css and you want to import that style sheet into the DOM, we would do something like this:

``` javascript
// code.js
import importCSS from '/import-css-jz';

importCSS('./magic.css');
```

That would be the same as this, if you did it manually:

``` javascript
const styleSheet = document.createElement('link');
link.rel = 'stylesheet';
link.href = './magic.css';

document.head.append(styleSheet);
```

A case in which its use may seem interesting to you would be when creating web components in a vanilla way, since as we know, style sheets cannot reach the shadowDOM.

Let's see an example, it will be a bit long, but explanatory:

Let's first create the context, we have a file called "component.js" and one called "component.css". Now we will see both files and then we will explain what happens in both.

**_component.css:_**

``` css
.myCustomTitle {
  color: red;
}
```

**_component.js:_**

``` javascript
import importCSS from '/import-css-jz/src/index.js';

const MyComponent = class extends HTMLElement {
  
  constructor () {

    super();

    this.attachShadow({mode: 'open'});

  }
  
  _render () {
    
    this.shadowRoot.innerHTML = '<h1 class="myCustomTitle">Hello World?</h1>';
    
    importCSS('./component.css', this.shadowRoot);
    
  }
  
  connectedCallback () {
    
    this._render();
    
  }
  
  static get observedAttributes () {}

  attributeChangedCallback (name, oldValue, newValue) {}

};

customElements.define('my-component', MyComponent);
```

So what do we do here? Easy, let's explain in parts:

First we create a simple component with the text _"Hello World?"_ and add a **_myCustomTitle_** class to it, with which from CSS, we hope to give it a _red_ color.

The interesting thing here happens in the \_render method, where after specifying the content of the component, we execute **importCSS**, but this time, passing **_this.shadowRoot_** as the second parameter so that when the component is rendered , your style sheet is connected in _shadowDOM_ and not in _document.head_ as it is by default.

And with that, we would have our component saying "Hello World?" in color _red_, because... He read the style sheet!!

**_Note:_** import-css-jz is responsible for verifying that the style sheet you are about to import is not already in your document, if it is, import-css-jz does not add it, in order to avoid connecting the same style sheet.

- - -

### 🦉 Author ###

  * *__José Zambrano__* ([OWLjz18](https://github.com/OWLjz18)) => Project Creator.
    * Email => <owl.jz18@gmail.com>
    * Instagram => [@owljz18](https://instagram.com/owljz18)

- - -

### 📃 License ###

This project is licensed under an _MIT_ license, please visit the [LICENSE.md](./LICENSE.md) file for more information about it.
