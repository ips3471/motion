import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string) {
        super(`<section class="video"><iframe class="video__thumbnail" width="427" height="240" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2 class="video__title"></h2></section>`);

    const videoElement = this.element.querySelector('.video__thumbnail')! as HTMLIFrameElement;
    videoElement.src = this.convertToEmbeddedURL(url);
    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
}

private convertToEmbeddedURL(url: string): string {
    const regExp = /(?:https\:\/\/)?(?:www\.)?youtu(?:be\.com)?(?:\.be)?\/(?:watch\?v\=)?([a-z0-9A-Z_-]{11})/;
    const match = url.match(regExp);
    const videoId = match? match[1]: undefined;
    if(videoId) {
        return `
        https://www.youtube.com/embed/${videoId}
        `;
    }
    return url;
}
}