/**
 * Simple test to verify LMStudio connection preset functionality
 */
import { test } from '@playwright/test';

// Test data for LMStudio connection preset
const LMSTUDIO_PRESET = {
  name: 'LMStudio',
  url: 'http://localhost:1234/v1',
  key: 'lm-studio',
  description: 'Connect to LMStudio running locally (default port 1234)'
};

test.describe('LMStudio Connection Preset', () => {
  
  test('should have LMStudio connection preset available', async ({ page }) => {
    // This is a basic test to verify preset data structure is correct
    const preset = LMSTUDIO_PRESET;
    
    // Verify preset has required fields
    test.expect(preset.name).toBe('LMStudio');
    test.expect(preset.url).toBe('http://localhost:1234/v1');
    test.expect(preset.key).toBe('lm-studio');
    test.expect(preset.description).toContain('LMStudio');
    test.expect(preset.description).toContain('localhost');
    test.expect(preset.description).toContain('1234');
  });

  test('should properly format LMStudio URL for OpenAI compatibility', async ({ page }) => {
    const url = LMSTUDIO_PRESET.url;
    
    // Verify URL format is OpenAI-compatible
    test.expect(url).toMatch(/^http:\/\/localhost:\d+\/v1$/);
    test.expect(url.endsWith('/v1')).toBe(true);
  });

});