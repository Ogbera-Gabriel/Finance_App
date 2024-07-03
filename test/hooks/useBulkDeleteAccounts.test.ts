import { useBulkDeleteAccounts } from '@/features/accounts/api/use-bulk-delete';


jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
  useQueryClient: jest.fn(() => ({
    invalidateQueries: jest.fn()
  }))
}));

jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}));

jest.mock('@/lib/hono', () => ({
  client: {
    api: {
      accounts: {
        'bulk-delete': {
          '$post': jest.fn()
        }
      }
    }
  }
}));

const { toast } = require('sonner');
const { useMutation, useQueryClient } = require('@tanstack/react-query');
const { client } = require('@/lib/hono');

describe('useBulkDeleteAccounts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call useMutation with correct parameters and handle success', async () => {
    const mockJson = { ids: ['id1', 'id2'] }; // Correctly defined mock request payload
    const mockResponse = { /* mock response data */ };

    // Mock the implementation of useMutation to return the mutate function
    useMutation.mockReturnValue({
      mutate: jest.fn().mockResolvedValue(mockResponse)
    });

    // Mock the API call response
    client.api.accounts['bulk-delete']['$post'].mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse)
    });

    const mutation = useBulkDeleteAccounts();

    await mutation.mutate(mockJson);

    expect(useMutation).toHaveBeenCalledWith(expect.objectContaining({
      mutationFn: expect.any(Function),
      onSuccess: expect.any(Function),
      onError: expect.any(Function)
    }));

    expect(toast.success).toHaveBeenCalledWith('Accounts deleted');
    expect(useQueryClient().invalidateQueries).toHaveBeenCalledWith({ queryKey: ['accounts'] });

    expect(toast.error).not.toHaveBeenCalled();
  });

  it('should handle error and call toast.error', async () => {
    const mockJson = { ids: ['id1', 'id2'] }; // Correctly defined mock request payload
    const mockError = new Error('Mock error message');

    // Mock the implementation of useMutation to return the mutate function that rejects
    useMutation.mockReturnValue({
      mutate: jest.fn().mockRejectedValueOnce(mockError)
    });

    const mutation = useBulkDeleteAccounts();

    await mutation.mutate(mockJson);

    expect(useMutation).toHaveBeenCalledWith(expect.objectContaining({
      mutationFn: expect.any(Function),
      onSuccess: expect.any(Function),
      onError: expect.any(Function)
    }));

    expect(toast.error).toHaveBeenCalledWith('Failed to delete accounts');
    expect(toast.success).not.toHaveBeenCalled();
    expect(useQueryClient().invalidateQueries).not.toHaveBeenCalled();
  });
});
