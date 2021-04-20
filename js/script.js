const cursor = document.querySelector(".custom-cursor")
const aTags = document.querySelectorAll("a")
window.addEventListener("mousemove", ({ clientX, clientY }) => {
    cursor.style.transform =
        `translate(-50%, -50%)
    translate(${clientX}px,${clientY}px)
    `
    aTags.forEach(tag => {
        console.log(tag)
        tag.addEventListener("mouseover", () => {
            console.log("hover")
            cursor.style.transform =
                `translate(-50%, -50%)
        translate(${clientX}px,${clientY}px)
        scale(1.5)
        `
        })
    })
})