import {baseUrl, repositoriesQuantity} from '../variables.js'

async function getRepositories(userName) {
    const url = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await url.json()
}

/* module.exports = getRepositories */

export {getRepositories}