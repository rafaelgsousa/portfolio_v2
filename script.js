const getMaxHeight = (elements) => {
    let maxHeight = 0;
    elements.forEach(element => {
        if (element.offsetHeight > maxHeight) {
            maxHeight = element.offsetHeight;
        }
    });
    return maxHeight;
}

const setHeightRecommendations = () => {
    const recommendationsSection = document.getElementById('recommendations');
    const recommendationsTitle = document.getElementById('recommendation-title');
    const carousel = document.getElementById('carousel');
    const listRecommendations = document.getElementById('list-recommendations');
    const recommendations = [...document.getElementsByClassName('recommendation')];
    const maxHeight = getMaxHeight(recommendations);
    const heightTitle = recommendationsTitle.offsetHeight;

    
    listRecommendations.style.height= `${maxHeight + 40}px`;

    recommendationsSection.style.minHeight = `${maxHeight + heightTitle + 60}px`;

    carousel.style.height = `${maxHeight}px`;

    recommendations.forEach(recommendation => {
        recommendation.style.height = `${maxHeight}px`;
        recommendation.style.backgroundColor = 'white';
        recommendation.style.width = '720px';
    }
    );
}

const selectCurrentItem = (items, currentImg) => {
    items.forEach(item => {
        item.classList.remove('current-recommendation');
    });

    items[currentImg].scrollIntoView({behavior: "smooth", inline: "center"});

    items[currentImg].classList.add('current-recommendation');
}

window.addEventListener('load', setHeightRecommendations);



const leftArrow = document.getElementById('left-button-carousel');
const rightArrow = document.getElementById('right-button-carousel');
const carousel = document.getElementById('carousel');
let currentImg = 0;
const items = [...document.getElementsByClassName('recommendation')]
const maxItems = items.length - 1;

leftArrow.addEventListener('click', (event) => {
    console.log("🚀 ~ file: script.js:57 ~ leftArrow.addEventListener ~ event:", event)
    currentImg--;
    if (currentImg < 0) {
        currentImg = maxItems;
    }
    selectCurrentItem(items, currentImg);
});

rightArrow.addEventListener('click', (event) => {
    console.log("🚀 ~ file: script.js:66 ~ rightArrow.addEventListener ~ event:", event)
    currentImg++;
    if (currentImg > maxItems) {
        currentImg = 0;
    }
    selectCurrentItem(items, currentImg);
});
