module.exports = {
    verbose: true,
    plugins: {
        local: {
            browsers: ['chrome', 'firefox', 'safari']
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
                    statements: 80,
                    branches: 80,
                    lines: 80,
                    functions: 80
                }
            }
        }
    }
}