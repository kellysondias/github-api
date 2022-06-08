import {baseUrl} from '../variables.js'

async function getActivities(userName) {
    const url = await fetch(`${baseUrl}/${userName}/events/public`)
    return await url.json()
}

export {getActivities}