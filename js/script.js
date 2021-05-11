const cursor = document.querySelector(".custom-cursor")
const aTags = document.querySelectorAll("a")
window.addEventListener("mousemove", ({ clientX, clientY }) => {
    cursor.style.top = clientY + "px"
    cursor.style.left = clientX + "px"
})

aTags.forEach(tag => {
    console.log(tag)
    tag.addEventListener("mouseover", () => {
        cursor.setAttribute("data-hover", true)
    })

    tag.addEventListener("mouseleave", () => {
        cursor.setAttribute("data-hover", false)
    })
})
