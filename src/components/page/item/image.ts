// src와 name을 받아서 dom형태로 return
// innerHTML 형태로 데이터를 변경하는 것은 권장되지 않음
// => element를 selet해서 data를 injection (src, alt, textContent ...)
export class ImageComponent {
    private element: HTMLElement; //list item? <li></li>
    constructor(title: string, url: string) {
        const template = document.createElement('template');
        template.innerHTML = `<section class="image">
        <div class="image__holder">
            <img class="image__thumbnail">
        </div>
        <p class="image__title"></p>
    </section>`;
    this.element = template.content.firstElementChild! as HTMLElement;
    const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;
    const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
    titleElement.textContent = title;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}