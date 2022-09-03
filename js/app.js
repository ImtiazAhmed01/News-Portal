const loadAllNews = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    //const allData = data.data.news_category;
    return (data.data.news_category);

}

const loadAllCategories = async () => {
    const data = await loadAllNews();
    const allCategories = document.getElementById('all-category');
    for (const categories of data) {
        //console.log(categories.category_name);
        const li = document.createElement("li");
        li.innerHTML = `
        <li class="nav-item px-5">
            <a class="nav-link active text-light rounded p-2" onclikc="">${categories.category_name}</a>
        </li>
        `;
        allCategories.appendChild(li);
    }
}

loadAllCategories();
//loadAllNews();