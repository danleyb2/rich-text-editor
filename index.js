import { LitElement,css, html } from 'lit-element';
import {init} from './src/pell';

class RichTextEditor extends LitElement {
  static get properties() {
    return { value: { type: String } };
  }

  constructor() {
    super();
    this.value = '';
  }

    static get styles() {
        return css`
      .pell {
    border: 1px solid rgba(10, 10, 10, 0.1);
    box-sizing: border-box; }

.pell-content {
    box-sizing: border-box;
    height: 300px;
    outline: 0;
    overflow-y: auto;
    padding: 10px; }

.pell-actionbar {
    background-color: #FFF;
    border-bottom: 1px solid rgba(10, 10, 10, 0.1); }

.pell-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 30px;
    outline: 0;
    width: 30px;
    vertical-align: bottom; }

.pell-button-selected {
    background-color: #F0F0F0; }

    `;
    }


  render() {
    return html`
        <div id="pell"></div>
`;
  }

    firstUpdated() {
        const self = this;
        // Initialize pell on an HTMLElement
        init({
            // <HTMLElement>, required
            element: this.shadowRoot.getElementById('pell'),

            // <Function>, required
            // Use the output html, triggered by element's `oninput` event
            onChange: html => self.value = html,

            // <string>, optional, default = 'div'
            // Instructs the editor which element to inject via the return key
            defaultParagraphSeparator: 'div',

            // <boolean>, optional, default = false
            // Outputs <span style="font-weight: bold;"></span> instead of <b></b>
            styleWithCSS: false,


            // classes<Array[string]> (optional)
            // Choose your custom class names
            classes: {
                actionbar: 'pell-actionbar',
                button: 'pell-button',
                content: 'pell-content',
                selected: 'pell-button-selected',
            },
        });
    }

}

customElements.define('rich-text-editor', RichTextEditor);
