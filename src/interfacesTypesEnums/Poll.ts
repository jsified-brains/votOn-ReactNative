import { PollTemplateType } from './';
import { AppPollTemplates } from '../assets/img/templateIcons';

export interface PollAdmin {
    email: string,
    first_name: string,
    last_name?: string,
    phone?: string
}

export interface PollOption {
    description: string,
    image?: string,
    index: number
}

export interface Poll {
    basePollTemplate: PollTemplateType,
    question: string,
    imageIcon?: AppPollTemplates | '',
    options: PollOption[],
    admin: PollAdmin
}
