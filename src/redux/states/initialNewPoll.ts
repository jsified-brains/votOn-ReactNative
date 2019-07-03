import { pollTemplates }  from '../states/pollTemplates';
import { Poll } from '../../interfacesTypesEnums';

export const initialNewPoll: Poll = {
    basePollTemplate: pollTemplates[0],
    question: pollTemplates[0].templateText,
    imageIcon: pollTemplates[0].icon,
    options: [],
    admin: {
        email: '', first_name: '', last_name: ''
    }
};
