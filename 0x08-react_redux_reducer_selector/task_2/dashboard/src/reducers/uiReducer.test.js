import { uiReducer, initialState } from './uiReducer';
import * as actions from '../actions/uiActionTypes';

describe('Testing uiReducer', () => {
  it('it verifies the state returned by the uiReducer function if it equals the initial state when no action is passed', () => {
    const uiReducer = uiReducer();
    expect(uiReducer).toStrictEqual(initialState);
  });

  it('it verifies  the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    const uiReducer = uiReducer(undefined, {type: "SELECT_COURSE"});
    expect(uiReducer).toStrictEqual(initialState);
  });

  it('it verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const uiReducer = uiReducer(undefined, {type: actions.DISPLAY_NOTIFICATION_DRAWER});
    expect(uiReducer).toStrictEqual({ ...initialState, isNotificationDrawerVisible: true });
  });
});
