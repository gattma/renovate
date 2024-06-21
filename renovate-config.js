module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Gepardec/renovate-playground"
    ],
    prHourlyLimit: 0,
    postUpgradeTasks: {
        commands: ["./quarkus-update {{branchName}} {{currentVersion}} {{newVersion}} {{newMajor}}.{{newMinor}}"],
        fileFilters: ["**/*", "**/.*"]
    },
    allowedPostUpgradeCommands: [
        "^./quarkus-update {{branchName}} {{currentVersion}} {{newVersion}} {{newMajor}}.{{newMinor}}$"
    ]
}
