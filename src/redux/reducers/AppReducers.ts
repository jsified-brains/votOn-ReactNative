import { combineReducers } from 'redux';
import { PollTemplatesReducer,  ActivePollTemplateReducer } from './pollTemplateReducer';
import { CreateNewPollReducer } from './createNewPollReducer';
import { PollTemplateType, Poll } from '../../interfacesTypesEnums';

export type AppReduxStateType = {
    pollTemplates: PollTemplateType[]
    activePollTemplate: PollTemplateType,
    newlyCreatedPoll: Poll
};

export const AppReducer = combineReducers({
    pollTemplates: PollTemplatesReducer,
    activePollTemplate: ActivePollTemplateReducer,
    newlyCreatedPoll: CreateNewPollReducer
});

// export default AppReducer;
