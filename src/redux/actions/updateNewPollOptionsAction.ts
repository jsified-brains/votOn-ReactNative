import { Poll, ActionType, AppActions } from '../../interfacesTypesEnums';

export const UpdateNewPollOptionsAction = (currentPoll: Poll): ActionType<Poll> => {
    return {
        type: AppActions.ADD_OPTION_TO_POLL,
        payload: currentPoll
    };
};
