// ********RoostGPT********
/*
Test generated by RoostGPT for test MiniProjects using AI Type  and AI Model 

ROOST_METHOD_HASH=3fa7eb5b2b
ROOST_METHOD_SIG_HASH=d36a499dac

 ########## Scenario ########## 

{
  feature: 'Feature: Product API\r\n' +
    '    As a user of the product API\r\n' +
    '    I want to be able to perform CRUD operations on products\r\n' +
    '    So that I can manage my products effectively',
  background: 'Background:\r\n        Given the base URL is "http://localhost:8080"',
  rule: null,
  scenario: {
    title: 'Scenario: Create a new product',
    steps: 'Given the client provides the following product data:\r\n' +
      '            | name         | description             | price |\r\n' +
      '            | Test Product | This is a test product. | 10.0  |\r\n' +
      'When the client sends a POST request to "/api/products"\r\n' +
      'Then the saved product should not be null and its properties must correspond to those provided by client',
    examples: ''
  }
}

*/

// ********RoostGPT********
import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import { promises as fs } from 'fs';
import { resolve } from 'path';

interface TestData {
  METHOD: string;
  URL: string;
  REQ_HEADERS: object;
  REQ_BODY: object;
  RESPONSE_CODE: number;
  RESPONSE_BODY: object;
}

async function parseCSVFile<T>(filePath: string): Promise<T[]> {
  try {
    const fileContent = await fs.readFile(resolve(__dirname, filePath), 'utf-8');
    return new Promise((resolve, reject) => {
      parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        cast: true,
        delimiter: "^|^",
      }, (error, records: T[]) => {
        if (error) reject(error);
        resolve(records);
      });
    });
  } catch (error) {
    console.error('Error reading/parsing CSV file:', error);
    throw error;
  }
}

let testData: TestData[];

test.beforeAll(async () => {
  testData = await parseCSVFile<TestData>('undefinede2e\\playwright\\tests\\CreateNewProductScenario.spec.csv.csv');
});

test.describe('Product API', () => {
  test('Create a new product', async ({ request }) => {
    const { METHOD, URL, REQ_HEADERS, REQ_BODY, RESPONSE_CODE, RESPONSE_BODY } = testData[0];
    const response = await request.post(URL, {
      headers: REQ_HEADERS,
      data: REQ_BODY
    });

    expect(response.status()).toBe(RESPONSE_CODE);
    const responseBody = await response.json();
    expect(responseBody).toEqual(RESPONSE_BODY);
  });

  test('Invalid input should return 405', async ({ request }) => {
    const invalidRequestBody = {
      name: null, // Invalid input as name should be a string
      description: "This is a test product.",
      price: 10
    };

    const response = await request.post(testData[0].URL, {
      headers: testData[0].REQ_HEADERS,
      data: invalidRequestBody
    });

    expect(response.status()).toBe(405);
  });
});
