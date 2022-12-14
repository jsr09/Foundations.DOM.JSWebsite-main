//userProfile is now assigned user-profile ID in the HTML doc
let userProfile = document.body.querySelector("#user-profile");
//let container creates a div element in html I will use as the overall container

const myButton = document.querySelector('#math-button');
//arrow style function below
myButton.addEventListener('click', () => { 
    console.log('it was clicked!');
    myButton.style.backgroundColor = 'red';
})



let container = document.createElement("div");
    container.style.backgroundColor = "#f2f2f2";
    container.style.height = "500px";
    container.style.width = "750px";
    container.style.textAlign = "center";
    container.style.fontSize = "25px";
    // container.innerHTML = "CONTAINER"
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.margin = "auto";
    container.style.marginTop = "100px"
    container.style.padding = "25px";

let heading = document.createElement("div");
    heading.style.backgroundColor = "#ccffff";
    heading.style.height = "100px";
    heading.style.width = "100%";
    heading.style.display ="flex";   
    heading.innerHTML = "HEADING";

let headingLF = document.createElement("p")
let headingRT= document.createElement("p")


let main = document.createElement("div")
    // main.innerHTML = "MAIN";
    main.style.backgroundColor = "#ffe6b3";
    main.style.height = "100%";
    main.style.borderBottomRightRadius = "25px"
    main.style.borderBottomLeftRadius = "25px"
    main.style.display = "flex"
    // main.position = "relative"



let mainParLF = document.createElement("p")
    mainParLF.style.backgroundColor = "#ff66a3"
    mainParLF.style.height = "100%"
    mainParLF.style.width = "50%"
    mainParLF.style.borderBottomLeftRadius = "25px"
    


let mainParRT = document.createElement("p")
    mainParRT.style.backgroundColor = "#66a3ff"
    mainParRT.style.height = "100%"
    mainParRT.style.width = "50%"
    mainParRT.style.borderBottomRightRadius = "25px"
    // mainParRT.position = "absolute"
    // mainParRT.marginTop = "0"

userProfile.appendChild(container);
container.appendChild(heading);
container.appendChild(main);
main.appendChild(mainParLF);
main.appendChild(mainParRT);
