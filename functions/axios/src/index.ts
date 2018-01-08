import axios from 'axios'
import { Context } from 'aws-lambda';

export default async function(e: any, ctx: Context) {

    let urls: string[] = ['http://cameronbatt.com'];
    if(Array.isArray(e.urls)) {
        urls = e.urls
    }
    console.log('fetching %d urls', urls.length);
    try {
        const res = await Promise.all(urls.map(async function(url){
            console.log('fetching %s', url);
            return {
                status: (await axios.get(url)).status,
                url
            }
        }));

        ctx.succeed(res)
    } catch (err) {
        ctx.fail(err)
    }
}