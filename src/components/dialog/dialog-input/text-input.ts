import { BaseComponent } from './../../component.js';

export class TextSectionInput extends BaseComponent<HTMLElement> {
    constructor() {
        super(`<form class="form__container">
                <label for="title">title</label>
                <input id="title" type="text">
                <label for="body"body</label>
                <textarea row="3" id="body" type="text">
            </form>`);
    }
    get title(): string {
        const title = this.element.querySelector('#title')! as HTMLInputElement;
        return title.value;
    } 
    get body(): string {
        const body = this.element.querySelector('#body')! as HTMLInputElement;
        return body.value;
    }
}