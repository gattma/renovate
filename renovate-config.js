module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Gepardec/renovate-angular-playground"
    ],
    postUpgradeTasks: {
        commands: ["touch test.txt"],
        fileFilters: ["**/*", "**/.*"],
        executionMode: "branch"
    },
    allowedPostUpgradeCommands: [
        "touch"
    ],
    prHourlyLimit: 0,
    recreateWhen: "always"
}
