module.exports = {
    verbose: true,
    plugins: {
        local: {
            browsers: ['chrome', 'safari']
        },
        istanbul: {
            dir: './coverage',
            reporters: ['text-summary', 'lcov'],
            include: ['**/*.js'],
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