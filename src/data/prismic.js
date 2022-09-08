import * as prismic from '@prismicio/client'
import fetch from 'node-fetch'

export async function getRecommendationLinks() {
    const repoName = 'recommendations'
    const endpoint = prismic.getEndpoint(repoName)
    const client = prismic.createClient(endpoint, { fetch })
    return await client.getAllByType('recommendations')
}

export async function getDataFromUid(uid) {
    const repoName = 'recommendations'
    const endpoint = prismic.getEndpoint(repoName)
    const client = prismic.createClient(endpoint, { fetch })
    return client.getByUID('recommendations', uid)
}