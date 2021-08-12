import { BaseComponent, Component } from './component.js';
import { Composable } from './page/page.js';

export interface InputContainer extends Composable{
    setOnSubmitListener(listener: OnSubmitListener): void;
}
export class InputImageContainer extends BaseComponent<HTMLElement> implements InputContainer {
    private submitListener?: OnSubmitListener;
    constructor() {
        super(`<form class="form">
            <label for="input-title">title</label>
            <input id="input-title" type="text" class="input-title">
            <label for="input-url">url</label>
            <input id="input-url" type="text" class="input-url">
        </form>`);
        const form = this.element.querySelector('.form')! as HTMLFormElement;
        form.onsubmit = () => {
            this.submitListener && this.submitListener();
        }
    }
    setOnSubmitListener(listener: OnSubmitListener) {
        const title = this.element.querySelector('#input-title') as HTMLInputElement;
        const url = this.element.querySelector('#input-url') as HTMLInputElement;
        const titleValue = title.value;
        const urlValue = url.value;
        this.submitListener = listener;
    }

}
type InputContainerConstructor = {
    new(): InputContainer;
}
type OnCloseListener = () => void;
type OnSubmitListener = () => void;
export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
    private closeListener?: OnCloseListener;
    constructor(private inputItemConstructor: InputContainerConstructor) {
        super(`<section class="dialog">
                <div class="dialog-container">
                    <button class="dialog-close">&times;</button>
                    <div class="dialog-body"></div>
                    <button class="dialog-submit">ADD</button>
                </div>
            </section>`);

    const closeBtn = this.element.querySelector('.dialog-close')! as HTMLButtonElement;
    const submitBtn = this.element.querySelector('.dialog-submit')! as HTMLButtonElement;
    closeBtn.onclick = () => {
        this.closeListener && this.closeListener();
    }
    submitBtn.onclick = () => {
        this.submitListener && this.submitListener();
    }
}
addChild(form: Component) { 
    const item = new this.inputItemConstructor();
    const dialogContainer = this.element.querySelector('.dialog-body')! as HTMLElement;
    item.attachTo(this.element, 'beforeend');
}
setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
}

}