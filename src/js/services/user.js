import {baseUrl} from './js/variables.js'

async function getUser(userName){
    const url = await fetch(`${baseUrl}/${userName}`)
    return await url.json()
}

export {getUser}