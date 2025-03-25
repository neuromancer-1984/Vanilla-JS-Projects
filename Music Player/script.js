console.log("Welcome!!");

let audioIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')

let songs =[
    {songName: "Song1", cover: 'covers/1.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song1", cover: 'covers/1.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song1", cover: 'covers/1.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song1", cover: 'covers/1.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song1", cover: 'covers/1.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song1", cover: 'covers/1.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song1", cover: 'covers/1.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song1", cover: 'covers/1.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song1", cover: 'covers/1.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song1", cover: 'covers/1.jpg', filePath: 'songs/1.mp3'},
    {songName: "Song1", cover: 'covers/1.jpg', filePath: 'songs/1.mp3'}
    
]

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


myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    
})

//audioElement.play()
