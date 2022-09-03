const loadNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    // const data2 = data.data.news_category;
    displayCatagories(data.data.news_category);
    // return data.data.news_category;
};

//Display catagory
const displayCatagories = (news) => {

    const allCategory = document.getElementById('all-category');
    for (const category of Object.get(news)) {
        const li = document.createElement('li');
        li.innerHTML = `<li id="click-category" class="list-group-item list-group-item-primary rounded ms-5 p-3" onclick ="loadData()>${category.category_name}</li>`;

        allCategory.appendChild(li);

    };
};

displayCatagories();
loadNews();

