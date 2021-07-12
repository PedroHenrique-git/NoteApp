export default (icon) => {
    const span = document.createElement('span');
    span.classList.add('material-icons');
    span.innerText = icon;

    return span;
};