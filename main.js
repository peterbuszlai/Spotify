let playpause=document.getElementById("play_pause");
let play_music=true;
let audio_player=document.getElementById("audio_Player");

function playMusic(){
    if(!play_music)
    {
        play_music=true;
        playpause.src="pause.svg";
        audio_player.play();
    }
    else
    {
        play_music=false;
        playpause.src="play.svg";
        audio_player.pause();
    }
}
function audioPlayer(){
    
    let music_len=audio_player.duration;
    console.log(music_len);
    
    let min=0;
    let sec=Math.round(music_len);
    console.log(sec);

    while(sec>=60){
        sec-=60;
        min+=1;
    }
    console.log(min +":"+ sec)

}

function actualTime(){
    let sec=Math.round(audio_player.currentTime);
    timeLine(sec);
    let min=0;
    while(sec>=60){
        sec-=60;
        min+=1;
    }
    console.log(min +":"+ sec)
}
function timeLine(actual_sec){
    let music_len=Math.round(audio_player.duration);
    let percent= actual_sec/(music_len/100);
    console.log(Math.round(percent)+"%"); 
    document.getElementById("inner-line").style.width=percent+"%";
}

setInterval(actualTime,1000);
audioPlayer();

function changeMusic(zenecim){
audio_player.src="boom-mp3";
}
changeMusic();