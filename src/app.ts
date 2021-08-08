import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent } from './components/page/page.js';
// parent를 생성, page를 attach
class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        
        const image  = new ImageComponent('Image Title', 'https://picsum.photos/400/250');
        image.attachTo(appRoot, 'beforeend');

        const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/w0cyk_1F-Rc');
        video.attachTo(appRoot, 'beforeend');

        const note = new NoteComponent('this is note Title', 'this is note Body');
        note.attachTo(appRoot, 'beforeend');

        const toDo = new TodoComponent('Todo Title', 'Todo item');
        toDo.attachTo(appRoot, 'beforeend');
    }
}

new App(document.querySelector('.document')! as HTMLElement);
// document section은 동적으로 생성되지 않는, 정적인 요소이므로 type assertion 사용
