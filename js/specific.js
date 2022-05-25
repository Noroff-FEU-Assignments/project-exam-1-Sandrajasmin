console.log(document.location.search);

const queryString = document.location.search;
//console.log(queryString);

const params = new URLSearchParams(queryString);
//console.log(params);

const id = (params.get("id"));
//console.log(id);

let APIurl = `https://greenskitchen-afd1b0.ingress-daribow.easywp.com/wp-json/wp/v2/posts/${id}`;
console.log(APIurl);

const blogTitle = document.querySelector(".title")
const blogIntro = document.querySelector(".intro")
const blogImg = document.querySelector(".main_img")
const blogIngredient = document.querySelector(".ingredient_list")
const blogInstruction = document.querySelector(".instruction_text")

async function getContent() {
    try {
        const response = await fetch(APIurl);
        const blogContent = await response.json();
        let blogImgs = blogContent.x_featured_media_original;
        //let altText = blogContent..x_metadata.alt_text; ADD ALT TEXT TO ALL PICTURES
        let blogTitleText = blogContent.title.rendered;
        let blogIntroText = blogContent.acf.intro;
        let blogInstructionText = blogContent.x_metadata.instructions;
        let blogIngredientText = blogContent.x_metadata.ingredients;

        blogTitle.innerHTML += `${blogTitleText}`
        blogIntro.innerHTML += `${blogIntroText}`
        blogImg.innerHTML += `
                                <img class="main_img_1" src="${blogImgs}" alt="" />
                                    <div class="main_img_thumb">
                                        <img class="main_img_slide" src="/img/lemon.jpeg" alt="" /> 
                                        <img class="main_img_slide" src="/img/herbs.jpeg" alt="" />
                                        <img class="main_img_slide" src="/img/salmon.jpeg" alt="" />
                                    </div>
                            `
        blogIngredient.innerHTML += `                              
									<p>${blogIngredientText}</p>								
        `
        blogInstruction.innerHTML += `
                                <p class="instruction_text">${blogInstructionText}</p>
        `;
        document.title = `${blogTitleText}`;
    }
    catch (error) {
        console.log(error);

    }
}

getContent();