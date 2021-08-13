import { Component } from './components/component.js';
import { MediaSectionInput } from './components/dialog/dialog-input/media-input.js';
import { InputDialog } from './components/dialog/dialog.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent); 
        this.page.attachTo(appRoot);
        

        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            if(document.querySelector('.dialog')) {
                return;
            }
            const dialog = new InputDialog();
            // 여기까지 공통, dialog 생성
            // image or video => MediaInput 생성
            // note or todo => TextInput 생성
            const inputSection = new MediaSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            })

            dialog.setOnSubmitListener(() => {
                const image = new ImageComponent(inputSection.title, inputSection.url); 
                dialog.removeFrom(dialogRoot);
                this.page.addChild(image);
                this.page.attachTo(appRoot);
            })
        })
    }
}

new App(
    document.querySelector('.document')! as HTMLElement, document.body);
// document section은 동적으로 생성되지 않는, 정적인 요소이므로 type assertion 사용

