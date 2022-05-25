const APIurl = "https://greenskitchen-afd1b0.ingress-daribow.easywp.com/wp-json/wp/v2/posts?date"

const lastPost = document.querySelector(".last-post")
const moreContent = document.querySelector(".carousel_content")

async function getPosts() {
    try {
        const response = await fetch(APIurl);
        const responseJSON = await response.json();
        console.log(responseJSON);

        const myPostsArr = responseJSON;

        for (let i = 0; i < myPostsArr.length; i++) {
            //console.log(myPostsArr[i]);
            moreContent.innerHTML = `
                                
                                <div class="mySlides fade">
                                    <a href="specific.html?id=${myPostsArr[0].id}"> 
                                        <img class="item" src="${myPostsArr[0].x_featured_media_large}" alt="${myPostsArr[0].x_metadata.alt_text}> 
                                        <div class="text">
                                        <h2>${myPostsArr[0].title.rendered}</h2>
                                        <p>${myPostsArr[0].x_metadata.intro}</p></div>
                                    </a>
                                </div>

                                <div class="mySlides fade">
                                    <a href="specific.html?id=${myPostsArr[1].id}"> 
                                        <img class="item" src="${myPostsArr[1].x_featured_media_large}" alt="${myPostsArr[1].x_metadata.alt_text}">
                                        <div class="text">
                                        <h2>${myPostsArr[1].title.rendered}</h2>
                                        <p>${myPostsArr[1].x_metadata.intro}</p></div>
                                    </a>
                                </div>

                                <div class="mySlides fade">
                                    <a href="specific.html?id=${myPostsArr[2].id}"> 
                                        <img class="item" src="${myPostsArr[2].x_featured_media_large}" alt="${myPostsArr[2].x_metadata.alt_text}>
                                        <div class="text">
                                        <h2>${myPostsArr[2].title.rendered}</h2>
                                        <p>${myPostsArr[2].x_metadata.intro}</p></div>
                                    </a>
                                </div>

                                <div class="mySlides fade">
                                    <a href="specific.html?id=${myPostsArr[3].id}"> 
                                        <img class="item" src="${myPostsArr[3].x_featured_media_large}" alt="${myPostsArr[3].x_metadata.alt_text}>
                                        <div class="text">
                                        <h2>${myPostsArr[3].title.rendered}</h2>
                                        <p>${myPostsArr[3].x_metadata.intro}</p></div>
                                    </a>
                                </div>

                                <div class="mySlides fade">
                                    <a href="specific.html?id=${myPostsArr[4].id}"> 
                                        <img class="item" src="${myPostsArr[4].x_featured_media_large}" alt="${myPostsArr[4].x_metadata.alt_text}>
                                        <div class="text">
                                        <h2>${myPostsArr[4].title.rendered}</h2>
                                        <p>${myPostsArr[4].x_metadata.intro}</p></div>
                                    </a>
                                </div>

                                <div class="mySlides fade">
                                    <a href="specific.html?id=${myPostsArr[5].id}"> 
                                        <img class="item" src="${myPostsArr[5].x_featured_media_large}" alt="${myPostsArr[5].x_metadata.alt_text}>
                                        <div class="text">
                                        <h2>${myPostsArr[5].title.rendered}</h2>
                                        <p>${myPostsArr[5].x_metadata.intro}</p></div>
                                    </a>
                                </div>

                                <div class="mySlides fade">
                                    <a href="specific.html?id=${myPostsArr[6].id}"> 
                                        <img class="item" src="${myPostsArr[6].x_featured_media_large}" alt="${myPostsArr[6].x_metadata.alt_text}>
                                        <div class="text">
                                        <h2>${myPostsArr[6].title.rendered}</h2>
                                        <p>${myPostsArr[6].x_metadata.intro}</p></div>
                                    </a>
                                </div>

                                <div class="mySlides fade">
                                    <a href="specific.html?id=${myPostsArr[7].id}"> 
                                        <img class="item" src="${myPostsArr[7].x_featured_media_large}" alt="${myPostsArr[7].x_metadata.alt_text}>
                                        <div class="text">
                                        <h2>${myPostsArr[7].title.rendered}</h2>
                                        <p>${myPostsArr[7].x_metadata.intro}</p></div>
                                    </a>
                                </div>                     
                                `
        }

        lastPost.innerHTML += `
                              <h1 class="latest_post">Most Read Post</h1>
                              <a href="specific.html?id=${myPostsArr[9].id}">
                                <h2>${myPostsArr[9].title.rendered}</h2>
                              
                              <p class="new-content_intro">
                                ${myPostsArr[9].x_metadata.intro}
                              </p>
                              </a>
                              <div class="outline_1">
                                <img class="new-content_img" src="${myPostsArr[9].x_featured_media_large}" alt="${myPostsArr[9].x_metadata.alt_text}>
                              <div class="new-content_cta">
                                <a href="specific.html?id=${myPostsArr[9].id}">
                                  <p>TO THE RECIPE > > ></p>
                                </a>
                              </div>
                            </div>
            `
    }
    catch (error) {
        console.log(error);
    }
}

getPosts();

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.querySelector(".carousel_content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));