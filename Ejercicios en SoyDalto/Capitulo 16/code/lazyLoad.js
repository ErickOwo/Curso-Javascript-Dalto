"use strict";

const posts = document.querySelector(".posts");
let cont = 0;

const createPostsCode = (nombre, contenido)=>{
    const container = document.createElement("DIV");
    const name = document.createElement("H3");
    const content = document.createElement("P");
    const comments = document.createElement("DIV");
    const comment = document.createElement("INPUT");
    const btnEnviar = document.createElement("INPUT");

    comment.setAttribute("placeholder","Escribe un comentario")
    btnEnviar.type = "submit";

    container.classList.add("post");
    comments.classList.add("comments");
    comment.classList.add("comment");
    btnEnviar.classList.add("send");

    name.textContent = nombre;
    content.textContent = contenido;

    comments.appendChild(comment);
    comments.appendChild(btnEnviar);
    container.appendChild(name);
    container.appendChild(content);
    container.appendChild(comments);

    return container;
}

const loadPosts = entry =>{
    if (entry[0].isIntersecting) requestPosts(5);
}

const observer = new IntersectionObserver(loadPosts);

const requestPosts = async number =>{
    const request = await fetch("posts.txt");
    const content = await request.json();
    const arr = content.content;
    
    const fragment = document.createDocumentFragment();

    for(let i = 0; i < number; i++){
        if(arr[cont] !== undefined){
            const newPost = createPostsCode(arr[cont].nombre, arr[cont].contenido);fragment.appendChild(newPost);
            if(i == number-1) observer.observe(newPost);
            cont++;
        } else {
            if(posts.lastElementChild.id !== "no-more"){
                const noMore = document.createElement("DIV");
                noMore.id = "no-more";
                noMore.textContent = "No hay más publicaciones";
                posts.appendChild(noMore);
                break;
            }
        }
    }
    posts.appendChild(fragment);
    
}

requestPosts(5)
