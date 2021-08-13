import { BaseComponent } from './../../component.js';

export class MediaSectionInput extends BaseComponent<HTMLElement> {
    constructor() {
        super(`<form class="form__container">
                <div class="form__item"><label class="form__label" for="title">Title</label>
                <input id="title" type="text"></div>
                <div class="form__item"><label class="form__label" for="url">URL</label>
                <input id="url" type="text"></div>
            </form>`);
    }
    get title(): string {
        const title = this.element.querySelector('#title')! as HTMLInputElement;
        return title.value;
    } 
    get url(): string {
        const url = this.element.querySelector('#url')! as HTMLInputElement;
        return url.value;
    }


}