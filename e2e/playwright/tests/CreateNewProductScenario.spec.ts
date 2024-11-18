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

// Define the type for the test data
type TestData = {
  METHOD: string;
  URL: string;
  REQ_HEADERS: object;
  REQ_BODY: object;
  RESPONSE_CODE: number;
  RESPONSE_BODY: object;
};

let testData: TestData[];

function typecast(value: any) {
  if (value === null || value === undefined) return value;
  if (typeof value === "string") {
    const lowerValue = value.toLowerCase().trim();
    if (lowerValue === "true") return true;
    if (lowerValue === "false") return false;
    try {
      const parsed = JSON.parse(value);
      if (typeof parsed === "object" || Array.isArray(parsed)) return parsed;
    } catch (e) {}
    const dateValue = new Date(value);
    if (!isNaN(dateValue.getTime()) && value.includes("-")) return dateValue;
    if (!isNaN(value) && value.trim() !== "") return value.includes(".") ? parseFloat(value) : parseInt(value, 10);
    return value;
  }
  if (Array.isArray(value)) return value.map((item) => typecast(item));
  if (typeof value === "object") {
    const result: any = {};
    for (const key in value) result[key] = typecast(value[key]);
    return result;
  }
  return value;
}

async function parseCSVFile(filePath: string): Promise<TestData[]> {
  try {
    const fileContent = await fs.readFile(resolve(__dirname, filePath), 'utf-8');
    return new Promise((resolve, reject) => {
      parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        cast: true,
        delimiter: "^|^",
      }, (error, records: TestData[]) => {
        if (error) reject(error);
        resolve(records.map(record => ({
          ...record,
          REQ_HEADERS: typecast(record.REQ_HEADERS),
          REQ_BODY: typecast(record.REQ_BODY),
          RESPONSE_BODY: typecast(record.RESPONSE_BODY),
        })));
      });
    });
  } catch (error) {
    console.error('Error reading/parsing CSV file:', error);
    throw error;
  }
}

test.beforeAll(async () => {
  testData = await parseCSVFile('CreateNewProductScenario.spec.csv');
});

test.describe('Product API', () => {
  test('should create a new product', async ({ request }) => {
    const apiData = testData.find(data => data.METHOD === 'POST');
    if (!apiData) throw new Error('Test data for POST request not found.');

    const response = await request.post(apiData.URL, {
      data: apiData.REQ_BODY,
      headers: apiData.REQ_HEADERS,
    });

    expect(response.status()).toBe(apiData.RESPONSE_CODE);

    const responseBody = await response.json();
    expect(responseBody).toEqual(apiData.RESPONSE_BODY);
  });
});
