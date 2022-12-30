import { updateClock } from './lib/clock';
const clock = document.querySelector('.clock');
let clockUpdate;
clockUpdate = setInterval(() => updateClock(), 1000);
const moveClock = ({ offsetX, offsetY }) => {
    if (clock) {
        const { clientHeight, clientWidth } = clock;
        const rotateX = (offsetX - clientWidth / 2) * 0.05;
        const rotateY = (offsetY - clientHeight / 2) * 0.1;
        clock.style.transform = `perspective(1000px) rotateX(${-rotateY}deg) rotateY(${rotateX}deg)`;
    }
};
const outClock = () => {
    if (clock) {
        clock.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        if (!clockUpdate)
            pauseClock();
    }
};
const pauseClock = () => {
    if (clockUpdate) {
        clearInterval(clockUpdate);
        clockUpdate = null;
        clock?.classList.add('paused');
        clock?.addEventListener('mousemove', moveClock);
    }
    else {
        updateClock();
        clockUpdate = setInterval(() => updateClock(), 1000);
        clock?.classList.remove('paused');
        clock?.removeEventListener('mousemove', moveClock);
    }
};
clock?.addEventListener('click', pauseClock);
clock?.addEventListener('mouseleave', outClock);
