const movies = [
    {
        title: "Batman",
        img: 'https://upload.wikimedia.org/wikipedia/uk/a/a4/65_%28%D1%84%D1%96%D0%BB%D1%8C%D0%BC%29_-_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg',
        desc: 'Cool film',
        rate: 4
    },
    {
        title: "Harry Potter and DOBI",
        img: 'https://upload.wikimedia.org/wikipedia/uk/a/a4/65_%28%D1%84%D1%96%D0%BB%D1%8C%D0%BC%29_-_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg',
        desc: 'Cool film about magic',
        rate: 5
    }
]
const movieBox = document.querySelector('.movies');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add("movie-card")
    card.innerHTML = `
    <img src=${movie.img} alt=${movie.title}>
    <h3>Title: ${movie.title}</h3>
    `;
    card.addEventListener("click", () => {
        modal.classList.add("active");
        modalImg.src = movie.img;
    }
    );

    movieBox.appendChild(card);
}
);





closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});


modal.addEventListener("click", (e) => {
if(e.target===modal){
    modal.classList.remove("active");
}
});

document.addEventListener("keydown", (event) => {
if(event.key==='Escape'){
    modal.classList.remove("active");
}
});