import { Component } from './components/component.js';
import { InputDialog, InputImageContainer } from './components/input-dialog.js';
import { ImageComponent } from './components/page/item/image.js';
// import { NoteComponent } from './components/page/item/note.js';
// import { TodoComponent } from './components/page/item/todo.js';
// import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent); 
        this.page.attachTo(appRoot);
        

        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            if(document.querySelector('.dialog')) {
                return;
            }
            const dialog = new InputDialog(InputImageContainer); //image, video, note ...
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            })
            dialog.setOnSubmitListener(() => {
                
                const imageSection = new ImageComponent('Image Title', 'https://picsum.photos/400/250');
                this.page.addChild(imageSection); // click => 기본요소를 페이지에 생성.
                // title과 내용을
                dialog.removeFrom(document.body);
                
            })
            dialog.attachTo(document.body);
        })
    }
}

new App(document.querySelector('.document')! as HTMLElement);
// document section은 동적으로 생성되지 않는, 정적인 요소이므로 type assertion 사용

