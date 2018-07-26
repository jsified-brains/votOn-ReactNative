
import { PollTemplateType, AppActions, ActionType } from '../../interfacesTypesEnums';
import { pollTemplates }  from '../states/pollTemplates';

const initialState = pollTemplates[0];

export const PollTemplatesReducer = () => {
    return pollTemplates;
};

export const ActivePollTemplateReducer = (state: PollTemplateType = initialState, action: ActionType<PollTemplateType>) => {
    let newState: PollTemplateType;

    switch (action.type) {
        case AppActions.POLL_TEMPLATE_SELECTED:
            newState = action.payload;
            break;
        default:
            newState = state;
            break;
    }
    return newState;
};
