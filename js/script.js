const APIurl = "https://greenskitchen-afd1b0.ingress-daribow.easywp.com/wp-json/wp/v2/posts/"

const lastPost = document.querySelector(".last-post")
const moreContent = document.querySelector(".slide")

async function getPosts () {
  try {
    const response = await fetch(APIurl);
    const responseJSON = await response.json();
    const blogInfo = responseJSON;
    console.log(responseJSON);

    for (blog of blogInfo) {
    for (image of blog.img){
      moreContent.innerHTML += `
                      <img src="/img/smoothie.jpeg" alt="food plater" />
											<h2>Fresh Smoothie</h2>
											<p>
												packed full of healthy fruit and veggies that will help
												you start the morning off with a good dose of vitamins
												and minerals.
											</p>
      `
    } 
    }

      
  }

  catch (error) {
    console.log("some error happened", error);
  }
}


getPosts();


// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const APIUrl = ``;

// const blogDetails = document.querySelector(".last-post");

// async function getBlogDetails() {
//   try {
//     const response = await fetch(APIUrl);
//     const singleBlogDetail = await response.json();
//     console.log('singleBlogDetail:', singleBlogDetail);
//   } 
  
//   catch (error) {
//     console.log(error);
//   }
// }
// getBlogDetails();



















const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
   button.addEventListener("click", () => {
     const offset = button.dataset.carouselButton === "next" ? 1 : - 1
     const slides = button
       .closest("[data-carousel]")
       .querySelector('[data-slides]')

     const activeSlide = slides.querySelector("[data-active]")
     let newIndex = [...slides.children].indexOf(activeSlide) + offset
     if (newIndex < 0) newIndex = slides.children.length - 1
     if (newIndex >= slides.children.length) newIndex = 0

     slides.children[newIndex].dataset.active = true
     delete activeSlide.dataset.active
   }) 
})