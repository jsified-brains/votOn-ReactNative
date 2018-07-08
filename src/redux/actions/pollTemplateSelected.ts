import { PollTemplateType, ActionType, AppActions } from "../../interfacesTypesEnums";


export const PollTemplateSelectedAction = (pollTemplate: PollTemplateType): ActionType<PollTemplateType> => {
    return {
        type: AppActions.POLL_TEMPLATE_SELECTED,
        payload: pollTemplate
    }
}
