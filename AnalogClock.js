// JavaScript for a Anolog Clock 
function cl() {
    const deg = 6;
    const hr = document.getElementById('hr');
    const mn = document.getElementById('mn');
    const sc = document.getElementById('sc');
    let day = new Date();
    let h = day.getHours() * 30;
    let m = day.getMinutes() * deg;
    let s = day.getSeconds() * deg;
    // hr = 30*hr [getHour()]   + min/2
    // min = 6*min  [getMinutes()]
    // sec = 6*sec   [getSeconds()]
    
    hr.style.transform = `rotate(${(h)+(m/12)}deg)`;
    mn.style.transform = `rotate(${m}deg)`;
    sc.style.transform = `rotate(${s}deg)`;
}
let interval = setInterval(cl);
