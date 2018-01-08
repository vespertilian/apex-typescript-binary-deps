import { Callback, Context } from 'aws-lambda';
export default function (e: any, ctx: Context, cb: Callback): void {
    console.log('processing event: %j', e);
    cb(null, { hello: 'world' })
}