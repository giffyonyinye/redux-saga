import _ from 'lodash';

export const selectContact = state => _.get(state, 'contactList.contact', []);