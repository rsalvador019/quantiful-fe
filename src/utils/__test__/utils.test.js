import { getSize, getClientConfig } from '../utils';

const configurations = {
  mockClient: {
    columns: [
      {
        size: 1,
        rowType: 'vertical',
        heading: 'General Mock information',
        widgets: [
          {
            title: 'Mock colours',
            subtitle: 'List of all the colours',
            type: 'list',
            api: 'https://mock.co/api/v2/pokemon-color/'
          }
        ]
      }
    ]
  }
};

jest.mock('../../config/configurations', () => ({
  configurations
}));

describe('utils', () => {
  describe('getSize', () => {
    let mockSize;
    it('should return small if given size is 1', async () => {
      mockSize = 1;

      expect(getSize(mockSize)).toEqual('small');
    });

    it('should return medium if given size is 2', async () => {
      mockSize = 2;

      expect(getSize(mockSize)).toEqual('medium');
    });

    it('should return default if given size is null', async () => {
      mockSize = null;

      expect(getSize(mockSize)).toEqual('default');
    });
  });

  describe('getClientConfig', () => {
    it('should retrieve configuration based from given client name', async () => {
      const mockClient = 'mockClient';

      expect(getClientConfig(mockClient)).toEqual(configurations[mockClient]);
    });
  });
});
