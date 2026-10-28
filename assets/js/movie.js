
//================Arrows/Chevron Code==================//
let left_btn =document.getElementsByClassName('bi-chevron-left')[0];
let right_btn =document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');

left_btn.addEventListener('click', ()=>{
    cards.scrollLeft -= 140;
})

right_btn.addEventListener('click', ()=>{
    cards.scrollLeft += 140;
})

//======================Cards Popular Section================================//

let json_url = "../js/movieinfo.json";

fetch(json_url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((ele, i) => {
    let { name, label, type, date, sposter, bposter, genre, url, comment } = ele;
      let card = document.createElement('a');
      card.classList.add('card');
      card.href = url;
      card.innerHTML =`
      <img src="${bposter}" alt="${name}" class="poster">
          <div class="rest_card">
            <img src="${sposter}" alt="">
            <div class="cont">
              <h4>${name}</h4>
              <div class="sub">
                <p>${genre}, ${date}</p>
                <h3><span>${label}</span> <i class="bi bi-star-fill"></i></h3>
              </div>
            </div>
            </div>
      `

      cards.appendChild(card);
    });

    document.getElementById('title').innerText = data[0].name;
    document.getElementById('gen').innerText = data [0].genre;
    document.getElementById('date').innerText = data [0].date;
    document.getElementById('rate').innerHTML = `<span> ${data[0].label}</span> <i class="bi bi-star-fill">`;

    //=======================Search Data============================================================================
    data.forEach( element => {
    let { name, label, type, date, sposter, bposter, genre, url } = element;
      let card = document.createElement('a');
      card.classList.add('card');
      card.href = url;
      card.innerHTML =`
      <img src="${bposter}" alt="">
        <div class="cont">
            <H3>${name}</H3>
            <p>${genre}, ${date}, <span> ${label} </span> <i class="bi bi-star-fill"></i></p>
        </div>
      `


        search.appendChild(card);

    //=======================Search Filter=========================================================================

    search_input.addEventListener('keyup', ()=> {
        let filter = search_input.value.toUpperCase();
        let a = search.getElementsByTagName('a');

        for (let index = 0; index < a.length; index++) {
            let b = a[index].getElementsByClassName('cont')[0];

            // console.log(a.textContent)
            let TextValue = b.textContent || b.innerText;
            if (TextValue.toUpperCase().indexOf(filter) > -1) {
                a[index].style.display = "flex";
                search.style.visibility = "visible";
                search.style.opacity = 1;
            } else {
                a[index].style.display = "none";
                
            }
            if (search_input.value ==0) {
                search.style.visibility = "hidden";
                search.style.opacity = 0;
            }
        }
    })
  })

  //=========================Video Button==================================================================================
    //let video = document.getElementsByTagName('video')[0];
    //let play = document.getElementById('play');
    //play.addEventListener('click', ()=> {
      //  if (video.paused) {
       // video.play();
       // play.innerHTML = `Pause <i class="bi bi-pause-fill"></i>`
    //} else {
      //  video.pause();
      //  play.innerHTML = `Play <i class="bi bi-play-fill"></i>`
   // }
//})
//This is old code to pause the Tailer playing on screen it stil works but new code send video straight to media player down below
// Where it says (Media Player Button)

//===================Cinematics===================================================================================

    let cinematics = document.getElementById('cinematics');
    let model = document.getElementById('model');
    let bts = document.getElementById('bts');
    
//---------------ID Links--------------------------------------
    cinematics.addEventListener('click', ()=> {
        cards.innerHTML = '';

        let cinematics_array = data.filter(ele => {
            return ele.type === "cinematics";  //the ele. (type) is going off the json file "type: (placeholder)"
        });
        
        cinematics_array.forEach((ele, i) => {
    let { name, label, type, date, sposter, bposter, genre, url } = ele;
      let card = document.createElement('a');
      card.classList.add('card');
      card.href = url;
      card.innerHTML =`
      <img src="${bposter}" alt="${name}" class="poster">
          <div class="rest_card">
            <img src="${sposter}" alt="">
            <div class="cont">
              <h4>${name}</h4>
              <div class="sub">
                <p>${genre}, ${date}</p>
                <h3><span>${label}</span> <i class="bi bi-star-fill"></i></h3>
              </div>
            </div>
            </div>
      `

      cards.appendChild(card);
    }); //very important to watch brackets

    }) // this are important brackets also
   //----------------------3d Model-----------------
    model.addEventListener('click', ()=> {
        cards.innerHTML = '';

        let model_array = data.filter(ele => {
            return ele.type === "model";  //the ele. (type) is going off the json file "type: (placeholder)"
        });
        
        model_array.forEach((ele, i) => {
    let { name, label, type, date, sposter, bposter, genre, url } = ele;
      let card = document.createElement('a');
      card.classList.add('card');
      card.href = url;
      card.innerHTML =`
      <img src="${bposter}" alt="${name}" class="poster">
          <div class="rest_card">
            <img src="${sposter}" alt="">
            <div class="cont">
              <h4>${name}</h4>
              <div class="sub">
                <p>${genre}, ${date}</p>
                <h3><span>${label}</span> <i class="bi bi-star-fill"></i></h3>
              </div>
            </div>
            </div>
      `

      cards.appendChild(card);



      
    }); //very important to watch brackets

    }) // this are important brackets also
    bts.addEventListener('click', ()=> {
        cards.innerHTML = '';

        let bts_array = data.filter(ele => {
            return ele.type === "bts";  //the ele. (type) is going off the json file "type: (placeholder)"
        });
        
        bts_array.forEach((ele, i) => {
    let { name, label, type, date, sposter, bposter, genre, url } = ele;
      let card = document.createElement('a');
      card.classList.add('card');
      card.href = url;
      card.innerHTML =`
      <img src="${bposter}" alt="${name}" class="poster">
          <div class="rest_card">
            <img src="${sposter}" alt="">
            <div class="cont">
              <h4>${name}</h4>
              <div class="sub">
                <p>${genre}, ${date}</p>
                <h3><span>${label}</span> <i class="bi bi-star-fill"></i></h3>
              </div>
            </div>
            </div>
      `

      cards.appendChild(card);
    }); //very important to watch brackets

    }) // this are important brackets also



  });

//=====================================Rows Oustide Box===========================================

function renderCards(target, arr) {
  if (!target) return;
  target.innerHTML = '';

  arr.forEach((ele) => {
    let { name, label, date, sposter, bposter, genre, url } = ele;

    let card = document.createElement('a');
    card.classList.add('card');
    card.href = url;
    card.innerHTML = `
      <img src="${bposter}" alt="${name}" class="poster">
      <div class="rest_card">
        <img src="${sposter}" alt="">
        <div class="cont">
          <h4>${name}</h4>
          <div class="sub">
            <p>${genre}, ${date}</p>
            <h3><span>${label}</span> <i class="bi bi-star-fill"></i></h3>
          </div>
        </div>
      </div>
    `;
    target.appendChild(card);
  });
}

function hookArrows(leftEl, rightEl, cardsEl) {
  if (!leftEl || !rightEl || !cardsEl) return;
  leftEl.addEventListener('click', () => cardsEl.scrollLeft -= 140);
  rightEl.addEventListener('click', () => cardsEl.scrollLeft += 140);
}

//This is to function everything outside the box


//Bottom Arrows
let cato_bx = document.getElementById('cato_bx');
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');

left_scroll.addEventListener('click', () => {
  cato_bx.scrollLeft -= 100;
});

right_scroll.addEventListener('click', () => {
  cato_bx.scrollLeft += 100;
});

// BottomBottom Arrows
let mvoes_bx_1 = document.getElementById('mvoes_bx_1');
let left_scroll1 = document.getElementById('left_scroll1');
let right_scroll1 = document.getElementById('right_scroll1');

left_scroll1.addEventListener('click', () => {
  mvoes_bx_1.scrollLeft -= 150;
});

right_scroll1.addEventListener('click', () => {
  mvoes_bx_1.scrollLeft += 150;
});

//Catolog Part 2 
// year and a-z box start

let year = document.getElementById('year');
let a_z = document.getElementById('a_z');

year.addEventListener('click', () => {
  year.classList.toggle('show_year1')
});
a_z.addEventListener('click', () => {
  a_z.classList.toggle('show_year1')
});

//video Control Start
//Media Player Home Menu Button

let plays = document.getElementById('play');
let videos = document.getElementById('video');
let play_btn = document.getElementById('play_btn');


play_btn.addEventListener('click', () => { //This is Top Watch Button Scroll To Play Video
  videos.play();
  plays.classList.add('bi-pause-fill'); // Pause
  plays.classList.remove('bi-play-fill'); //Play

});

plays.addEventListener('click',() => {
  if(videos.paused || videos.currentTime <= 0) {
    plays.classList.add('bi-pause-fill'); // Pause
    plays.classList.remove('bi-play-fill'); //play
    videos.play();
  } else{
    plays.classList.remove('bi-pause-fill'); // Pause
    plays.classList.add('bi-play-fill'); //play
    videos.pause();
  }
});

//Video Player 
//Video Update Slide Time Update

videos.addEventListener('timeupdate', () => {
  //start timer
  let start_time =document.getElementById('start_time'); 
  let end_time =document.getElementById('end_time');
  let video_duration = videos.duration;
  let min = Math.floor(video_duration / 60);
  let hour = Math.floor(min / 60);
  let sec = Math.floor(video_duration % 60);
  let video_current_time = videos.currentTime;
 

  let start_min = Math.floor(video_current_time / 60); //Video Math Connect
  let start_sec = Math.floor(video_current_time % 60);
  let start_hour = Math.floor(start_min / 60);

  if (start_min < 10) { //min time
    start_min = "0" + start_min;
  }
  if (start_sec < 10){ //sec time
    start_sec = "0" + start_sec;
  }
  start_time.innerText = start_min + ":" + start_sec;

  if (start_hour < 10) {//hour time
    start_hour = "0" + start_hour;
  }
  if (start_min == 60 || start_min > 60) {
  start_time.innerText = start_hour + ":" + start_min + ":" + start_sec;

  }
  //end timer
  let end_min = min - start_min;
  let end_sec = video_duration - start_sec;
  let end_hour = hour - start_hour;

  let end_mins = Math.floor(end_min % 60);
  if (end_mins < 10){
      end_mins = "0" + end_mins;
  }
  let end_secs = Math.floor(end_sec % 60);
  if (end_secs < 10) {
      end_secs = "0" + end_secs;
  }    
  let end_hours = Math.floor(end_min / 60);
   if (end_hours < 10) {
       end_hours = "0" + end_hour;
  }    
 end_time.innerText = "-" + end_mins + ":" + end_secs;

      if (end_min == 60 || end_min > 60) {
  end_time.innerText = "-" + end_hours + ":" + end_mins + ":" + end_secs;

  }

  //slider code (seek bar Code)

  let seek = document.getElementById('seek');
let seek_2 = document.getElementById('seek_2');
let seek_dot = document.getElementById('seek_dot');

let progressbar = parseInt((videos.currentTime / videos.duration)*100);

seek.value = progressbar;
let seekbar = seek.value;
seek_2.style.width = `${seekbar}%`;
seek_dot.style.left = `${seekbar}%`;

//seek bar value change (slider code function)
let sec_30 = document.getElementById('sec_30');

  seek.addEventListener('change', () => {
    videos.currentTime = seek.value * videos.duration / 100;
    sec_30.addEventListener('click', () => {
      videos.currentTime = seek.value * ((videos.duration - 10)/ 100)
    });
  })

  //video and event
  videos.addEventListener('ended',() => {
    plays.classList.remove('bi-pause-fill'); // Pause
    plays.classList.add('bi-play-fill'); //play
  })
  
});

// volume change

let start_seekbar_end = document.querySelector('.start_seekbar_end');
let cc_vol_screen = document.querySelector('.cc_vol_screen');
 let vol = document.getElementById('vol');
 let vol_icon = document.getElementById('vol_icon');

 vol_icon.addEventListener('click', ()=> {
   cc_vol_screen.classList.toggle('cc_vol');
   start_seekbar_end.classList.toggle('start_seekbar');
   vol.classList.toggle('input_vol');
 });

 vol.addEventListener('change', ()=> { 
  if (vol.value == 0){
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill'); //volume mute
    vol_icon.classList.add('bi-volume-off-fill');
  }
  if (vol.value > 0){
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.add('bi-volume-down-fill'); //volume low
    vol_icon.classList.remove('bi-volume-off-fill');
  }
  if (vol.value > 50){
    vol_icon.classList.add('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill'); //volume high
    vol_icon.classList.remove('bi-volume-off-fill');
  }

  let vol_a = vol.value;
  videos.volume = vol_a / 100; // volume
});

//Full Screen Button 

let full_screen = document.getElementById('full_screen');
full_screen.addEventListener('click', () => {
  videos.requestFullscreen();
});

//Video Box start
//Media Player Options Side Panel

let title_video = document.getElementsByClassName('title_video');
let video_1 = document.getElementsByClassName('video_1');
let watchIntroBtn = document.getElementById('watch_intro');

//title_video[0].style.color = "red";

video_1[0].addEventListener('click', () => {
  videos.src="/Fvideos/Web_Videos/PermaFrost_Vids/Cutscene_Intro - Final_1_Compressed_Web.mp4";//video input
  videos.play();
  title_video[0].innerText = "PermaFrost Intro"; //Title Placement
  plays.classList.add('bi-pause-fill'); // Pause
  plays.classList.remove('bi-play-fill'); //play
});
video_1[1].addEventListener('click', () => {
  videos.src="/Fvideos/Web_Videos/PermaFrost_Vids/Cutscene_B - Final_Ending_1_Compressed_Web.mp4";//video input
  videos.play();
  title_video[0].innerText = "PermaFrost Final Level"; //Title Placement
  plays.classList.add('bi-pause-fill'); // Pause
  plays.classList.remove('bi-play-fill'); //play
});
 
video_1[2].addEventListener('click', () => {
  videos.src="/Fvideos/Web_Videos/PermaFrost_Vids/Cutscene_A - Final_Middle_1_Compressed_Web.mp4";//video input
  videos.play();
  title_video[0].innerText = "PermaFrost Finale"; //Title Placement
  plays.classList.add('bi-pause-fill'); // Pause
  plays.classList.remove('bi-play-fill'); //play
});
// INTRO BUTTON
function playIntro() {
  videos.src="/Fvideos/Web_Videos/PermaFrost_Vids/Cutscene_Intro - Final_1_Compressed_Web.mp4";
  videos.play();
  title_video[0].innerText = "PermaFrost Intro";
  plays.classList.add('bi-pause-fill');
  plays.classList.remove('bi-play-fill');
}
video_1[0].addEventListener('click', playIntro);

watchIntroBtn.addEventListener('click', (e) => {
  e.preventDefault(); // stops page jump
  playIntro();
});

// Video Reccomendation end



//==================================== Movie Section ========================================
  //example
  // {
  //   id: 1,
  //   img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Chipbag_Wallpaper_1920.png",
  //   title: "Ferg Chipbag",// Title Of Item
  //   letter: "F",// First Letter
  //   genre1: "modeling", // model - modeling
  //   genre2: "texturing", // texture - texturing
  //   genre3: "cinematic", //cinematic - cinematic
  //   genre4: "behindsc",//behind Scenes - behindsc
  //   genre5: "mocap", //MOCAP - mocap
  //   genre6: "fergco",//ferg collection - fergco
  //   genre7: "weapons", // weapons - weapons
  //   genre8: "max",//3ds max - max
  //   genre9: "spainter",//substance painter - spainter
  //   genre10: "unreal", // unreal - unreal
  //   genre11: "unity", // unity - unity
  //   genre12: "marvelous",//marvelous designer - marvelous
  //   genre13: "adobe",//Adobe Products - adobe
  //   genre14: "aftereffects",//Afer Effects - aftereffects
  //   genre15: "youtube", //youtube - youtube
  //   genre16: "animation", // animation - animation
  //   genre17: "games", // games
  //   genre18: "northwest", // Northwest Vista - ALL College Stuff
  //   year: 2025, // year or date
  //   rate: 10, // rate 1-10
  //   url: "movies.html", // link
  //   tppr: "recent", // time frame from post
  //   msot: "3D Model", // what type?
  //   upload: "none" // time frame prt 2
  //   //======================ID 3====================
  // },
  
 //Side Panel End
//Movie Box

const movies = [
  {
    id: 1,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Chipbag_Wallpaper_1920.png",
    title: "Ferg Chipbag",
    letter: "F",
    genre1: "props",// props
    genre2: "none",// enviroment
    genre3: "none",//cinematic
    genre4: "none",//behind Scenes
    genre5: "none",//characters
    genre6: "fergco",//ferg collection
    genre7: "none",
    genre8: "max",//3ds max
    genre9: "none",//substance painter
    genre10: "none",
    genre11: "none",
    genre12: "none",//marvelous designer
    genre13: "nonee",//Adobe Products
    genre14: "none",//Afer Effects
    genre15: "nonee",
    genre16: "none",
    genre17: "none",
    //genre18: "northwest",
    year: "3D Model 2025",
    year_bx: 2025, // year on code behind card in JS
    rate: 5,
    url: "movies.html",
    tppr: "recent",
    msot: "3D Model",
    upload: "none",
    video: "/Fvideos/Web_Videos/NW_Vista_Portfolio_Vids/FergChipbag_360Render.mp4",
    //======================ID 1====================
  },
  
  {
    id: 2,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/BottleFull_Wallpaper_1920.png",
    title: "Ferg Full Wine Bottle",
    letter: "F",
    genre1: "props",
    genre2: "none",
    genre3: "none",
    genre4: "none",//behind Scenes
    genre5: "none",
    genre6: "fergco",//ferg collection
    genre7: "none",
    genre8: "max",//3ds max
    genre9: "none",//substance painter
    genre10: "none",
    genre11: "none",
    genre12: "none",//marvelous designer
    genre13: "nonee",//Adobe Products
    genre14: "none",//Afer Effects
    genre15: "none",
    genre16: "none",
    genre17: "none",
    //genre18: "northwest",
    year: "3D Model 2025",
    year_bx: 2025, // year on code behind card in JS
    rate: 5,
    url: "movies.html",
    tppr: "recent",
    msot: "3D Model",
    upload: "none",
    video: "/Fvideos/Web_Videos/NW_Vista_Portfolio_Vids/FergWineBottleFull_360Render.mp4"
    //======================ID 2====================
  },

  {
    id: 3,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/BottleBroken_Wallpaper_1920.png",
    title: "Ferg Broken Wine Bottle",
    letter: "F",
    genre1: "props",
    genre2: "none",
    genre3: "none",
    genre4: "none",//behind Scenes
    genre5: "none",
    genre6: "fergco",//ferg collection
    genre7: "weapons",
    genre8: "max",//3ds max
    genre9: "none",//substance painter
    genre10: "none",
    genre11: "none",
    genre12: "none",//marvelous designer
    genre13: "none",//Adobe Products
    genre14: "none",//Afer Effects
    genre15: "none",
    genre16: "none",
    genre17: "none",
    //genre18: "northwest",
    year: "Weapon 2025",
    year_bx: 2025, // year on code behind card in JS
    rate: 5,
    url: "movies.html",
    tppr: "recent",
    msot: "3D Model",
    upload: "none",
    video: "/Fvideos/Web_Videos/NW_Vista_Portfolio_Vids/FergWineBottleBroken_360Render.mp4"
    //======================ID 4====================
  },
  
  {
    id: 4,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/CherryBlossomTree_Wallpaper_1920.png",
    title: "Cherry Blossom Tree",
    letter: "C",
    genre1: "none",//Props
    genre2: "enviroment",//enviroment
    genre3: "none",
    genre4: "none",//behind Scenes
    genre5: "none",
    genre6: "none",//ferg collection
    genre7: "none",
    genre8: "max",//3ds max
    genre9: "none",//substance painter
    genre10: "none",
    genre11: "none",
    genre12: "none",//marvelous designer
    genre13: "none",//Adobe Products
    genre14: "none",//Afer Effects
    genre15: "none",
    genre16: "none",
    genre17: "none",
    //genre18: "northwest",
    year: "3D Model 2025",
    year_bx: 2025, // year on code behind card in JS
    rate: 8,
    url: "movies.html",
    tppr: "recent",
    msot: "3D Model",
    upload: "none",
    video: "/Fvideos/Web_Videos/NW_Vista_Portfolio_Vids/CherryBlossomTree_360Render.mp4"
    //======================ID 5====================
  },
  
  {
    id: 5,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Lamp_Wallpaper_1920.png",
    title: "Old Vintage Lamp",
    letter: "O",
    genre1: "props",
    genre2: "none",
    genre3: "none",
    genre4: "none",//behind Scenes
    genre5: "none",
    genre6: "none",//ferg collection
    genre7: "none",
    genre8: "max",//3ds max
    genre9: "none",//substance painter
    genre10: "none",
    genre11: "none",
    genre12: "none",//marvelous designer
    genre13: "none",//Adobe Products
    genre14: "none",//Afer Effects
    genre15: "none",
    genre16: "none",
    genre17: "none",
    //genre18: "northwest",
    year: "3D Model 2025",
    year_bx: 2025, // year on code behind card in JS
    rate: 6,
    url: "movies.html",
    tppr: "recent",
    msot: "3D Model",
    upload: "none",
    video: "/Fvideos/Web_Videos/NW_Vista_Portfolio_Vids/Lamp_360Render.mp4"
    //======================ID 6====================
  },
  
  {
    id: 6,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Bomb_Wallpaper_1920.png",
    title: "Sticky Bomb",
    letter: "S",
    genre1: "props",
    genre2: "none",
    genre3: "none",
    genre4: "none",//behind Scenes
    genre5: "none",
    genre6: "none",//ferg collection
    genre7: "none",
    genre8: "max",//3ds max
    genre9: "none",//substance painter
    genre10: "none",
    genre11: "none",
    genre12: "none",//marvelous designer
    genre13: "none",//Adobe Products
    genre14: "none",//Afer Effects
    genre15: "none",
    genre16: "none",
    genre17: "none",
    //genre18: "northwest",
    year: "3D Model 2025",
    year_bx: 2025, // year on code behind card in JS
    rate: 5,
    url: "movies.html",
    tppr: "recent",
    msot: "3D Model",
    upload: "none",
    video: "/Fvideos/Web_Videos/NW_Vista_Portfolio_Vids/StickyBomb_360Render.mp4"
    //======================ID 6====================
  },
  
  {
    id: 7,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Safe_Wallpaper_1920.png",
    title: "Safe",
    letter: "S",
    genre1: "prop",
    genre2: "none",
    genre3: "none",
    genre4: "none",//behind Scenes
    genre5: "none",
    genre6: "none",//ferg collection
    genre7: "none",
    genre8: "max",//3ds max
    genre9: "none",//substance painter
    genre10: "none",
    genre11: "none",
    genre12: "none",//marvelous designer
    genre13: "none",//Adobe Products
    genre14: "none",//Afer Effects
    genre15: "none",
    genre16: "none",
    genre17: "none",
    //genre18: "northwest",
    year: "3D Model 2025",
    year_bx: 2025, // year on code behind card in JS
    rate: 5,
    url: "movies.html",
    tppr: "recent",
    msot: "3D Model",
    upload: "none",
    video: "/Fvideos/Web_Videos/NW_Vista_Portfolio_Vids/Safe_360Render.mp4"
    //======================ID 7====================
  },
  
  {
    id: 8,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/BackPack_Wallpaper_1920.png",
    title: "Ferg Backpack",
    letter: "F",
    genre1: "props",
    genre2: "none",
    genre3: "none",
    genre4: "none",//behind Scenes
    genre5: "none",
    genre6: "fergco",//ferg collection
    genre7: "none",
    genre8: "max",//3ds max
    genre9: "none",//substance painter
    genre10: "none",
    genre11: "none",
    genre12: "none",//marvelous designer
    genre13: "none",//Adobe Products
    genre14: "none",//Afer Effects
    genre15: "none",
    genre16: "none",
    genre17: "none",
    //genre18: "northwest",
    year: "3D Model 2025",
    year_bx: 2025, // year on code behind card in JS
    rate: 6,
    url: "movies.html",
    tppr: "recent",
    msot: "3D Model",
    upload: "none",
    video: "/Fvideos/Web_Videos/NW_Vista_Portfolio_Vids/Backpack_360Render.mp4"
    //======================ID 8====================
  },
  
  {
    id: 9,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/OldLambo_Wallpaper_1920.png",
    title: "Intero Lambo",
    letter: "I",
    genre1: "None",
    genre2: "none",
    genre3: "none",
    genre4: "none",//behind Scenes
    genre5: "none",
    genre6: "none",//ferg collection
    genre7: "none",
    genre8: "vehicles",//3ds max
    genre9: "none",//substance painter
    genre10: "none",
    genre11: "none",
    genre12: "none",//marvelous designer
    genre13: "none",//Adobe Products
    genre14: "none",//Afer Effects
    genre15: "none",
    genre16: "none",
    genre17: "none",
   // genre18: "northwest",
    year: "3D Model 2025",
    year_bx: 2025, // year on code behind card in JS
    rate: 5,
    url: "movies.html",
    tppr: "recent",
    msot: "3D Model",
    upload: "none",
    video: "/Fvideos/Web_Videos/NW_Vista_Portfolio_Vids/OldLambo_360Render.mp4"
    //======================ID 9====================
  },
  
  {
    id: 10,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/House_Wallpaper_1920.png",
    title: " Intero Small Garage ",
    letter: "I",
    genre1: "none",
    genre2: "enviroment",
    genre3: "none",
    genre4: "none",//behind Scenes
    genre5: "none",
    genre6: "none",//ferg collection
    genre7: "none",
    genre8: "max",//3ds max
    genre9: "none",//substance painter
    genre10: "none",
    genre11: "none",
    genre12: "none",//marvelous designer
    genre13: "none",//Adobe Products
    genre14: "none",//Afer Effects
    genre15: "none",
    genre16: "none",
    genre17: "none",
    //genre18: "northwest",
    year: "3D Model 2025",
    year_bx: 2025, // year on code behind card in JS
    rate: 5,
    url: "movies.html",
    tppr: "recent",
    msot: "3D Model",
    upload: "none",
    video: "/Fvideos/Web_Videos/NW_Vista_Portfolio_Vids/SmallGarage_360Render.mp4"
    //======================ID 10==================================================================
    //Models & Intero End
    //One Last Ride Start
  },
  
    {
    id: 11,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/OLR_BikerFull_Wallpaper_1920.png",
    title: "One Last Ride - Biker",// Title Of Item
    letter: "O",// First Letter
    genre1: "none", // model -
    genre2: "none", // texture -
    genre3: "none", //cinematic -
    genre4: "none",//behind Scenes - 
    genre5: "characters", //characters -
    genre6: "none",//ferg collection - 
    genre7: "none", // weapons - 
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "none", // unreal - 
    genre11: "none", // unity -
    genre12: "none",//marvelous designer -
    genre13: "none",//Adobe Products - 
    genre14: "none",//Afer Effects - 
    genre15: "none", //youtube - 
    genre16: "none", // animation - 
    genre17: "latest", // games
    //genre18: "northwest", // Northwest Vista - ALL College Stuff
    year: "Character 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 9, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/OneLastRide_Vids/Racer_OLR_360Render.mp4"
    //======================ID 11====================
  },

    {
    id: 12,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/OLR_Lambo_Wallpaper_1920.png",
    title: "One Last Ride - Lamborghini",// Title Of Item
    letter: "O",// First Letter
    genre1: "none", // model -
    genre2: "none", // texture -
    genre3: "none", //cinematic -
    genre4: "none",//behind Scenes - 
    genre5: "none", //MOCAP -
    genre6: "fergco",//ferg collection - 
    genre7: "none", // weapons - 
    genre8: "vehicles",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "none", // unreal - 
    genre11: "none", // unity -
    genre12: "none",//marvelous designer -
    genre13: "none",//Adobe Products - 
    genre14: "none",//Afer Effects - 
    genre15: "none", //youtube - 
    genre16: "none", // animation - 
    genre17: "none", // games
    //genre18: "northwest", // Northwest Vista - ALL College Stuff
    year: "3D Model 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 9, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/OneLastRide_Vids/NewLambo_360Render.mp4"
    //======================ID 3====================
  },

    {
    id: 13,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/OLR_Helmet_Wallpaper_1920.png",
    title: "Racer - Helmet",// Title Of Item
    letter: "R",// First Letter
    genre1: "none", // model -
    genre2: "none", // texture -
    genre3: "none", //cinematic -
    genre4: "none",//behind Scenes - 
    genre5: "none", //MOCAP -
    genre6: "clothing",//clothing - 
    genre7: "none", // weapons - 
    genre8: "max",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - 
    genre11: "none", // unity -
    genre12: "none",//marvelous designer -
    genre13: "none",//Adobe Products - 
    genre14: "none",//Afer Effects - 
    genre15: "none", //youtube - 
    genre16: "none", // animation - 
    genre17: "none", // games
   // genre18: "northwest", // Northwest Vista - ALL College Stuff
    year: "3D Model 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 7, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "none", // time frame prt 2
    video: "/Fvideos/Web_Videos/OneLastRide_Vids/Helmet_OLR_360Render.mp4"
    //======================ID 3====================
  },
  

    {
    id: 14,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/OLR_Hoodie_Wallpaper_1920.png",
    title: "Racer - Hoodie",// Title Of Item
    letter: "R",// First Letter
    genre1: "modeling", // model -
    genre2: "none", // texture -
    genre3: "none", //cinematic -
    genre4: "none",//behind Scenes - 
    genre5: "none", //MOCAP -
    genre6: "clothing",//clothing - 
    genre7: "none", // weapons - 
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - 
    genre11: "none", // unity -
    genre12: "marvelous",//marvelous designer -
    genre13: "none",//Adobe Products - 
    genre14: "none",//Afer Effects - 
    genre15: "none", //youtube - 
    genre16: "none", // animation - 
    genre17: "none", // games
   // genre18: "northwest", // Northwest Vista - ALL College Stuff
    year: 2025, // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 8, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "none", // time frame prt 2
    video: "/Fvideos/Web_Videos/OneLastRide_Vids/Hoodie_OLR_360Render.mp4"
    //======================ID 3====================
  },
  

    {
    id: 15,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/OLR_Pants_Wallpaper_1920.png",
    title: "Racer - Pants",// Title Of Item
    letter: "R",// First Letter
    genre1: "modeling", // model -
    genre2: "none", // texture -
    genre3: "none", //cinematic -
    genre4: "none",//behind Scenes - 
    genre5: "none", //MOCAP -
    genre6: "clothing",//clothing - 
    genre7: "none", // weapons - 
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - 
    genre11: "none", // unity -
    genre12: "marvelous",//marvelous designer -
    genre13: "none",//Adobe Products - 
    genre14: "none",//Afer Effects - 
    genre15: "none", //youtube - 
    genre16: "none", // animation - 
    genre17: "none", // games
   // genre18: "northwest", // Northwest Vista - ALL College Stuff
    year: "3D Model 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 7, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "none", // time frame prt 2
    video: "/Fvideos/Web_Videos/OneLastRide_Vids/Pants_OLR_360Render.mp4"
    //======================ID 3====================
  },
  

    {
    id: 16,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/OLR_Shoe_Wallpaper_1920.png",
    title: "Racer - Shoes",// Title Of Item
    letter: "R",// First Letter
    genre1: "modeling", // model -
    genre2: "none", // texture -
    genre3: "none", //cinematic -
    genre4: "none",//behind Scenes - 
    genre5: "none", //MOCAP -
    genre6: "clothing",//clothing - 
    genre7: "none", // weapons - 
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - 
    genre11: "none", // unity -
    genre12: "marvelous",//marvelous designer -
    genre13: "none",//Adobe Products - 
    genre14: "none",//Afer Effects - 
    genre15: "none", //youtube - 
    genre16: "none", // animation - 
    genre17: "none", // games
   // genre18: "northwest", // Northwest Vista - ALL College Stuff
    year: "3D Model 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 8, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/OneLastRide_Vids/Shoes_OLR_360Render.mp4"
    //======================ID 3====================
  },
  
    {
    id: 17,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Perma_P1_Full_Wallpaper_1920.png",
    title: "PermaFrost - Player 1",// Title Of Item
    letter: "P",// First Letter
    genre1: "none", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "none", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "characters", //Characters - mocap
    genre6: "none",//ferg collection - fergco
    genre7: "none", // weapons - weapons
    genre8: "max",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "none", // unreal - unreal
    genre11: "none", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "Character 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 9, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/P1_360Render.mp4"
    //======================ID 3====================
  },
  
  
    {
    id: 18,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Perma_P1_SkiMask_Wallpaper_1920.png",
    title: "Player 1 - Ski Mask",// Title Of Item
    letter: "P",// First Letter
    genre1: "modeling", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "none", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "clothing",//clothing collection - clothing
    genre7: "none", // weapons - weapons
    genre8: "max",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "unity", // unity - unity
    genre12: "marvelous",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "3D Model 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 7, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "none", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/P1SkiMask_Perma_360Render.mp4"
    //======================ID 3====================
  },
  
  
    {
    id: 19,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Perma_P1_Hoodie_Wallpaper_1920.png",
    title: "Player 1 - Hoodie",// Title Of Item
    letter: "P",// First Letter
    genre1: "modeling", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "none", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "clothing",//clothing collection - clothing
    genre7: "none", // weapons - weapons
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "unity", // unity - unity
    genre12: "marvelous",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "3D Model 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 8, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "none", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/P1Hoodie_Perma_360Render.mp4"
    //======================ID 3====================
  },
  
  
    {
    id: 20,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Perma_P1_Pants_Wallpaper_1920.png",
    title: "Player 1 - Pants",// Title Of Item
    letter: "P",// First Letter
    genre1: "modeling", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "none", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "clothing",//clothing collection - clothing
    genre7: "none", // weapons - weapons
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "unity", // unity - unity
    genre12: "marvelous",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "3D Model 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 7, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "none", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/P1Pants_Perma_360Render.mp4"
    //======================ID 3====================
  },
  
  
    {
    id: 21,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Perma_Zombies_Wallpaper_1920.png",
    title: "PermaFrost - Zombies",// Title Of Item
    letter: "P",// First Letter
    genre1: "none", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "none", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "characters", //Characters - mocap
    genre6: "none",//clothing collection - clothing
    genre7: "none", // weapons - weapons
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "none", // unreal - unreal
    genre11: "unity", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "Character 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 9, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/S1_Zombie_360Render.mp4"
    //======================ID 3====================
  },
  
  
    {
    id: 22,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Perma_S1_Hoodie_Wallpaper_1920.png",
    title: "Zombie - Hoodie",// Title Of Item
    letter: "Z",// First Letter
    genre1: "modeling", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "none", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "clothing",//clothing collection - clothing
    genre7: "none", // weapons - weapons
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "unity", // unity - unity
    genre12: "marvelous",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "3D Model 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 7, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "none", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/S1ZombieHoodie_Perma_360Render.mp4"
    //======================ID 3====================
  },
  
  
    {
    id: 23,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Perma_S1_Pants_Wallpaper_1920.png",
    title: "Zombie - Pants",// Title Of Item
    letter: "Z",// First Letter
    genre1: "modeling", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "none", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "clothing",//clothing collection - clothing
    genre7: "none", // weapons - weapons
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "unity", // unity - unity
    genre12: "marvelous",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: 2025, // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 7, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "none", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/S1ZombiePants_Perma_360Render.mp4"
    //======================ID 3====================
  },
  
  
    {
    id: 24,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Perma_Pistol_Wallpaper_1920.png",
    title: "M1911 Pistol",// Title Of Item
    letter: "M",// First Letter
    genre1: "modeling", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "none", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "none",//ferg collection - fergco
    genre7: "weapons", // weapons - weapons
    genre8: "max",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "unity", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "Weapon 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 8, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/M1911Pistol_Gun_360Render.mp4"
    //======================ID 3====================
  },
  
    {
    id: 25,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Perma_Revolver_Wallpaper_1920.png",
    title: "Revolver",// Title Of Item
    letter: "R",// First Letter
    genre1: "modeling", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "none", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "none",//ferg collection - fergco
    genre7: "weapons", // weapons - weapons
    genre8: "max",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "unity", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "Weapon 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 8, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/Revolver_Gun_360Render.mp4"
    //======================ID 3====================
  },
  
    {
    id: 26,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Perma_Shotgun_Wallpaper_1920.png",
    title: "Shotgun",// Title Of Item
    letter: "S",// First Letter
    genre1: "modeling", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "none", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "none",//ferg collection - fergco
    genre7: "weapons", // weapons - weapons
    genre8: "max",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "unity", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "Weapon 2025", // year or date
    year_bx: 2025, // year on code behind card in JS
    rate: 8, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/Shotgun_Gun_360Render.mp4"
    //======================ID 3====================
  },
  
    {
    id: 27,
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Perma_FlameThrower_Wallpaper_1920.png",
    title: "FlameThrower",// Title Of Item
    letter: "F",// First Letter
    genre1: "modeling", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "none", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "none",//ferg collection - fergco
    genre7: "weapons", // weapons - weapons
    genre8: "max",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "unity", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "Weapon 2025", // year on card
    year_bx: 2026, // year on code behind card in JS
    rate: 8, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/Flamethrower_Gun_360Render.mp4"
    //======================ID 3====================
  },
  // This IS Content That Is NOT MODELS (cutscenes, videos, behind scenes & etc)
    {
    id: 27,
    img: "/Fimages/Wallpapers_Artwork/PermaFrost/PermaFrost_1920/PermaFrostMain_Intro--1920.png",
    title: "PermaFrost Intro",// Title Of Item
    letter: "P",// First Letter
    genre1: "none", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "cinematic", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "none",//ferg collection - fergco
    genre7: "none", // weapons - weapons
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "none", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "Cinematic 2025", // year on card
    year_bx: 2025, // year on code behind card in JS
    rate: 10, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/Cutscene_Intro - Final_1_Compressed_Web.mp4"
    //======================ID 3====================
  },

    {
    id: 27,
    img: "/Fimages/Wallpapers_Artwork/PermaFrost/PermaFrost_1920/PermaFrost_FinalLvl-1920.png",
    title: "PermaFrost Final Lvl",// Title Of Item
    letter: "P",// First Letter
    genre1: "none", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "cinematic", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "none",//ferg collection - fergco
    genre7: "none", // weapons - weapons
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "none", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "Cinematic 2025", // year on card
    year_bx: 2025, // year on code behind card in JS
    rate: 10, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/Cutscene_A - Final_Middle_1_Compressed_Web.mp4"
    //======================ID 3====================
  },
  

    {
    id: 28,
    img: "/Fimages/Wallpapers_Artwork/PermaFrost/PermaFrost_1920/PhotShop_FinalCutscene2_1920.png",
    title: "PermaFrost Finale",// Title Of Item
    letter: "P",// First Letter
    genre1: "none", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "cinematic", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "none",//ferg collection - fergco
    genre7: "none", // weapons - weapons
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "none", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "Cinematic 2025", // year on card
    year_bx: 2025, // year on code behind card in JS
    rate: 10, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/PermaFrost_Vids/Cutscene_B - Final_Ending_1_Compressed_Web.mp4"
    //======================ID 3====================
  },
  

    {
    id: 29, //Insert Id Number
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/MOCAP1_Thumbnail_Final_1920.png",
    title: "MOCAP Prt 1",// Title Of Item
    letter: "M",// First Letter
    genre1: "none", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "none", //cinematic - cinematic
    genre4: "behindsc",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "none",//ferg collection - fergco
    genre7: "none", // weapons - weapons
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "none", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "BTS 2025", // year on card
    year_bx: 2025, // year on code behind card in JS
    rate: 10, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "none", // time frame prt 2
    video: "/Fvideos/Web_Videos/Behind Scenes/Final_MOCAP_1_BehindScenes.mp4"
    //======================ID 3====================
  },
  

    {
    id: 30, //Insert Id Number
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/MOCAP2_Thumbnail_Final_1920.png",
    title: "MOCAP Prt 2",// Title Of Item
    letter: "M",// First Letter
    genre1: "none", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "none", //cinematic - cinematic
    genre4: "behindsc",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "none",//ferg collection - fergco
    genre7: "none", // weapons - weapons
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "none", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "BTS 2025", // year on card
    year_bx: 2025, // year on code behind card in JS
    rate: 10, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "none", // time frame prt 2
    video: "/Fvideos/Web_Videos/Behind Scenes/MOCAP_2_Compressed_Final.mp4"
    //======================ID 3====================
  },

    {
    id: 30, //Insert Id Number
    img: "/Fimages/Wallpapers_Artwork/Intero/Biker_Intero1920.png",
    title: "Project Intero",// Title Of Item
    letter: "P",// First Letter
    genre1: "none", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "cinematic", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "none",//ferg collection - fergco
    genre7: "none", // weapons - weapons
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "none", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "Cinematic 2025", // year on card
    year_bx: 2025, // year on code behind card in JS
    rate: 10, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/NW_Vista_Portfolio_Vids/Final_Intero_Cinematic.mp4"
    //======================ID 3====================
  },

    {
    id: 31, //Insert Id Number
    img: "/Fimages/Wallpapers_Artwork/One_Last_Ride/OneLastRide1920.png",
    title: "One Last Ride",// Title Of Item
    letter: "P",// First Letter
    genre1: "none", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "cinematic", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "none",//ferg collection - fergco
    genre7: "none", // weapons - weapons
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "none", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "Cinematic 2025", // year on card
    year_bx: 2025, // year on code behind card in JS
    rate: 10, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/OneLastRide_Vids/Final_OLR_Cinematic.mp4"
    //======================ID 3====================
  },

    {
    id: 32, //Insert Id Number
    img: "/Fimages/Wallpapers_Artwork/Cards_Posters/Ferg_Portfolio_Wallapaper_1920.png",
    title: "NorthWest Vista Portfolio",// Title Of Item
    letter: "N",// First Letter
    genre1: "none", // model - modeling
    genre2: "none", // texture - texturing
    genre3: "cinematic", //cinematic - cinematic
    genre4: "none",//behind Scenes - behindsc
    genre5: "none", //MOCAP - mocap
    genre6: "none",//ferg collection - fergco
    genre7: "none", // weapons - weapons
    genre8: "none",//3ds max - max
    genre9: "none",//substance painter - spainter
    genre10: "unreal", // unreal - unreal
    genre11: "none", // unity - unity
    genre12: "none",//marvelous designer - marvelous
    genre13: "none",//Adobe Products - adobe
    genre14: "none",//Afer Effects - aftereffects
    genre15: "none", //youtube - youtube
    genre16: "none", // animation - animation
    genre17: "none", // games
    genre18: "none", // Northwest Vista - ALL College Stuff
    year: "Cinematic 2025", // year on card
    year_bx: 2025, // year on code behind card in JS
    rate: 10, // rate 1-10
    url: "movies.html", // link
    tppr: "recent", // time frame from post
    msot: "3D Model", // what type?
    upload: "latest", // time frame prt 2
    video: "/Fvideos/Web_Videos/NW_Vista_Portfolio_Vids/Final_Portfolio_NorthVista_Cinematic.mp4"
    //======================ID 3====================
  },
]

//all array copyed=========================================================================================

// Video Javascript Start
const player = document.getElementById('video');
const titleVideo = document.querySelector('.title_video');
const playIcon = document.getElementById('play');

//data info
document.addEventListener('click', (e) => {
  const card = e.target.closest('.movie_card');
  if (!card) return;

  const videoSrc = card.dataset.video;
  const title = card.dataset.title;

  // If this card has a video, do NOT follow the <a> link
  if (videoSrc && videoSrc !== 'none') {
    e.preventDefault(); // stops <a href="..."> from navigating
  } else {
    return; // no video = let it behave normally
  }

  // Update player
  const player = document.getElementById('video');
  player.src = videoSrc;
  player.load();
  player.play();

  // Update title text
  const titleVideo = document.querySelector('.title_video');
  titleVideo.innerText = title;

  // Update play icon UI
  const playIcon = document.getElementById('play');
  playIcon.classList.remove('bi-play-fill');
  playIcon.classList.add('bi-pause-fill');
});
// Video Javascript End

// Import Script For Video To Alter Directory From URL To Video
// card.classList.add('card', 'movie_card');
//   card.dataset.video = video;
//   // card.dataset.title = title;
// --This Is For Video transfering card IDs to media player--

//Props Button & Active
let props_1 = document.getElementById('props_1');   // button
let props_bx = document.getElementById('props_bx'); // box


props_1.addEventListener('click', () => {
  props_1.classList.toggle('cato_button_active');
  props_bx.classList.toggle('movie_box_active');
});


const props_array = movies.filter((e) => {
  return e.genre1 == "props";
});



props_array.forEach(element => {
  const { img, title, year, url, rate, video } = element;

  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;

  card.innerHTML = `
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6>${rate}</h6>
          </div>
        </h6>
      </div>
    </a>
  `;

  props_bx.appendChild(card);
});


//Enviroment Button & Active
let enviroment_1 = document.getElementById('enviroment_1');   // button
let enviroment_bx = document.getElementById('enviroment_bx'); // box


enviroment_1.addEventListener('click', () => {
  enviroment_1.classList.toggle('cato_button_active');
  enviroment_bx.classList.toggle('movie_box_active');
});


const enviroment_array = movies.filter((e) => {
  return e.genre2 == "enviroment";
});



enviroment_array.forEach(element => {
  const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  enviroment_bx.appendChild(card);
});

//cinematic Button & Active
let cinematic_1 = document.getElementById('cinematic_1');   // button
let cinematic_bx = document.getElementById('cinematic_bx'); // box


cinematic_1.addEventListener('click', () => {
  cinematic_1.classList.toggle('cato_button_active');
  cinematic_bx.classList.toggle('movie_box_active');
});


const cinematic_array = movies.filter((e) => {
  return e.genre3 == "cinematic";
});



cinematic_array.forEach(element => {
  const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  cinematic_bx.appendChild(card);
});

//Behind Scenes Button & Active
let behindsc_1 = document.getElementById('behindsc_1');   // button
let behindsc_bx = document.getElementById('behindsc_bx'); // box


behindsc_1.addEventListener('click', () => {
  behindsc_1.classList.toggle('cato_button_active');
  behindsc_bx.classList.toggle('movie_box_active');
});


const behindsc_array = movies.filter((e) => {
  return e.genre4 == "behindsc";
});



behindsc_array.forEach(element => {
  const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  behindsc_bx.appendChild(card);
});

//MOCAP Button & Active
let characters_1 = document.getElementById('characters_1');   // button
let characters_bx = document.getElementById('characters_bx'); // box


characters_1.addEventListener('click', () => {
  characters_1.classList.toggle('cato_button_active');
  characters_bx.classList.toggle('movie_box_active');
});


const characters_array = movies.filter((e) => {
  return e.genre5 == "characters";
});



characters_array.forEach(element => {
  const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  characters_bx.appendChild(card);
});

//Clothing Button & Active
let clothing_1 = document.getElementById('clothing_1');   // button
let clothing_bx = document.getElementById('clothing_bx'); // box


clothing_1.addEventListener('click', () => {
  clothing_1.classList.toggle('cato_button_active');
  clothing_bx.classList.toggle('movie_box_active');
});


const clothing_array = movies.filter((e) => {
  return e.genre6 == "clothing";
});



clothing_array.forEach(element => {
  const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  clothing_bx.appendChild(card);
});

//Weapons Button & Active
let weapons_1 = document.getElementById('weapons_1');   // button
let weapons_bx = document.getElementById('weapons_bx'); // box


weapons_1.addEventListener('click', () => {
  weapons_1.classList.toggle('cato_button_active');
  weapons_bx.classList.toggle('movie_box_active');
});


const weapons_array = movies.filter((e) => {
  return e.genre7 == "weapons";
});



weapons_array.forEach(element => {
  const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  weapons_bx.appendChild(card);
});

//vehicles Button & Active
let vehicles_1 = document.getElementById('vehicles_1');   // button
let vehicles_bx = document.getElementById('vehicles_bx'); // box


vehicles_1.addEventListener('click', () => {
  vehicles_1.classList.toggle('cato_button_active');
  vehicles_bx.classList.toggle('movie_box_active');
});


const vehicles_array = movies.filter((e) => {
  return e.genre8 == "vehicles";
});



vehicles_array.forEach(element => {
  const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  vehicles_bx.appendChild(card);
});

//Texture Button & Active
let texture_1 = document.getElementById('texture_1');   // button
let texture_bx = document.getElementById('texture_bx'); // box


texture_1.addEventListener('click', () => {
  texture_1.classList.toggle('cato_button_active');
  texture_bx.classList.toggle('movie_box_active');
});


const texture_array = movies.filter((e) => {
  return e.genre9 == "texture";
});



texture_array.forEach(element => {
  const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  texture_bx.appendChild(card);
});

//Post Production Engine Button & Active
let post_1 = document.getElementById('post_1');   // button
let post_bx = document.getElementById('post_bx'); // box


post_1.addEventListener('click', () => {
  post_1.classList.toggle('cato_button_active');
  post_bx.classList.toggle('movie_box_active');
});


const post_array = movies.filter((e) => {
  return e.genre10 == "post";
});



post_array.forEach(element => {
  const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  post_bx.appendChild(card);
});

//Vfx Engine Button & Active
let vfx_1 = document.getElementById('vfx_1');   // button
let vfx_bx = document.getElementById('vfx_bx'); // box


vfx_1.addEventListener('click', () => {
  vfx_1.classList.toggle('cato_button_active');
  vfx_bx.classList.toggle('movie_box_active');
});


const vfx_array = movies.filter((e) => {
  return e.genre11 == "vfx";
});



vfx_array.forEach(element => {
  const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  vfx_bx.appendChild(card);
});

// //Marvelous Desinger Button & Active
// let marvelous_1 = document.getElementById('marvelous_1');   // button
// let marvelous_bx = document.getElementById('marvelous_bx'); // box


// marvelous_1.addEventListener('click', () => {
//   marvelous_1.classList.toggle('cato_button_active');
//   marvelous_bx.classList.toggle('movie_box_active');
// });


// const marvelous_array = movies.filter((e) => {
//   return e.genre12 == "marvelous";
// });



// marvelous_array.forEach(element => {
//   const {img, title, year, url, rate} = element;
//   let card = document.createElement('div');
//   card.classList.add('card');
//   card.innerHTML 
//  = `
 
//     <a href="${url}">
//       <img src="${img}" alt="${title}">
//       <div class="content">
//         <h5>${title}</h5>
//         <h6>
//           <span>${year}</span>
//           <div class="rate">
//             <i class="fa-solid fa-heart"></i>
//             <i class="fa-solid fa-eye"></i>
//             <i class="fas fa-star"></i>
//             <h6> ${rate} </h6>
//           </div>
//         </h6>
//       </div>
//     </a>
   
//   `;

//   marvelous_bx.appendChild(card);
// });

// //Adobe Button & Active
// let adobe_1 = document.getElementById('adobe_1');   // button
// let adobe_bx = document.getElementById('adobe_bx'); // box


// adobe_1.addEventListener('click', () => {
//   adobe_1.classList.toggle('cato_button_active');
//   adobe_bx.classList.toggle('movie_box_active');
// });


// const adobe_array = movies.filter((e) => {
//   return e.genre13 == "adobe";
// });



// adobe_array.forEach(element => {
//   const {img, title, year, url, rate} = element;
//   let card = document.createElement('div');
//   card.classList.add('card');
//   card.innerHTML 
//  = `
 
//     <a href="${url}">
//       <img src="${img}" alt="${title}">
//       <div class="content">
//         <h5>${title}</h5>
//         <h6>
//           <span>${year}</span>
//           <div class="rate">
//             <i class="fa-solid fa-heart"></i>
//             <i class="fa-solid fa-eye"></i>
//             <i class="fas fa-star"></i>
//             <h6> ${rate} </h6>
//           </div>
//         </h6>
//       </div>
//     </a>
   
//   `;

//   adobe_bx.appendChild(card);
// });

// //After Effects Button & Active
// let aftereffects_1 = document.getElementById('aftereffects_1');   // button
// let aftereffects_bx = document.getElementById('aftereffects_bx'); // box


// aftereffects_1.addEventListener('click', () => {
//   aftereffects_1.classList.toggle('cato_button_active');
//   aftereffects_bx.classList.toggle('movie_box_active');
// });


// const aftereffects_array = movies.filter((e) => {
//   return e.genre14 == "aftereffects";
// });



// aftereffects_array.forEach(element => {
//   const {img, title, year, url, rate} = element;
//   let card = document.createElement('div');
//   card.classList.add('card');
//   card.innerHTML 
//  = `
 
//     <a href="${url}">
//       <img src="${img}" alt="${title}">
//       <div class="content">
//         <h5>${title}</h5>
//         <h6>
//           <span>${year}</span>
//           <div class="rate">
//             <i class="fa-solid fa-heart"></i>
//             <i class="fa-solid fa-eye"></i>
//             <i class="fas fa-star"></i>
//             <h6> ${rate} </h6>
//           </div>
//         </h6>
//       </div>
//     </a>
   
//   `;

//   aftereffects_bx.appendChild(card);
// });

// //Youtube Button & Active
// let youtube_1 = document.getElementById('youtube_1');   // button
// let youtube_bx = document.getElementById('youtube_bx'); // box


// youtube_1.addEventListener('click', () => {
//   youtube_1.classList.toggle('cato_button_active');
//   youtube_bx.classList.toggle('movie_box_active');
// });


// const youtube_array = movies.filter((e) => {
//   return e.genre15 == "youtube";
// });



// youtube_array.forEach(element => {
//   const {img, title, year, url, rate} = element;
//   let card = document.createElement('div');
//   card.classList.add('card');
//   card.innerHTML 
//  = `
 
//     <a href="${url}">
//       <img src="${img}" alt="${title}">
//       <div class="content">
//         <h5>${title}</h5>
//         <h6>
//           <span>${year}</span>
//           <div class="rate">
//             <i class="fa-solid fa-heart"></i>
//             <i class="fa-solid fa-eye"></i>
//             <i class="fas fa-star"></i>
//             <h6> ${rate} </h6>
//           </div>
//         </h6>
//       </div>
//     </a>
   
//   `;

//   youtube_bx.appendChild(card);
// });

// //Animation Button & Active
// let animation_1 = document.getElementById('animation_1');   // button
// let animation_bx = document.getElementById('animation_bx'); // box


// animation_1.addEventListener('click', () => {
//   animation_1.classList.toggle('cato_button_active');
//   animation_bx.classList.toggle('movie_box_active');
// });


// const animation_array = movies.filter((e) => {
//   return e.genre16 == "animation";
// });



// animation_array.forEach(element => {
//   const {img, title, year, url, rate} = element;
//   let card = document.createElement('div');
//   card.classList.add('card');
//   card.innerHTML 
//  = `
 
//     <a href="${url}">
//       <img src="${img}" alt="${title}">
//       <div class="content">
//         <h5>${title}</h5>
//         <h6>
//           <span>${year}</span>
//           <div class="rate">
//             <i class="fa-solid fa-heart"></i>
//             <i class="fa-solid fa-eye"></i>
//             <i class="fas fa-star"></i>
//             <h6> ${rate} </h6>
//           </div>
//         </h6>
//       </div>
//     </a>
   
//   `;

//   animation_bx.appendChild(card);
// });

// //Game Button & Active
// let games_1 = document.getElementById('games_1');   // button
// let games_bx = document.getElementById('games_bx'); // box


// games_1.addEventListener('click', () => {
//   games_1.classList.toggle('cato_button_active');
//   games_bx.classList.toggle('movie_box_active');
// });


// const games_array = movies.filter((e) => {
//   return e.genre17 == "games";
// });



// games_array.forEach(element => {
//   const {img, title, year, url, rate} = element;
//   let card = document.createElement('div');
//   card.classList.add('card');
//   card.innerHTML 
//  = `
 
//     <a href="${url}">
//       <img src="${img}" alt="${title}">
//       <div class="content">
//         <h5>${title}</h5>
//         <h6>
//           <span>${year}</span>
//           <div class="rate">
//             <i class="fa-solid fa-heart"></i>
//             <i class="fa-solid fa-eye"></i>
//             <i class="fas fa-star"></i>
//             <h6> ${rate} </h6>
//           </div>
//         </h6>
//       </div>
//     </a>
   
//   `;

//   games_bx.appendChild(card);
// });

//Game Button & Active
// let northwest_1 = document.getElementById('northwest_1');   // button
// let northwest_bx = document.getElementById('northwest_bx'); // box


// northwest_1.addEventListener('click', () => {
//   northwest_1.classList.toggle('cato_button_active');
//   northwest_bx.classList.toggle('movie_box_active');
// });


// const northwest_array = movies.filter((e) => {
//   return e.genre18 == "northwest";
// });



// northwest_array.forEach(element => {
//   const {img, title, year, url, rate} = element;
//   let card = document.createElement('div');
//   card.classList.add('card');
//   card.innerHTML 
//  = `
 
//     <a href="${url}">
//       <img src="${img}" alt="${title}">
//       <div class="content">
//         <h5>${title}</h5>
//         <h6>
//           <span>${year}</span>
//           <div class="rate">
//             <i class="fa-solid fa-heart"></i>
//             <i class="fa-solid fa-eye"></i>
//           </div>
//         </h6>
//       </div>
//     </a>
   
//   `;

//   northwest_bx.appendChild(card);
// });
//Northwest Vista Section Graded Out
// //===================Array Cards End==============================================================

//Bottom Movies Sections Start
//CODE FOR VIDEO
// card.classList.add('card', 'movie_card');
//   card.dataset.video = video;
//   card.dataset.title = title;
  
// all box section cato bx 2
let all = document.getElementById('all');

window.addEventListener('load', () => {
  movies.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
  
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  all.appendChild(card);
});
})

// latest box section==============================================
let latest = document.getElementById('latest');

let latest_array = movies.filter((e) => {
  return e.upload == "latest";
})

window.addEventListener('load', () => {
  latest_array.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  latest.appendChild(card);
});
})

// Year Box Section 2 (Bottom Section) Year 2025==========================================
let year_2025 = document.getElementById('year_2025');

let year2025 = movies.filter((e) => {
  return e.year_bx == "2025";
})

window.addEventListener('load', () => {
  year2025.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  year_2025.appendChild(card);
});
})

// Year Box Section 2 (Bottom Section) Year 2026
let year_2026 = document.getElementById('year_2026');

let year2026 = movies.filter((e) => {
  return e.year_bx == "2026"; //Year Insert Here
})

window.addEventListener('load', () => {
  year2026.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  year_2026.appendChild(card);
});
})

// Letter Box Section 2 (Bottom Section) Letter ===================================================
let letter_c = document.getElementById('letter_c');

let letterc = movies.filter((e) => {
  return e.letter == "C"; //letter Insert Here
})

window.addEventListener('load', () => {
  letterc.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  letter_c.appendChild(card);
});
})

// Letter Box Section 2 (Bottom Section) Letter
let letter_f = document.getElementById('letter_f');

let letterf = movies.filter((e) => {
  return e.letter == "F"; //letter Insert Here
})

window.addEventListener('load', () => {
  letterf.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  letter_f.appendChild(card);
});
})

// Year Box Section 2 (Bottom Section) Year 2025
let letter_i = document.getElementById('letter_i');

let letteri = movies.filter((e) => {
  return e.letter == "I"; //letter Insert Here
})

window.addEventListener('load', () => {
  letteri.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  letter_i.appendChild(card);
});
})

// Letter Box Section 2 (Bottom Section) Letter
let letter_m = document.getElementById('letter_m');

let letterm = movies.filter((e) => {
  return e.letter == "M"; //letter Insert Here
})

window.addEventListener('load', () => {
  letterm.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  letter_m.appendChild(card);
});
})

// Letter Box Section 2 (Bottom Section) Letter
let letter_o = document.getElementById('letter_o');

let lettero = movies.filter((e) => {
  return e.letter == "O"; //letter Insert Here
})

window.addEventListener('load', () => {
  lettero.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  letter_o.appendChild(card);
});
})

// Year Box Section 2 (Bottom Section) letter P
let letter_p = document.getElementById('letter_p');

let letterp_array = movies.filter((e) => {
  return e.letter == "P"; //letter Insert Here
})

window.addEventListener('load', () => {
  letterp_array.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  letter_p.appendChild(card);
});
})

// Letter Box Section 2 (Bottom Section) Letter R
let letter_r = document.getElementById('letter_r');

let letterr = movies.filter((e) => {
  return e.letter == "R"; //letter Insert Here
})

window.addEventListener('load', () => {
  letterr.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  letter_r.appendChild(card);
});
})

// Letter Box Section 2 (Bottom Section) Letter S
let letter_s = document.getElementById('letter_s');

let letters = movies.filter((e) => {
  return e.letter == "S"; //letter Insert Here
})

window.addEventListener('load', () => {
  letters.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;

  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  letter_s.appendChild(card);
});
})

// Letter Box Section 2 (Bottom Section) Letter Z
let letter_z = document.getElementById('letter_z');

let letterz = movies.filter((e) => {
  return e.letter == "Z"; //letter Insert Here
})

window.addEventListener('load', () => {
  letterz.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  letter_z.appendChild(card);
});
});

//A-Z Letter endEnd
//Rate Section ==================================================================

// Rate Box Section 2 (Bottom Section) Rate 5
let rate5 = document.getElementById('rate5');

let rate5_array = movies.filter((e) => {
  return e.rate == 5; //Rate Insert Here
})

window.addEventListener('load', () => {
  rate5_array.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  rate5.appendChild(card);
});
});

// Rate Box Section 2 (Bottom Section) Rate 6
let rate6 = document.getElementById('rate6');

let rate6_array = movies.filter((e) => {
  return e.rate == 6; //Rate Insert Here
})

window.addEventListener('load', () => {
  rate6_array.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  rate6.appendChild(card);
});
});
// Rate Box Section 2 (Bottom Section) Rate 8
let rate8 = document.getElementById('rate8');

let rate8_array = movies.filter((e) => {
  return e.rate == 8; //Rate Insert Here
})

window.addEventListener('load', () => {
  rate8_array.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  rate8.appendChild(card);
});
});

// Rate Box Section 2 (Bottom Section) Rate 7
let rate7 = document.getElementById('rate7');

let rate7_array = movies.filter((e) => {
  return e.rate == 7; //Rate Insert Here
})

window.addEventListener('load', () => {
  rate7_array.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  rate7.appendChild(card);
});
});

// Rate Box Section 2 (Bottom Section) Rate 9
let rate9 = document.getElementById('rate9');

let rate9_array = movies.filter((e) => {
  return e.rate == 9; //Rate Insert Here
})

window.addEventListener('load', () => {
  rate9_array.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  rate9.appendChild(card);
});
});

// Rate Box Section 2 (Bottom Section) Rate 10
let rate10 = document.getElementById('rate10');

let rate10_array = movies.filter((e) => {
  return e.rate >= 10; //Rate Insert Here
})

window.addEventListener('load', () => {
  rate10_array.forEach(element => {
   const {img, title, year, url, rate, video} = element;
  let card = document.createElement('div');
  card.classList.add('card', 'movie_card');
  card.dataset.video = video;
  card.dataset.title = title;
  card.innerHTML 
 = `
 
    <a href="${url}">
      <img src="${img}" alt="${title}">
      <div class="content">
        <h5>${title}</h5>
        <h6>
          <span>${year}</span>
          <div class="rate">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
            <i class="fas fa-star"></i>
            <h6> ${rate} </h6>
          </div>
        </h6>
      </div>
    </a>
   
  `;

  rate10.appendChild(card);
});
});
//Bottom Movies Sections End

//Movie Box 2 BUTTONS (Buttons Under Media Player)
//All_btn
let all_btn = document.getElementById('all_btn');

all_btn.addEventListener('click', () => {
  all_btn.classList.toggle('cato_button_active');
  all.classList.toggle('box2_actives');
});
//latest_btn
let latest_btn = document.getElementById('latest_btn');

latest_btn.addEventListener('click', () => {
  latest_btn.classList.toggle('cato_button_active');
  latest.classList.toggle('box2_actives');
});
//year2025_btn years start==================================
let year2025_btn = document.getElementById('year2025_btn');

year2025_btn.addEventListener('click', () => {
  year2025_btn.classList.toggle('cato_button_active');
  year_2025.classList.toggle('box2_actives');
});
//year2026_btn years end =====================================
let year2026_btn = document.getElementById('year2026_btn');

year2026_btn.addEventListener('click', () => {
  year2026_btn.classList.toggle('cato_button_active');
  year_2026.classList.toggle('box2_actives');
});
//Letters c_btn Letter start =====================================
let letter_c_btn = document.getElementById('letter_c_btn');

letter_c_btn.addEventListener('click', () => {
  letter_c_btn.classList.toggle('cato_button_active');
  letter_c.classList.toggle('box2_actives');
});
// Letter F
let letter_f_btn = document.getElementById('letter_f_btn');

letter_f_btn.addEventListener('click', () => {
  letter_f_btn.classList.toggle('cato_button_active');
  letter_f.classList.toggle('box2_actives');
});
// Letter I
let letter_i_btn = document.getElementById('letter_i_btn');

letter_i_btn.addEventListener('click', () => {
  letter_i_btn.classList.toggle('cato_button_active');
  letter_i.classList.toggle('box2_actives');
});
// Letter M
let letter_m_btn = document.getElementById('letter_m_btn');

letter_m_btn.addEventListener('click', () => {
  letter_m_btn.classList.toggle('cato_button_active');
  letter_m.classList.toggle('box2_actives');
});
// Letter O
let letter_o_btn = document.getElementById('letter_o_btn');

letter_o_btn.addEventListener('click', () => {
  letter_o_btn.classList.toggle('cato_button_active');
  letter_o.classList.toggle('box2_actives');
});
// Letter P
let letter_p_btn = document.getElementById('letter_p_btn');

letter_p_btn.addEventListener('click', () => {
  letter_p_btn.classList.toggle('cato_button_active');
  letter_p.classList.toggle('box2_actives');
});
// Letter R
let letter_r_btn = document.getElementById('letter_r_btn');

letter_r_btn.addEventListener('click', () => {
  letter_r_btn.classList.toggle('cato_button_active');
  letter_r.classList.toggle('box2_actives');
});
// Letter S
let letter_s_btn = document.getElementById('letter_s_btn');

letter_s_btn.addEventListener('click', () => {
  letter_s_btn.classList.toggle('cato_button_active');
  letter_s.classList.toggle('box2_actives');
});
// Letter z
let letter_z_btn = document.getElementById('letter_z_btn');

letter_z_btn.addEventListener('click', () => {
  letter_z_btn.classList.toggle('cato_button_active');
  letter_z.classList.toggle('box2_actives');
});
//Letters c_btn Letter start =====================================

// Rate Change

let change_input = document.getElementById('change_input');

change_input.addEventListener('change', () => {
  if (change_input.value <= 10) {
    rate10.classList.add('box2_actives');
  } else {
    rate10.classList.remove('box2_actives');
  }
  if (change_input.value <= 9) {
    rate9.classList.add('box2_actives');
  } else {
    rate9.classList.remove('box2_actives');
  }
  if (change_input.value <= 8) {
    rate8.classList.add('box2_actives');
  } else {
    rate8.classList.remove('box2_actives');
  }
  if (change_input.value <= 7) {
    rate7.classList.add('box2_actives');
  } else {
    rate7.classList.remove('box2_actives');
  }
  if (change_input.value <= 6) {
    rate6.classList.add('box2_actives');
  } else {
    rate6.classList.remove('box2_actives');
  }
  
  if (change_input.value <= 5) {
    rate5.classList.add('box2_actives');
  } else {
    rate5.classList.remove('box2_actives');
  }
})