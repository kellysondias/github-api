const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    activity: [],
    followers: '',
    following: '',
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
    }/* ,
    setActivity(activity) {
        this.activity = activity[0].repo.name
    } */
}

export {user}