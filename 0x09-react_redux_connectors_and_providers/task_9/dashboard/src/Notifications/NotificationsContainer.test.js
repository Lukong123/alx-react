import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';t
import { StyleSheetTestUtils} from 'aphrodite';

describe('Notification Component', () => {
    let wrapper;
    
      beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
          wrapper = shallow(<Notifications />)
      })
  
      it("<Notifications /> is rendered without crashing", () => {
        expect(wrapper).toBeDefined();
      });
    });