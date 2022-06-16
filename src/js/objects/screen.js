const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<section class="info section">
                                    <a class="profile-link" href="https://github.com/${user.userName}" target="_blank">
                                        <img src="${user.avatarUrl}">
                                    </a>
                                    <div class="data">
                                        <a class="profile-link" href="https://github.com/${user.userName}" target="_blank">
                                            <h1>
                                                ${user.name ?? 'O usuário não possui nome cadastrado :('}
                                            </h1>
                                        </a>
                                        <p>
                                            ${user.bio ?? 'O usuário não possui uma biografia cadastrada :('}
                                        </p>
                                    </div>
                                    <div class="followers-data">
                                        <div class="followers">
                                            <i class="fas fa-user-friends"></i>
                                            <span>Seguidores: ${user.followers}</span>
                                        </div>
                                        <div class="following">
                                            <i class="fa-solid fa-user-check"></i>
                                            <span>Seguindo: ${user.following}</span>
                                        </div>
                                    </div>
                                </section>
                                `
        let repostoriesItens = ''
        user.repositories.forEach(repo => repostoriesItens += `
                                                                <li><a href="${repo.html_url}" target="_blank">${repo.name}</a><li>
        `)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<section class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>
                                                    ${repostoriesItens}
                                                </ul>
                                           </section>`
        } else {
            this.userProfile.innerHTML += "<p class='not-found-message'>O usuário não possui repositórios :(</p>"
        }
        let activitiesItens = ''
        user.activities.forEach(activity => {
            const name = activity.repo.name
            if (activity.type === 'PushEvent') {
                const commitList = activity.payload.commits
                let commitMessage = ''
                if (commitList) commitList.forEach(commit => {commitMessage = commit.message} )
                activitiesItens += `
                                    <li class="activity"><span>${name}:</span> ${commitMessage}</li>
                `
            } else if (activity.type === 'CreateEvent') {
                const description = activity.payload.description
                activitiesItens += `
                                    <li class="activity"><span>${name}:</span> ${description}</li>
                `
            }
        })

        if (user.activities.length > 0) {
            this.userProfile.innerHTML += (`
                                            <section class="activities section">
                                                <h2>Atividades</h2>
                                                <ul>
                                                    ${activitiesItens}
                                                </ul>
                                            </section>
            ` )
        } else {
            this.userProfile.innerHTML += "<p class='not-found-message'>O usuário não possui atividades recentes :(</p>"
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado :(</h3>"
    }
}

export {
    screen 
}