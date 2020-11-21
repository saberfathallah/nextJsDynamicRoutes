module.exports = {
  automock: false,
  rootDir: '../../',
  setupFiles: ['<rootDir>/config/jest/setupEnzyme.ts'],
  // setupFilesAfterEnv: ["<rootDir>/config/jest/jest.after_setup.js"],
  preset: 'ts-jest',
  // file extesion to test
  //The glob patterns Jest uses to detect test files. By default it looks for .js, .jsx, .ts and .tsx files
  // inside of __tests__ folders, as well as any files with a suffix of .test or .spec (e.g. Component.test.js
  // or Component.spec.js). It will also find files called test.js or spec.js.
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/__tests__/**/*.+(js|jsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  // A map from regular expressions to paths to transformers. A transformer is a module that provides a synchronous function
  // for transforming source files. For example, if you wanted to be able to use a new language feature in your modules
  // or tests that aren't yet supported by node, you might plug in one of many compilers that compile a future
  // version of JavaScript to a current one If you want to use it to compile JavaScript or Typescript, it has to be explicitly defined
  // by adding {"\\.[jt]sx?$": "babel-jest"} to the transform property. See babel-jest plugin
  // babel-jest installer par default
  // configurate typeScript javascript in file tests
  transform: {
    // '^.+\\.jsx$': 'babel-jest',
    // '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest'
    // '^.+\\.ts?$': 'ts-jest'
  },
  // module to import
  moduleNameMapper: {
    // '^@config/(.*)$': '<rootDir>config/$1',
    // '^@components/(.*)$': '<rootDir>src/components/$1'
  },
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  // An array of regexp pattern strings that are matched against all test paths before executing the test.
  //  If the test path matches any of the patterns, it will be skipped.
  testPathIgnorePatterns: [
    // '.next/',
    'node_modules/',
    'server/',
    '\\stories.(js|jsx|ts|tsx)',
    '.history',
    'config'
  ],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'svg', 'gif'],
  //don't test
  // This will collect coverage information for all the files inside the project's rootDir,
  // except the ones that match omponents/**/index.tsx or components/**/index.ts
  collectCoverageFrom: [
    '**/src/**',
    '!<rootDir>/src/**/stories.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/**/index.tsx',
    '!<rootDir>/src/components/**/index.ts'
  ],
  //ignore folder in count coverage
  coveragePathIgnorePatterns: ['src/pages/.*', '.*/__tests__/.*', '.*/config/.*']
};
// required .babelrc file
