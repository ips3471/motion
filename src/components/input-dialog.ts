import { BaseComponent, Component } from './component.js';
import { Composable } from './page/page.js';


type OnCloseListener = () => void;
type OnSubmitListener = () => void;
export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
    private closeListener?: OnCloseListener;
    private submitListener?: OnSubmitListener;
    constructor() {
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