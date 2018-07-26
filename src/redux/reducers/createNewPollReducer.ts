import { Poll, AppActions, ActionType } from '../../interfacesTypesEnums';
import { initialNewPoll } from '../states';

export const CreateNewPollReducer = (state: Poll = initialNewPoll, action: ActionType<Poll>) => {
    let newState: Poll;

    switch (action.type) {
        case AppActions.INITIATE_NEW_POLL:
            newState = action.payload;
            break;
        case AppActions.ADD_OPTION_TO_POLL:
            newState = action.payload;
            break;
        default:
            newState = state;
            break;
    }
    return newState;
};
