import { configurations } from '../config/configurations';

export const getClientConfig = (client) => configurations[client];

export const getSize = (size) => {
  if (size === 1) {
    return 'small';
  } else if (size === 2) {
    return 'medium';
  } else {
    return 'default';
  }
};
