import './style.css'
import { setupCounter } from './counter.js'
import Quill from 'quill';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'
import i18next from 'i18next';

function init() {
    i18next.init({
        lng: 'en', // if you're using a language detector, do not define the lng option
        debug: true,
        resources: {
          en: {
            translation: {
              "Title": "Title",
              "Author": "author",
              "TextPlaceholder": "Text..."
            }
          }
        }
      });
}

function setupQuill(element) {
    const quill = new Quill(
        element,
        {
            debug: 'info',
            theme: 'bubble',
            placeholder: i18next.t("TextPlaceholder"),
        }
    );
    return quill
}
  
init()
document.querySelector('#app').innerHTML = `
<div>
    <div class="article-header">
        <div class="article-header-title">
            <input type="text" id="title" placeholder="${i18next.t("Title")}">
        </div>
        <div class="article-header-author">
            <input type="text" id="author" placeholder="${i18next.t("Author")}">
        </div>
    </div> 
</div>
<div id="editor"></div>
</div>
`
const editor = setupQuill(document.querySelector('#editor'));