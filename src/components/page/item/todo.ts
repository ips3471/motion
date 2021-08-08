import { BaseComponent } from '../../component.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, todo: string) {
        super(`<section class="todo">
        <h2 class="todo__title"></h2>
        <input type="checkbox" class="todo__checkbox" />
    </section>`)
// element
        const todoElement = this.element.querySelector('.todo__checkbox')! as HTMLInputElement;
        todoElement.insertAdjacentText('afterend', todo);
        const titleElement = this.element.querySelector('.todo__title')! as HTMLHeadingElement;
        titleElement.textContent = title;
    }
}




// title, input => super(string)