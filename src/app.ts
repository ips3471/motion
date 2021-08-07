import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
// parent를 생성, page를 attach
class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        
        const image  = new ImageComponent('Image Title', 'https://picsum.photos/400/250');
        image.attachTo(appRoot, 'beforeend');
    }
}

new App(document.querySelector('.document')! as HTMLElement);
// document section은 동적으로 생성되지 않는, 정적인 요소이므로 type assertion 사용