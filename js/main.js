function expandContent(container) {
    if (!container) return;
    const contentElement = container.querySelector('.content');
    const interactionWrapper = container.querySelector('.interaction');
    const interaction = interactionWrapper ? interactionWrapper.children[0] : null;
    
    if (contentElement && interaction) {
        const isHidden = window.getComputedStyle(contentElement).opacity === 0;
        
        if (isHidden) {
            contentElement.style.opacity = 1;
            setTimeout(() => { interaction.style.opacity = 1; }, 10);
        } else {
            contentElement.style.opacity = 0;
            interaction.style.opacity = 0;
        }
    }
}

const products_boxes = document.querySelectorAll('.products_box .item');

products_boxes.forEach(box => {
    const content = box.querySelector('.content');
    const dot = box.querySelector('.interaction span');

    if (content) content.style.opacity = 0;

    box.addEventListener('mouseenter', () => {
        if (content) content.style.opacity = 1;
        if (dot) dot.classList.add('active');
    });

    box.addEventListener('mouseleave', () => {
        if (content) content.style.opacity = 0;
        if (dot) dot.classList.remove('active');
    });
});