export const modal = document.querySelector('.add_task-modal');

const isMobile = () => {
    if(window.innerWidth <= 640) return true;
    return false;
}

export const showModal = () => {
    modal.style.display = 'flex';
    if( isMobile ) document.querySelector('body').style.overflowY = 'hidden';
};

export const hideModal = () => {
    modal.style.display = 'none'; 
    if( isMobile ) document.querySelector('body').style.overflowY = 'auto';   
};

export const setTargetList = (targeList) => {
    modal.setAttribute('target-list', targeList.split(' ')[0]);
};

export const getTargetList = () => {
    return modal.getAttribute('target-list');
};
