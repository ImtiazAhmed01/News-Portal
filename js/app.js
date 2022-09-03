const loadNewsCriteria = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
}

const displayCategories = allNewsCategories => {
    const allCategories = document.getElementById('all-category');
    for (const categories of allNewsCategories) {
        //console.log(categories.category_name);
        const li = document.createElement("li");
        li.innerHTML = `
        <li class="nav-item px-5">
            <a class="nav-link active text-light rounded p-2" href="" onclikc="funcName('${categories.category_id}')">${categories.category_name}</a>
        </li>
        `;
        allCategories.appendChild(li);
    }
}

loadNewsCriteria();


const loadNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`
    const res = await fetch(url);
    const data = await res.json();
    newsBulletin(data.data);
}

const newsBulletin = allNews => {
    const newsContainer = document.getElementById('news-container');
    allNews.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        <div class="d-flex justify-content-between flex-cloumn flex-md-row shadow-sm card mb-3 ms-3"
        style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${news.thumbnail_url}" class="img-fluid rounded-start"
                        alt="...">
                </div>
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.details}</p>
                        
                        <div class="d-flex">
                            <img class="img-fluid rounded-circle w-25" src="${news.author.img}">
                            <p class="card-text"><small class="text-info">${news.author['name']}</small></p>
                            <p class="card-text ps-4"><small class="text-info">${news.total_view}</small></p>
                            
                            <button class="w-25 h-25 ms-5 bg-primary">Show Details</button>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    `;
        newsContainer.appendChild(newsDiv);
    })
}

loadNews();



