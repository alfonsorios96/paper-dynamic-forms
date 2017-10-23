module.exports = {
    verbose: true,
    plugins: {
        local: {
            browsers: ['chrome', 'firefox']
        },
        istanbul: {
            dir: './coverage',
            reporters: ['text-summary', 'lcov'],
            include: [
                '**/*.js'
            ],
            exclude: [
                '/polymer/polymer.js',
                '/platform/platform.js'
            ],
            thresholds: {
                global: {
                    statements: 100,
                    branches: 100,
                    lines: 100,
                    functions: 100
                }
            }
        }
    }
}