import { PollTemplateType, Poll, ActionType, AppActions } from '../../interfacesTypesEnums';
import { initialNewPoll } from '../states';

export const InitiateNewPollAction = (pollTemplate: PollTemplateType): ActionType<Poll> => {
    return {
        type: AppActions.INITIATE_NEW_POLL,
        payload: { ...initialNewPoll,
            basePollTemplate: pollTemplate,
            question: pollTemplate.templateText,
            imageIcon: pollTemplate.icon
        }
    };
};
