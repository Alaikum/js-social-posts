const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


console.log(posts)
// creo i div e li appendo   IDEA TROPPO LUNGA
// const containerEl= document.getElementById('container')
// const divPost=document.createElement('div')
// const divPostHeader=document.createElement('div')
// const divPostMeta=document.createElement('div')
// const divpostMetaIcon=document.createElement('div')
// const divpostMetaData=document.createElement('div')
// divPostHeader.append(divPostMeta)
// divPostMeta.append(divUno,divDue)
// divPost.append(divPostHeader)
// console.log(divPost)
// containerEl.append(divPost)




const divElement = document.getElementById('container')


//  ciclo per stampare i dati 
posts.forEach(onLoop)

// funzione per  stampare i dati 
function onLoop(posts) {

    let imageAuthor=posts.author.image
 if(posts.author.image==null){imageAuthor=''}
    divElement.innerHTML += `  <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${imageAuthor}" alt="${posts.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${posts.author.name}</div>
                <div class="post-meta__time">${posts.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${posts.content}</div>
    <div class="post__image">
        <img src="${posts.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#/" data-postid="${posts.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${posts.likes}</b> persone
            </div>
        </div> 
    </div>            
</div> `


}

// Milestone 3
// Se clicchiamo sul tasto ???Mi Piace??? cambiamo il colore al 
// testo del bottone e incrementiamo il counter dei likes relativo.
//  Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// raccolgo tutti i bottone 
const buttonElement = document.querySelectorAll('.like-button')
const likeCounter = document.querySelectorAll('.js-likes-counter')

const id=[]

// per ogni bottone do il click e aumento contatore pusho ID in const id
buttonElement.forEach(function (element, i) {
    element.addEventListener('click', function () {
        this.classList.toggle('like__unlike');
        likeCounter[i].innerHTML = posts[i].likes + 1
        // console.log(posts[i].id)
        id.push(posts[i].id)
        console.log(id)
    });
})

console.log(id)

