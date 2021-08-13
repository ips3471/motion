import { BaseComponent, Component } from '../component.js';
import { Composable } from '../page/page.js';

export interface InputContainer extends Composable {
    setOnsubmitListener(listener: OnSubmitListener): void;
}

type OnCloseListener = () => void;
export type OnSubmitListener = () => void;
export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
    private closeListener?: OnCloseListener;
    private submitListener?: OnSubmitListener;
    constructor() {
        super(`<section class="dialog">
                <div class="dialog-container">
                    <div class="dialog-close"><button class="dialog-close-btn"><i class="fas fa-times"></i></button></div>
                    <div class="dialog-body"></div>
                    <div class="dialog-submit"><button class="dialog-submit-btn">ADD</button></div>
                </div>
            </section>`);

    const closeBtn = this.element.querySelector('.dialog-close-btn')! as HTMLButtonElement;
    const submitBtn = this.element.querySelector('.dialog-submit-btn')! as HTMLButtonElement;
    closeBtn.onclick = () => {
        this.closeListener && this.closeListener();
    }
    submitBtn.onclick = () => {
        this.submitListener && this.submitListener();
    }
}
addChild(item: Component) { 
    const dialogContainer = this.element.querySelector('.dialog-body')! as HTMLElement;
    item.attachTo(dialogContainer);
}
setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
}
setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
}
}