import { Component } from './components/component.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent } from './components/page/page.js';
// parent를 생성, page를 attach
class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent(); // <HTMLUlElement>
        this.page.attachTo(appRoot);
        
        const image = new ImageComponent('Image Title', 'https://picsum.photos/400/250');
        this.page.addChild(image);

        const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/w0cyk_1F-Rc');
        this.page.addChild(video);

        const note = new NoteComponent('this is note Title', 'this is note Body');
        this.page.addChild(note);

        const toDo = new TodoComponent('Todo Title', 'Todo item');
        this.page.addChild(toDo);
    }
}

new App(document.querySelector('.document')! as HTMLElement);
// document section은 동적으로 생성되지 않는, 정적인 요소이므로 type assertion 사용

