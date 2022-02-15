// check the route
console.log("fired")
// var route = pathname after the /

var header = document.querySelector(".header")
var footer = document.querySelector(".footer")
var route = window.location.pathname.split("/")[1]

//this isn't any more optimal than just assigning a class to the index specifically
// just more of a creative showing to combine multiple functions into one

function home() {
    if(route === 'index.html') {
        console.log("this worked")
        header.classList.add("nav--home");
        footer.classList.add("nav--home");

        document.querySelector(".home__video").playbackRate = 0.6;
    } else {
        return
    }
}

function about() {
    console.log("test")
}

function portfolio() {
    var projectsContent = [
        {id: 1, title: "AP Creative",  image: "https://images.prismic.io/austincaron-portfolio/c8030a53-eacb-40a6-a725-488ac472d2df_ap.webp?auto=compress,format"},
        {id: 2, title: "Toksan Anime",  image: "https://images.prismic.io/austincaron-portfolio/408c0f48-c8d7-4f23-9535-a4e4cd1227fa_toksan_preview_new.png?auto=compress,format&rect=0,0,640,360&w=640&h=360"},
        {id: 3, title: "Nintendo Fan Redesign",  image: "https://images.prismic.io/austincaron-portfolio/aaaf0995-cc16-4baa-a014-89063a45bc4a_nintendo.webp?auto=compress,format"},
        {id: 4, title: "Patrick Bradley's Portfolio",  image: "https://images.prismic.io/austincaron-portfolio/bfe10384-7e29-4b9b-b1e0-ab51d3ea8a84_bradley.webp?auto=compress,format"},
        {id: 5, title: "OVO Redesign", image: "https://images.prismic.io/austincaron-portfolio/0ee7d8a2-d0db-40f4-ae58-4c3ee8a0d916_drake.webp?auto=compress,format"},
    ],
    projectContainer = document.querySelector(".projects__container"),
    projectDots = document.querySelector(".projects__dots");

    
    projectsContent.forEach(function(project) {
        // create a liist item in projectContainer with the class of projecs__item
        var projectItem = document.createElement("li");
        projectItem.classList.add("projects__item");
        projectContainer.appendChild(projectItem);

        // create an h2 element in projectItem with the class of projects__title
        var projectTitle = document.createElement("h2");
        projectTitle.classList.add("projects__title");

        // add the project title to the h2 element
        projectTitle.innerHTML = project.title;

        // create an img element in projectItem with the class of projects__image
        var projectImage = document.createElement("img");
        projectImage.classList.add("projects__image");

        // add the project image to the img element
        projectImage.src = project.image;

        // give the first project the class of projects__item--active
        if(project.id === 1) {
            projectItem.classList.add("projects__item--active");
        }

        // append the project title and project image to the projectItem
        projectItem.appendChild(projectTitle);
        projectItem.appendChild(projectImage);

        var projectDot = document.createElement("span");
        projectDot.classList.add("projects__dot");
        projectDots.appendChild(projectDot)

        projectDots.children[0].classList.add("projects__dot--active");
    })

    document.querySelectorAll(".projects__dot").forEach(btn => {
        btn.addEventListener("click", function() {
            console.log("test")
            const index = [...btn.parentElement.children].indexOf(btn);
            var allProjects = document.querySelectorAll(".projects__item"),
                offset = allProjects[index].offsetTop

            allProjects.forEach(project => {
                project.classList.remove("projects__item--active")
            })

            allProjects[index].classList.add("projects__item--active");
            projectContainer.scrollTo({top: offset, behavior: 'smooth'})

            document.querySelectorAll(".projects__dot").forEach(dot => {
                dot.classList.remove("projects__dot--active")
            })

            btn.classList.add("projects__dot--active")
        })
    })

    window.addEventListener("wheel", function(event) {

        if (event.deltaY < 0) {
            // scrollTo the previous project
            var currentProject = document.querySelector(".projects__item--active")
            var previousProject = currentProject.previousElementSibling
            var currentDot = document.querySelector(".projects__dot--active")
            var previousDot = currentDot.previousElementSibling

            // if the previous project is the first project, add the active class to the last project
            if (previousProject === null) {
                console.log("test")
            } else {
                var offset = previousProject.offsetTop
                projectContainer.scrollTo({top: offset, behavior: 'smooth'})

                // remove the active class from the current project
                currentProject.classList.remove("projects__item--active")

                // add the active class to the previous project
                previousProject.classList.add("projects__item--active")

                // remove the active class from the current dot
                currentDot.classList.remove("projects__dot--active")

                // add the active class to the previous dot
                previousDot.classList.add("projects__dot--active")
            }
        }
        else if (event.deltaY > 0) {
            // scrollTo the next project
            var currentProject = document.querySelector(".projects__item--active")
            var nextProject = currentProject.nextElementSibling
            var currentDot = document.querySelector(".projects__dot--active")
            var nextDot = currentDot.nextElementSibling

            if (nextProject === null) {
                return
            } else {
                var offset = nextProject.offsetTop
                projectContainer.scrollTo({top: offset, behavior: 'smooth'})

                // remove the active class from the current project
                currentProject.classList.remove("projects__item--active")

                // add the active class to the next project
                nextProject.classList.add("projects__item--active")

                // remove the active class from the current dot
                currentDot.classList.remove("projects__dot--active")

                // add the active class to the next dot
                nextDot.classList.add("projects__dot--active")
            }
        }
    })
}

function defaultFunction() {
    return
}

// case statement for the route
switch(route) {
    case 'index.html':
        home();
        break;
    case 'about.html':
        about();
        break;
    case 'portfolio.html':
        portfolio();
        break
    default:
        defaultFunction();
}