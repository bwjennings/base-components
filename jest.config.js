const { jestConfig } = require('lwc-services/lib/config/jestConfig');

module.exports = {
    ...jestConfig,
    preset: '@lwc/jest-preset',
    moduleNameMapper: {
        '^lightning/(.+)$': '<rootDir>/jest-mock/components/lightning/$1/$1',
        '^c/(verticalProgressIndicator)$':
            '<rootDir>/jest-mock/components/c/$1/$1',
        '^c/(inputRichText)$': '<rootDir>/jest-mock/components/c/$1/$1'
    }
};
