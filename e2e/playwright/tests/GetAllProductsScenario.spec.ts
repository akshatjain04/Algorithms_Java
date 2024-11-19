// ********RoostGPT********
/*
Test generated by RoostGPT for test MiniProjects using AI Type  and AI Model 

ROOST_METHOD_HASH=042d9a2af7
ROOST_METHOD_SIG_HASH=bd50a1165a

 ########## Scenario ########## 

{
  feature: 'Feature: Product API\r\n' +
    '    As a user of the product API\r\n' +
    '    I want to be able to perform CRUD operations on products\r\n' +
    '    So that I can manage my products effectively',
  background: 'Background:\r\n        Given the base URL is "http://localhost:8080"',
  rule: null,
  scenario: {
    title: 'Scenario: Get all products',
    steps: 'When the client sends a GET request "/api/products" to get the list of all products\r\n' +
      'Then the list of products returned should be empty',
    examples: ''
  }
}

*/

// ********RoostGPT********
import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import { promises as fs } from 'fs';
import { resolve } from 'path';

function typecast(value) {
  if (value === null || value === undefined) {
    return value;
  }
  if (typeof value === "string") {
    const lowerValue = value.toLowerCase().trim();
    if (lowerValue === "true") return true;
    if (lowerValue === "false") return false;
    try {
      const parsed = JSON.parse(value);
      if (typeof parsed === "object" || Array.isArray(parsed)) {
        return parsed;
      }
    } catch (e) {}
    const dateValue = new Date(value);
    if (!isNaN(dateValue) && value.includes("-")) {
      return dateValue;
    }
    if (!isNaN(value) && value.trim() !== "") {
      if (value.includes(".")) {
        return parseFloat(value);
      }
      return parseInt(value, 10);
    }
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((item) => typecast(item));
  }
  if (typeof value === "object") {
    const result = {};
    for (const key in value) {
      result[key] = typecast(value[key]);
    }
    return result;
  }
  return value;
}

async function parseCSVFile(filePath) {
  try {
    const fileContent = await fs.readFile(resolve(__dirname, filePath), 'utf-8');
    return parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      cast: true,
      delimiter: "^|^",
      quote: '"',
      escape: '"',
      relax_quotes: true,
      relax_column_count: true,
    });
  } catch (error) {
    console.error('Error reading/parsing CSV file:', error);
    throw error;
  }
}

test.describe('Product API', () => {
  let testData;

  test.beforeAll(async () => {
    try {
      testData = await parseCSVFile('GetAllProductsScenario.spec.csv');
      testData = testData.map((record) => typecast(record));
    } catch (error) {
      console.error('Failed to load test data:', error);
      throw error;
    }
  });

  test('Get all products - Empty list', async ({ request }) => {
    const apiData = testData.find(data => data.METHOD === 'GET' && data.URL.includes('/api/products'));
    const response = await request.get(apiData.URL, {
      headers: apiData.REQ_HEADERS
    });
    const responseBody = await response.json();

    expect(response.status()).toBe(apiData.RESPONSE_CODE);
    expect(responseBody).toEqual(apiData.RESPONSE_BODY);
  });
});
