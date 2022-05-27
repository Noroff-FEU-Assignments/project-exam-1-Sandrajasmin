console.log(document.location.search);

const queryString = document.location.search;
//console.log(queryString);

const params = new URLSearchParams(queryString);
//console.log(params);

const id = params.get("id");

//console.log(id);

const APIurl = `https://greenskitchen-afd1b0.ingress-daribow.ewp.live/wp-json/wp/v2/posts/${id}`;
console.log(APIurl);

const blogTitle = document.querySelector(".title")
const blogIntro = document.querySelector(".intro")
const blogImg = document.querySelector(".main_img")
const blogIngredient = document.querySelector(".ingredient_list")
const blogInstruction = document.querySelector(".instruction_text")
const modal = document.querySelector(".modal");


async function getContent() {
    try {
        const response = await fetch(APIurl);
        const blogContent = await response.json();
        let blogImgs = blogContent.x_featured_media_original;
        let altText = blogContent.x_metadata.alt_text;
        let blogTitleText = blogContent.title.rendered;
        let blogIntroText = blogContent.acf.intro;
        let blogIngredientText = blogContent.x_metadata.ingredients;

        blogTitle.innerHTML += `${blogTitleText}`;
        blogIntro.innerHTML += `${blogIntroText}`;
        blogImg.innerHTML += `
                                <img class="main_img_1" src="${blogImgs}" onClick="showModal()" alt="${altText} />
                                    <div class="main_img_thumb">
                                </div>
        `;
        blogIngredient.innerHTML += `                       
                                    <div class="ingredient_check">
                                        <h2>QUINOA</h2>
                                        <div class="ingredient_checkbox">
                                            <input type="checkbox" id="ingredient_box" name="ingredient_box" value="food">
                                            <label class="box" for="ingredient_box">${blogContent.x_metadata.one}</label><br>
                                        </div>
                                        <div class="ingredient_checkbox">
                                            <input type="checkbox" id="ingredient_box" name="ingredient_box" value="food">
                                            <label class="box" for="ingredient_box">${blogContent.x_metadata.two}</label><br>
                                        </div>
                                        <div class="ingredient_checkbox">
                                            <input type="checkbox" id="ingredient_box" name="ingredient_box" value="food">
                                            <label class="box" for="ingredient_box">${blogContent.acf.three}</label><br>
                                        </div>
                                        <div class="ingredient_checkbox">
                                            <input type="checkbox" id="ingredient_box" name="ingredient_box" value="food">
                                            <label class="box" for="ingredient_box">${blogContent.acf.four}</label><br>
                                        </div>
                                        <div class="ingredient_checkbox">
                                            <input type="checkbox" id="ingredient_box" name="ingredient_box" value="food">
                                            <label class="box" for="ingredient_box">${blogContent.acf.five}</label><br>
                                        </div>
                                        <div class="ingredient_checkbox">
                                            <input type="checkbox" id="ingredient_box" name="ingredient_box" value="food">
                                            <label class="box" for="ingredient_box">${blogContent.acf.six}</label><br>
                                        </div>
                                        <div class="ingredient_checkbox">
                                            <input type="checkbox" id="ingredient_box" name="ingredient_box" value="food">
                                            <label class="box" for="ingredient_box">${blogContent.acf.seven}</label><br>
                                        </div>
                                        <h2>SALMON</h2>
                                        <div class="ingredient_checkbox">
                                            <input type="checkbox" id="ingredient_box" name="ingredient_box" value="food">
                                            <label class="box" for="ingredient_box">${blogContent.acf.eight}</label><br>
                                        </div>
                                        <div class="ingredient_checkbox">
                                            <input type="checkbox" id="ingredient_box" name="ingredient_box" value="food">
                                            <label class="box" for="ingredient_box">${blogContent.acf.nine}</label><br>
                                        </div>
                                        <div class="ingredient_checkbox">
                                            <input type="checkbox" id="ingredient_box" name="ingredient_box" value="food">
                                            <label class="box" for="ingredient_box">${blogContent.acf.then}</label><br>
                                        </div>
                                        <div class="ingredient_checkbox">
                                            <input type="checkbox" id="ingredient_box" name="ingredient_box" value="food">
                                            <label class="box" for="ingredient_box">${blogContent.acf.elleven}</label><br>
                                        </div>
                                        <div class="ingredient_checkbox">
                                            <input type="checkbox" id="ingredient_box" name="ingredient_box" value="food">
                                            <label class="box" for="ingredient_box">${blogContent.acf.twelve}</label><br>
                                        </div>
                                    </div>									
        `;
        blogInstruction.innerHTML += `
                                <p class="instruction_text">${blogContent.acf.ins_one}</p>
                                <p class="instruction_text">${blogContent.acf.ins_two}</p>
                                <p class="instruction_text">${blogContent.acf.ins_three}</p>
                                <p class="instruction_text">${blogContent.acf.ins_four}</p>
                                <p class="instruction_text">${blogContent.acf.ins_five}</p>
                                <p class="instruction_text">${blogContent.acf.ins_six}</p>
                                <p class="instruction_text">${blogContent.acf.ins_seven}</p>
                                <p class="instruction_text">${blogContent.acf.ins_eight}</p>
                                <p class="instruction_text">${blogContent.acf.ins_nine}</p>
                                <p class="instruction_text">${blogContent.acf.ins_then}</p>
        `;
        modal.innerHTML += `
                            <img class="full_img" src="${blogImgs}" alt="${altText} />
                            <div class="main_img_thumb">
                                </div>
                            <p>${blogTitleText}</p>
        `;
        document.title = `${blogTitleText}`;
    }
    catch (error) {
        console.log(error);

    }
}

getContent();

const showModal = () => {
    modal.style.display = "flex";
}

modal.addEventListener("click", () => {
    modal.style.display = "none";
})