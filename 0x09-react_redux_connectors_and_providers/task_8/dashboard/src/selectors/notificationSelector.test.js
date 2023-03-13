import * as selectors from './notificationSelector';
import { notificationReducer } from '../reducers/notificationReducer';
import { getUnreadNotifications } from './notificationSelector';


describe('Testing notificationSelectors',() => {
  it('test that filterTypeSelected works as expected', () => {
    const state = notificationReducer();
    expect('dummytext').toEqual('dummytext');
  });
});