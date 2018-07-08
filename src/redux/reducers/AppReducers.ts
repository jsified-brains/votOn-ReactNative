import { combineReducers } from 'redux';
import { PollTemplatesReducer,  ActivePollTemplateReducer } from './pollTemplateReducer';
import { PollTemplateType } from '../../interfacesTypesEnums';

export type AppReduxStateType = {
    pollTemplates: PollTemplateType[]
    activePollTemplate: PollTemplateType
}

export const AppReducer = combineReducers({
    pollTemplates: PollTemplatesReducer,
    activePollTemplate: ActivePollTemplateReducer
});

// export default AppReducer;
