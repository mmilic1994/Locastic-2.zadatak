const loadMore = document.getElementById('load');
const articlesNode = document.getElementById('articles');
const articleNode = document.createElement('div');
articleNode.className = 'articles';

loadMore.addEventListener('click', () => {
  loadMore.style.display = 'none';
  
  if (window.screen.width < 640) {
    articleNode.innerHTML = `
    <div class="article">
      <img src="images/content-image.png" alt="Article image">
      <h2>Roboto 40px Size, Spacing 44px - Comment On The Importance Of Human Life</h2>
      <p>Roboto Regular, 22px, Spacing 34px - Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <div class="view_full">
        <span><a href="#">View full article</a></span>
      </div>
    </div>
    <div class="article">
      <img src="images/content-image.png" alt="Article image">
      <h2>Roboto 40px Size, Spacing 44px - Comment On The Importance Of Human Life</h2>
      <p>Roboto Regular, 22px, Spacing 34px - Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <div class="view_full">
        <span><a href="#">View full article</a></span>
      </div>
    </div>
    <div class="article">
    <img src="images/content-image.png" alt="Article image">
    <h2>Roboto 40px Size, Spacing 44px - Comment On The Importance Of Human Life</h2>
    <p>Roboto Regular, 22px, Spacing 34px - Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
    <div class="view_full">
      <span><a href="#">View full article</a></span>
    </div>
  </div>
    `;
    articlesNode.appendChild(articleNode);
  }

  if(window.screen.width >= 640){
    articleNode.innerHTML = ` <div class="article">
    <img src="images/content-image.png" alt="Article image">
    <h2>Roboto 40px Size, Spacing 44px - Comment On The Importance Of Human Life</h2>
    <p>Roboto Regular, 22px, Spacing 34px - Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
    <div class="view_full">
      <span><a href="#">View full article</a></span>
    </div>
  </div>
  <div class="article">
    <img src="images/content-image.png" alt="Article image">
    <h2>Roboto 40px Size, Spacing 44px - Comment On The Importance Of Human Life</h2>
    <p>Roboto Regular, 22px, Spacing 34px - Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
    <div class="view_full">
      <span><a href="#">View full article</a></span>
    </div>
  </div>
    `;
    articlesNode.appendChild(articleNode);
  }

    if(window.screen.width >= 1024){
      articleNode.innerHTML = ` <div class="article">
      <img src="images/content-image.png" alt="Article image">
      <h2>Roboto 40px Size, Spacing 44px - Comment On The Importance Of Human Life</h2>
      <p>Roboto Regular, 22px, Spacing 34px - Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <div class="view_full">
        <span><a href="#">View full article</a></span>
      </div>
    </div>
    <div class="article">
      <img src="images/content-image.png" alt="Article image">
      <h2>Roboto 40px Size, Spacing 44px - Comment On The Importance Of Human Life</h2>
      <p>Roboto Regular, 22px, Spacing 34px - Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <div class="view_full">
        <span><a href="#">View full article</a></span>
      </div>
    </div>
    <div class="article">
    <img src="images/content-image.png" alt="Article image">
    <h2>Roboto 40px Size, Spacing 44px - Comment On The Importance Of Human Life</h2>
    <p>Roboto Regular, 22px, Spacing 34px - Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
    <div class="view_full">
      <span><a href="#">View full article</a></span>
    </div>
  </div>
      `;
      articlesNode.appendChild(articleNode);
    }
  });



