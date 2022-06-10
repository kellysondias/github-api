import {baseUrl, activitiesQuantity} from '../variables.js'

async function getActivities(userName) {
    const url = await fetch(`${baseUrl}/${userName}/events/public?per_page=${activitiesQuantity}`)
    return await url.json()
}

export {getActivities}