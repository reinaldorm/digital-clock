import { updateClock } from './lib/clock';
const clock = document.querySelector('.clock');
let clockUpdate;
clockUpdate = setInterval(() => updateClock(), 1000);
const pauseClock = () => {
    if (clockUpdate) {
        clearInterval(clockUpdate);
        clockUpdate = null;
        clock?.classList.add('paused');
    }
    else {
        updateClock();
        clockUpdate = setInterval(() => updateClock(), 1000);
        clock?.classList.remove('paused');
    }
};
clock?.addEventListener('click', pauseClock);
