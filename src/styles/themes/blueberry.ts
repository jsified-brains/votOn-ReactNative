import { AppThemeSchema, colorThemeCombo } from './themesSchema';

const blueberryColorCombo: colorThemeCombo = {
    dark: '#1E1F26',
    medium: '#283655',
    light: '#4D648D',
    faded: '#D0E1F9'
};

export const BlueberryTheme: AppThemeSchema = {
    bodyBGColor: blueberryColorCombo,
    textColor: blueberryColorCombo,
    borderColor: {
        dark: '#000',
        medium: '#999',
        light: '#fff'
    }
};
