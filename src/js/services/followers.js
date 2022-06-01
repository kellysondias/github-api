import {baseUrl} from './'

async function getFollowers (userName) {
    const url = await fetch(`${userName}`)
    return await url.json()
}

export {getFollowers}