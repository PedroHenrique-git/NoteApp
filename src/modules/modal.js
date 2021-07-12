export const modal = document.querySelector('.add_task-modal');

export const showModal = () => {
    modal.style.display = 'flex';
};

export const hideModal = () => {
    modal.style.display = 'none';    
};

export const setTargetList = (targeList) => {
    modal.setAttribute('target-list', targeList);
};

export const getTargetList = () => {
    return modal.getAttribute('target-list');
};
