import { AppThemeSchema, colorThemeCombo } from './themesSchema';

const sunAndSandColorCombo: colorThemeCombo = {
    dark: '#693d3d',
    medium: '#679898',
    light: '#669999'
};

export const SunAndSandTheme: AppThemeSchema = {
    bodyBGColor: sunAndSandColorCombo,
    textColor: sunAndSandColorCombo,
    borderColor: {
        dark: '#000',
        medium: '#999',
        light: '#fff'
    }
};
