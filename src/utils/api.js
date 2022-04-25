import utils from './request'
console.log('utils', utils)

const fetch = utils.axios

export function downloadFile(data) {
    return fetch({
        url: data.url,
        method: 'get',
        data: {
            type: data.type
        }
    })
}
