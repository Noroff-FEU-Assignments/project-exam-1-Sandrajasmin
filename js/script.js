const APIurl = "https://greenskitchen-afd1b0.ingress-daribow.easywp.com/wp-json/wp/v2/posts/"

const lastPost = document.querySelector(".last-post")
const moreContent = document.querySelector(".carousel_arr")

async function getPosts () {
  try {
    const response = await fetch(APIurl);
    const responseJSON = await response.json();
    console.log(responseJSON);

    const myPostsArr = responseJSON;
        for (let i = 0; i < myPostsArr.length; i++) {
          console.log(myPostsArr[i]);
            moreContent.innerHTML += `
                                      <li class="slide">
                                      <a 
                                                href="specific.html?link=${myPostsArr[i].link}"
                                                >
                                      <img src='${myPostsArr[i].x_featured_media_large}' />
										                	<h2>${myPostsArr[i].title.rendered}</h2>
									              	    <p>${myPostsArr[i].acf.intro}</p>
                                      </li>
                                      </a>
                                 `               
  }   
  }

  catch (error) {
    console.log("some error happened", error);
  }
}


getPosts();


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

