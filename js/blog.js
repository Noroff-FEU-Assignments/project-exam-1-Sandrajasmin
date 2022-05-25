const APIblog = "https://greenskitchen-afd1b0.ingress-daribow.easywp.com/wp-json/wp/v2/posts?per_page=10";

const content = document.querySelector(".main_content");


async function getBlogPosts() {
  try {
    const response = await fetch(APIblog);
    const blogContent = await response.json();
    content.innerHTML = "";
    for (let i = 0; i < blogContent.length; i++) {
      const blogLink = blogContent.link;
      const blogImgs = blogContent[i].x_featured_media_original;
      const altText = blogContent.x_metadata.alt_text;
      const blogTitleText = blogContent[i].title.rendered;
      const blogIntroText = blogContent[i].x_metadata.intro;
      content.innerHTML += `
      <div class="content_container">
							<a href="specific.html?id=${blogLink}">
								<img class="content_img" src="${blogImgs}" alt="${altText}">
								<h2 class="content_title">${blogTitleText}</h2>
								<p class="content_text">${blogIntroText}</p>
							</a>
						</div>
              `;
    }
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts();