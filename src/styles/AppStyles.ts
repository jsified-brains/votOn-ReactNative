import { sample } from 'lodash';

// https://www.canva.com/learn/100-color-combinations/

export const vibrantColors = {
    aqua: '#31a9b8',
    carrot: '#ee693f',
    tomato: '#cf3721',
    mint: '#b9d9c3',
    sage: '#a1be95',
    blueberry: '#4d648d',
    bluebell: '#92aac7',
    orange: '#f8a055',
    cinnamon: '#662e1c',
    creme: '#ebdcb2',
    caramel: '#c9a6bb'
};

export const getRandomVibrantColor = () => {
    return sample(vibrantColors);
};

export const AppStyles = {
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    templateGridItem: {
        fontSize: 14,
        fontWeight: 'bold',
        borderColor: '#fff',
        bgColor: getRandomVibrantColor()
    }
};
