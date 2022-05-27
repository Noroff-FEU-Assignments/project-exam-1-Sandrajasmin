const APIblog = "https://greenskitchen-afd1b0.ingress-daribow.ewp.live/wp-json/wp/v2/posts?per_page=10";
const content = document.querySelector(".main_content");

async function getBlogPosts() {
  try {
    const response = await fetch(APIblog);
    const blogContent = await response.json();
    console.log(blogContent);
    content.innerHTML = "";
    for (let i = 0; i < blogContent.length; i++) {
      let blogLink = blogContent[i].id;
      let blogImgs = blogContent[i].x_featured_media_original;
      let altText = blogContent[i].x_metadata.alt_text;
      let blogTitleText = blogContent[i].title.rendered;
      let blogIntroText = blogContent[i].x_metadata.intro;
      //content.innerHTML += 
      let blogPost = `
                      <div class="content_container">
                        <a href="specific.html?id=${blogLink}">
                          <img class="content_img" src="${blogImgs}" alt="${altText}"> 
                          <h2 class="content_title">${blogTitleText}</h2>
                          <p class="content_text">${blogIntroText}</p>
                        </a>
                      </div>
                    `;content.innerHTML += blogPost;

    }
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts();

const loadExtra =document.getElementById("cta_button_id");
const APIextra = "https://greenskitchen-afd1b0.ingress-daribow.ewp.live/wp-json/wp/v2/posts?per_page=2&offset=10"

async function getMorePosts () {
  try {
    const response = await fetch(APIextra)
    const blogContent = await response.json();

    for (let i= 0; i < blogContent.length; i++){
      let blogLink = blogContent.link;
      let blogImgs = blogContent[i].x_featured_media_original;
      let altText = blogContent[i].x_metadata.alt_text;
      let blogTitleText = blogContent[i].title.rendered;
      let blogIntroText = blogContent[i].x_metadata.intro;
      let blogPost = `
                    <div class="content_container">
                        <a href="specific.html?id=${blogLink}">
                          <img class="content_img" src="${blogImgs}" alt="${altText}"> 
                          <h2 class="content_title">${blogTitleText}</h2>
                          <p class="content_text">${blogIntroText}</p>
                        </a>
                      </div>
      `; content.innerHTML += blogPost;
    }
  }catch (error) {
    console.log("Sorry an error happened", error);
  }
}

loadExtra.addEventListener("click", () => {
  getMorePosts();
});


