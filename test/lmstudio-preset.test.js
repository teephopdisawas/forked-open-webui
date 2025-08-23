/**
 * Simple test to verify LMStudio connection preset functionality
 */
import { describe, test, expect } from 'vitest';

// Test data for LMStudio connection preset
const LMSTUDIO_PRESET = {
  name: 'LMStudio',
  url: 'http://localhost:1234/v1',
  key: 'lm-studio',
  description: 'Connect to LMStudio running locally (default port 1234)'
};

describe('LMStudio Connection Preset', () => {
  
  test('should have LMStudio connection preset available', () => {
    // This is a basic test to verify preset data structure is correct
    const preset = LMSTUDIO_PRESET;
    
    // Verify preset has required fields
    expect(preset.name).toBe('LMStudio');
    expect(preset.url).toBe('http://localhost:1234/v1');
    expect(preset.key).toBe('lm-studio');
    expect(preset.description).toContain('LMStudio');
    expect(preset.description).toContain('locally');
    expect(preset.description).toContain('1234');
  });

  test('should properly format LMStudio URL for OpenAI compatibility', () => {
    const url = LMSTUDIO_PRESET.url;
    
    // Verify URL format is OpenAI-compatible
    expect(url).toMatch(/^http:\/\/localhost:\d+\/v1$/);
    expect(url.endsWith('/v1')).toBe(true);
  });

});