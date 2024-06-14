module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Gepardec/renovate-playground"
    ],
    prHourlyLimit: 0,
    postUpgradeTasks: {
        commands: ["./mvnw quarkus:update"],
        fileFilters: ["**/*.pom", "**/*.java"],
        executionMode: "branch"
    },
    allowedPostUpgradeCommands: ["touch", "ls", "^./mvnw quarkus:update$"],
    recreateWhen: "always"
}
