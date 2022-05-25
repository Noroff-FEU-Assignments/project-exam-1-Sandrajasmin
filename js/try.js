const APIurl = "https://greenskitchen-afd1b0.ingress-daribow.easywp.com/wp-json/wp/v2/posts?date"

const moreContent = document.querySelector(".slider")

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
                                        <img class="item" src="${myPostsArr[0].x_featured_media_large}" alt=""> </a>
                                        <div class="text">
                                        <h2>${myPostsArr[0].title.rendered}</h2>
                                        <p>${myPostsArr[0].x_metadata.intro}</p></div>
                                    </a>
                                </div>
                                <div class="slide" style="background:dodgerBlue;">
                                <a href="specific.html?id=${myPostsArr[i].id}"> 
                                </div>
                            `
        }
    }
    catch (error) {
        console.log(error);
    }
}

getPosts();

var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;


function prevSlide(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();
}

changeSlide();

function changeSlide(){

  if(index>slides.length-1)
    index=0;

  if(index<0)
    index=slides.length-1;



    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";

      dots[i].classList.remove("active");


    }

    slides[index].style.display = "block";
    dots[index].classList.add("active");
}
