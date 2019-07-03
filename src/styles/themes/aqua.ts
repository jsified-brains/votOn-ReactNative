import { AppThemeSchema, colorThemeCombo } from './themesSchema';

const forestColorCombo: colorThemeCombo = {
    dark: '#1f2e2e',
    medium: '#679898',
    light: '#669999',
    faded: '#C4DFE6'
};

export const AquaTheme: AppThemeSchema = {
    bodyBGColor: forestColorCombo,
    textColor: forestColorCombo,
    screenTitleColor: '#17A7D5',
    borderColor: {
        dark: '#000',
        medium: '#999',
        light: '#fff'
    }
};
