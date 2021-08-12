import { BaseComponent, Component } from '../component.js';

export interface SectionContainer extends Composable {
    setOnCloseListener(listener: OnCloseListener): void;
}
export type OnCloseListener = () => void;
export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
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
    addChild(item: Component){
        const listContainer = this.element.querySelector('.page-item-body')! as HTMLElement;
        item.attachTo(listContainer);
    }
    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }
}

export interface Composable extends Component {
    addChild(child: Component): void;
}
type SectionContainerConstructor = {
    new (): SectionContainer;
}
export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
    constructor(private pageItemConstructor: SectionContainerConstructor) {
        super('<ul class="page"></ul>');
    }

    addChild(section: Component) {
        const item = new this.pageItemConstructor(); //item = PageItemComponent <li>
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        })
    }
}


