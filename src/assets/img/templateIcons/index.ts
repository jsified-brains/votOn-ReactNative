
import cinemaPopcorn from '../../../../assets/img/templateIcons/cinemaPopcorn.png';
import meeting from '../../../../assets/img/templateIcons/meeting.png';
import beach from '../../../../assets/img/templateIcons/beach.png';

export type AppPollTemplates = 'beach' | 'cinemaPopcorn' | 'meeting';
export interface ITemplateIcons {
    beach: any,
    cinemaPopcorn: any,
    meeting: any
}

export const templateIcons: ITemplateIcons = {
    beach,
    cinemaPopcorn,
    meeting
};
