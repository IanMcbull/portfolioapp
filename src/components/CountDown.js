    const launchDate = new Date('02/22/2021 08:00:00');
    let today = new Date().getTime();
    let difference = launchDate - today;
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = ()=>{
        return Math.floor((difference % (1000 * 60)) / 1000)
    };
    

module.exports = {
    days,
    hours,
    minutes,
    second:setInterval(seconds,1000)
};