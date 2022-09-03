const loadNews = async (clickCategory) => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/${clickCategory}');
    const data = await res.json();
    const mainData = data.data.news_category;
    // displayCatagories(data.data.news_category);
    return mainData;
}

//Display catagory
const displayCatagories = async () => {
    const news = await loadNews();
    const allCategory = document.getElementById('all-category');
    for (const category of news) {
        const li = document.createElement('li');
        li.innerHTML = `<li id="click-category" class="list-group-item list-group-item-primary rounded ms-5 p-3" onclick ="loadData('0${category_id}')>${category.category_name}</li>`;

        allCategory.appendChild(li);

    }
}

// const loadData = news=>{
//     const clickCategory = document.getElementById('clicked-category');
// }

// .addEventListener('click', function () {
//     loadNews(clickCategory);
// })

displayCatagories();
//loadNews();