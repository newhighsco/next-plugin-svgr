module.exports = {
  projects: ['<rootDir>/packages/*'],
  coverageReporters: ['json', 'text-summary'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        addFileAttribute: 'true',
        outputDirectory: 'reports',
        outputName: 'jest.xml'
      }
    ]
  ]
}
