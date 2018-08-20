import { makeConstantsObject } from 'client/redux/util';

const ActionTypes = {
  SHOW_SIGN_IN_MODAL: '',
  HIDE_SIGN_IN_MODAL: '',
  CHANGE_SIGN_IN_MODAL_MODE: '',
};

makeConstantsObject(ActionTypes);
export default ActionTypes;
