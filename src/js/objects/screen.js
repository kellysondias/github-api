const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                    <img src="${user.avatarUrl}">
                                <div class="data">
                                <h1>${user.name ?? 'O usuário não possui nome cadastrado :('}</h1>
                                <p>${user.bio ?? 'O usuário não possui uma biografia cadastrada :('}</p>
                            </div>
                        </div>`
        let repostoriesItens = ''
        user.repositories.forEach(repo => repostoriesItens += `
                                                                <li><a href="${repo.html_url}" target="_blank">${repo.name}</a><li>
        `)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>
                                                    ${repostoriesItens}
                                                </ul>
                                           </div>`
        } else {
            this.userProfile.innerHTML += '<p>O usuário não possui repositórios :(</p>'
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado :(</h3>"
    }
}

export {screen}