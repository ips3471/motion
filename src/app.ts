import { Component } from './components/component.js';
import { InputDialog } from './components/input-dialog.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent); 
        this.page.attachTo(appRoot);
        
        const image = new ImageComponent('Image Title', 'https://picsum.photos/400/250');
        this.page.addChild(image);

        const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/w0cyk_1F-Rc');
        this.page.addChild(video);

        const note = new NoteComponent('this is note Title', 'this is note Body');
        this.page.addChild(note);

        const toDo = new TodoComponent('Todo Title', 'Todo item');
        this.page.addChild(toDo);
    
        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            if(document.querySelector('.dialog')) {
                return;
            }
            const dialog = new InputDialog();
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            })
            dialog.setOnSubmitListener(() => {
                // onSubmit
                dialog.removeFrom(document.body);
            })
            dialog.attachTo(document.body);
        })
    }
}

new App(document.querySelector('.document')! as HTMLElement);
// document section은 동적으로 생성되지 않는, 정적인 요소이므로 type assertion 사용

