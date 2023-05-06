export const bgOpacityHelper = (position: number): number => {
    console.log(position)
    if (position < 450) {
        return 50;
    } else if (position > 450 && position <= 475) {
        return 40;
    } else if (position > 475 && position <= 500) {
        return 30;
    } else if (position > 500 && position <= 525) {
        return 25;
    } else if (position > 525 && position <= 550) {
        return 20;
    } else if (position > 550 && position <= 575) {
        return 10;
    } else if (position > 575 && position <= 600) {
        return 5
    } else {
        return 0;
    }
}


export const opacityHelper = (position: number): number => {
    if (position < 450) {
        return 100;
    } else if (position > 450 && position <= 475) {
        return 75;
    } else if (position > 475 && position <= 500) {
        return 50;
    } else if (position > 500 && position <= 525) {
        return 30;
    } else if (position > 525 && position <= 550) {
        return 20;
    } else if (position > 550 && position <= 575) {
        return 10;
    } else if (position > 575 && position <= 600) {
        return 5
    } else {
        return 0;
    }
}