
import { AppThemeSchema } from './themesSchema';
import { AquaTheme }  from './aqua';
import { ForestTheme }  from './forest';
import { brandColors } from './brandColors';
// export * from './sunAndSand';
// export * from './blueberry';
// export * from './themesSchema';

export type App_Theme = 'AQUA' | 'FOREST' | 'SUNANDSAND';

export class AppTheme {
    public static currentTheme: AppThemeSchema = AquaTheme;
    public static brandColors = brandColors;

    public static setAppTheme = (theme: App_Theme = 'AQUA'): void => {
        let appTheme: AppThemeSchema;
        switch (theme) {
            case 'AQUA':
                appTheme = AquaTheme;
                break;
            case 'FOREST':
                appTheme = ForestTheme;
                break;
            default:
                appTheme = AquaTheme;
                break;
        }
        AppTheme.currentTheme = appTheme;
    }

}
