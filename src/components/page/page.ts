import { BaseComponent, Component } from '../component.js';

export interface Composable {
    addChild(child: Component): void;
}
type OnCloseListener = () => void;
class PageItemComponent extends BaseComponent<HTMLElement> implements Composable{
    private closeListener?: OnCloseListener;
    constructor() {
        super(`<li class="page-item">
        <section class="page-item-body"></section>
        <div class="page-item-controls">
        <button class="close">
        &times;
        </button>
        </div>
        </li>`);
    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
        this.closeListener && this.closeListener();
    }

    }
    addChild(listItem: Component){
        const listContainer = this.element.querySelector('.page-item-body')! as HTMLElement;
        listItem.attachTo(listContainer);
    }
    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
    constructor() {
        super('<ul class="page"></ul>');
    }

    addChild(section: Component) {
        const item = new PageItemComponent();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        })
    }

}


