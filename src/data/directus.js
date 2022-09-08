import fetch from "node-fetch"
import { Directus } from '@directus/sdk';


const directusToken = 'sPcnYPIKWQzGBrfjUcIJBbN36LlSuPVW';
const directusUrl = 'https://35xp4iwk.directus.app';
console.log(directusToken)

const directus = new Directus(directusUrl, {
    auth: {
        staticToken: directusToken
    }
})

export async function getDirectusLinks() {
    // get recommendations from directus

    // await directus.auth.static('QQ3WnQfwie0Y_-p2bJ-mXlMT6PrpDY4-');
	const { data }= await directus.items('articles').readByQuery({limit: -1});

    // const response = await fetch('/items/articles')
    // const data = await response.json()
    // return data.data
    return data.map(article => ({slug: article.slug, author: article.author}))
}

export async function getRecommnedationFromSlug(slug) {
   const { data } = await directus.items('articles').readByQuery({
        filter: {
            slug: slug
        }
    })
    console.log (data)
    return data[0]
}