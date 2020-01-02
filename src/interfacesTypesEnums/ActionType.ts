export interface ActionType<T> {
    type: string;
    payload: T
}

export enum AppActions {
    POLL_TEMPLATE_SELECTED = 'POLL_TEMPLATE_SELECTED',
    INITIATE_NEW_POLL = 'INITIATE_NEW_POLL',
    ADD_OPTION_TO_POLL = 'ADD_OPTION_TO_POLL'
}
