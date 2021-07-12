export const createLi = () => {
    return document.createElement('li');
}

export const createBtn = (className) => {
    const btn = document.createElement('button');
    btn.classList.add(className);
    return btn;
}

export const createDiv = (className) => {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}