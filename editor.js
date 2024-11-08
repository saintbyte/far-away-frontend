import './style.css'
import { setupCounter } from './counter.js'
import Quill from 'quill';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'

function setupQuill(element) {
    const quill = new Quill(
        element,
        {
            debug: 'info',
            theme: 'bubble',
            placeholder: 'Text...',
        }
    );
    return quill
}
  

document.querySelector('#app').innerHTML = `
  <div>
    <div id="editor"></div>
    <p class="read-the-docs" >
      Click on the Vite logo to learn more
    </p>
    <p id="counter"></p>
  </div>

`

const editor = setupQuill(document.querySelector('#editor'))
setupCounter(document.querySelector('#counter'))