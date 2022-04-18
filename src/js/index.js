import {getUser} from './services/user.js'
import {getRepositories} from './services/repositories.js'
import {user} from './objects/user.js'
import {screen} from './objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const inputUserName = document.getElementById('input-search').value
    if(validateEmptyInput(inputUserName)) return
    getUserData(inputUserName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 1

    if(isEnterKeyPressed) {
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validateEmptyInput (userName) {
    if (userName.length === 0) {
        alert('Por favor, preencha o campo com o nome do usuário do GitHub desejado.')
        return true
    }
}

async function getUserData(userName) {
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)

    if (userResponse.message === "Not Found") {
        screen.renderNotFound() 
        return 
    }

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)
}