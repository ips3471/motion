// src와 name을 받아서 dom형태로 return

export class Input {
    private src: string;
    private name: string;
    constructor(src: string, name: string) {
        this.src = src;
        this.name = name;
    }

    makeImage() {
        return (
            `
            <li>
            <img src="${this.src}">
            <p>${this.name}</p>
            </li>
            `
        )
    }
}