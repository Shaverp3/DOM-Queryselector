// function applyGoatMode(){
//     //Select body element
//     const bodyElement = document.querySelector("body")
//     //Apply class of ".goat-mode" to the body element
//     bodyElement.classList.add("goat-mode");
// }

// applyGoatMode()
/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
// const sectionEl = document.querySelector(".article__section")

/*
    This code will only return the third section component
*/
// const footerEl = document.querySelector(".article__footer")

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
// const smallTextEl = document.querySelector(".smallText")
// smallTextEl.classList.remove("smallText")
// smallTextEl.classList.add("largeText")


// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const firstSection = document.querySelector(".article__header")
firstSection.textContent = "Welcome to the Pat blog"


function changeClassList (){
    var allArticles = document.querySelectorAll(".article__header")
    for(let i = 0; i < allArticles.length; i++){
    allArticles[i].classList.add("important")}
}
changeClassList()


document.querySelector(".dashed").classList.remove("dashed")


const articleFooter = document.querySelector(".article__footer")
console.log(articleFooter)
articleFooter.classList.add("goldenrod")
