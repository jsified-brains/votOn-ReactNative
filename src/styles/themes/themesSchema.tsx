export type colorThemeCombo = {
    dark: string,
    medium?: string
    light?: string,
    faded?: string
};

export type AppThemeSchema = {
    bodyBGColor: colorThemeCombo
    textColor: colorThemeCombo
    borderColor: colorThemeCombo
};
