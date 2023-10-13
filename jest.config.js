// transpile all es module test files for test runner
module.exports = {
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest'
    }
}
