// window.addEventListener('load',() => {
//     for(let i=0;i<500;i++){
//         axios.get(`https://api.themoviedb.org/3/movie/${i}?api_key=83f9227610a6142604f957298e13a2e7`)
//         .then(result => {         
//             const contentSection = document.querySelector('.content-section');

//             const html = `
//                 <div class="contents" data-language="${result.data.spoken_languages[0].name}">
//                     <div class="movie">
//                         <div class="head">
//                             <p class="movie-name">${result.data.original_title}</p>
//                             <p class="released-data">Released : ${result.data.release_date}</p>
//                         </div>
//                         <div class="img">
//                             <img src="http://image.tmdb.org/t/p/w500${result.data.poster_path}" alt="" class="image" data-id="${i}">
//                         </div>
//                         <div class="likes_views">
//                             <p class="likes"><i class="fas fa-heart"></i> ${result.data.vote_count} </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p class="views"><i class="fas fa-eye"></i> 100000</p>
//                         </div>
//                     </div>       
//                 </div>
//             `
//             contentSection.innerHTML += html;
//         })
//         .catch(err => {return ''});
//     }
// })