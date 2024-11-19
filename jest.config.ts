import type { Config } from 'jest';

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", {
      useESM: true,
    }],
  },
  clearMocks: true,
  coverageProvider: "v8",
};

export default config;