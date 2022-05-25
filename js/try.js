const APIUrl =
  "https://gifted-signature.flywheelsites.com/wp-json/wp/v2/posts?per_page=10";

const blogContainer = document.querySelector(".blog-container");


async function getBlogs() {
  try {
    const response = await fetch(APIUrl);
    const blogData = await response.json();
    blogContainer.innerHTML = "";
    for (let i = 0; i < blogData.length; i++) {
      let blogPicture = blogData[i].x_featured_media_original;
      let altText = blogData[i].x_metadata.alt_text;
      let blogName = blogData[i].acf.title;
      let blogDescription = blogData[i].acf.paragraf;
      let blogDate = blogData[i].x_date;
      let author = blogData[i].x_author;
      let blogPost = `


            `; blogContainer.innerHTML += blogPost;
    }
  } catch (error) {
    console.log("ops, there is an error", error);
  }
}

getBlogs();

const loadMore = document.getElementById("load-more");
const ApiMore = "https://gifted-signature.flywheelsites.com/wp-json/wp/v2/posts?_page=2&offset=10";


async function getMoreBlogs() {
  try {
    const response = await fetch(ApiMore);
    const blogData = await response.json();

    for (let i = 0; i < blogData.length; i++) {
      let blogPicture = blogData[i].x_featured_media_original;
      let altText = blogData[i].x_metadata.alt_text;
      let blogName = blogData[i].acf.title;
      let blogDescription = blogData[i].acf.paragraf;
      let blogDate = blogData[i].x_date;
      let author = blogData[i].x_author;
      let blogPost = 
      `
 
            `; blogContainer.innerHTML += blogPost;
    }
  } catch (error) {
    console.log("ops, there is an error", error);
  }
}

getMoreBlogs();

loadMore.addEventListener("click", () => {
  getMoreBlogs();
});