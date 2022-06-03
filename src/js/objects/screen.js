const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<section class="info">
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
            this.userProfile.innerHTML += '<p>O usuário não possui repositórios :(</p>'
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado :(</h3>"
    }
}

export {screen}