// ********RoostGPT********
/*
Test generated by RoostGPT for test MiniProjects using AI Type  and AI Model 

ROOST_METHOD_HASH=92aa6a42f7
ROOST_METHOD_SIG_HASH=4d269fdf0c

 ########## Scenario ########## 

{
  feature: 'Feature: User and Address API integration',
  background: null,
  rule: null,
  scenario: {
    title: 'Scenario: Create a new User and their Address',
    steps: 'Given the API base URL is "https://api.example.com"\n' +
      'When I send a POST request to "/users" with the body:\n' +
      '      """\n' +
      '      {\n' +
      '        "name": "John Doe",\n' +
      '        "email": "john.doe@example.com"\n' +
      '      }\n' +
      'Then the response status code should be 201\n' +
      'And the response body should contain "userId"\n' +
      'When I send a POST request to "/users/{userId}/addresses" with the body:\n' +
      '      """\n' +
      '      {\n' +
      '        "street": "123 Main St",\n' +
      '        "city": "Somewhere",\n' +
      '        "state": "CA",\n' +
      '        "zip": "12345"\n' +
      '      }\n' +
      'Then the response status code should be 201\n' +
      'And the response body should contain "addressId"',
    examples: ''
  }
}

*/

// ********RoostGPT********
import { test, expect, APIRequestContext } from '@playwright/test';

interface UserResponse {
  userId: string;
}

interface AddressResponse {
  addressId: string;
}

test.describe('Feature: User and Address API integration', () => {
  let apiContext: APIRequestContext;
  let userId: string;

  test.beforeAll(async () => {
    apiContext = await test.request.newContext();
  });

  test.afterAll(async () => {
    await apiContext.dispose();
  });

  test('Scenario: Create a new User and their Address', async () => {
    // Create a new User
    const userResponse = await apiContext.post('https://api.example.com/users', {
      data: {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
    });

    // Verify that the response status code is 201 and the response body contains userId
    expect(userResponse.status()).toBe(201);
    const userResponseBody: UserResponse = await userResponse.json();
    expect(userResponseBody).toHaveProperty('userId');
    userId = userResponseBody.userId;

    // Create an Address for the User
    const addressResponse = await apiContext.post(`https://api.example.com/users/${userId}/addresses`, {
      data: {
        street: '123 Main St',
        city: 'Somewhere',
        state: 'CA',
        zip: '12345',
      },
    });

    // Verify that the response status code is 201 and the response body contains addressId
    expect(addressResponse.status()).toBe(201);
    const addressResponseBody: AddressResponse = await addressResponse.json();
    expect(addressResponseBody).toHaveProperty('addressId');
  });
});
