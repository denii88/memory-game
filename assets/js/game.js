var totalSeconds = 0;
function setTimer(){
    ++totalSeconds;
    var seconds = document.getElementById('seconds');
    seconds.innerHTML = pad(totalSeconds%60);
    var minutes = document.getElementById('minutes');
    minutes.innerHTML = pad(parseInt(totalSeconds/60));
}
function pad(val){
    var valString = val + '';
    if(valString.length < 2) {
        return '0' + valString;
    } else { return valString;
    }
}