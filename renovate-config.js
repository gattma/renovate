module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Gepardec/renovate-playground",
        // "Gepardec/renovate-angular-playground"
         "{{ github.event.inputs.repoOrgUser }}/{{ github.event.inputs.repoName }}",
    ],
    prHourlyLimit: 0,
    recreateWhen: "always"
}
