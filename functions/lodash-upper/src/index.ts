import { Callback, Context } from 'aws-lambda';
import * as uppercase from 'lodash.uppercase'
console.log('starting function');
export default function(e: any, ctx: Context, cb: Callback): void {
    console.log('processing event: %j', e);
    cb(null, { hello: uppercase('world')})
}