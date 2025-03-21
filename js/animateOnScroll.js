const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }


    })
})


const hid = document.querySelectorAll('.hidden')
hid.forEach((el) => observer.observe(el));
const hidel = document.querySelectorAll('.hidden1')
hidel.forEach((el) => observer.observe(el));
