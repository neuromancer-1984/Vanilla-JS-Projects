console.log("Welcome!!");

let audioIndex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName: "Song1", cover: 'covers/1.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song2", cover: 'covers/2.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song3", cover: 'covers/3.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song4", cover: 'covers/4.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song5", cover: 'covers/5.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song6", cover: 'covers/6.jpg', filePath: 'songs/6.mp3'},
    {songName: "Song7", cover: 'covers/7.jpg', filePath: 'songs/7.mp3'},
    {songName: "Song8", cover: 'covers/8.jpg', filePath: 'songs/8.mp3'},
    {songName: "Song9", cover: 'covers/9.jpg', filePath: 'songs/9.mp3'},
    {songName: "Song10", cover: 'covers/10.jpg', filePath: 'songs/10.mp3'}
    
]

songItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].cover
    element.getElementsByClassName("songName")[0].src = songs[i].songName
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', ()=>{
    progress =  parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress
    
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (audioElement.duration * myProgressBar.value)/100 
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=> {
        audioIndex = parseInt(e.target.id)
        makeAllPlays();
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${index}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(audioIndex>=9){
        audioIndex=0
    }else{
        audioIndex += 1
    }
    audioElement.src = `songs/${audioIndex}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
})


document.getElementById('previous').addEventListener('click', ()=>{
    if(audioIndex<=0){
        audioIndex=0
    }else{
        audioIndex -= 1
    }
    audioElement.src = `songs/${audioIndex}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
})

//audioElement.play()
