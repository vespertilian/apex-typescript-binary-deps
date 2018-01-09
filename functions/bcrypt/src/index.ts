import { Callback, Context } from 'aws-lambda';
import * as bcrypt from 'bcrypt';

export default async function (e: any, ctx: Context, cb: Callback) {
    console.log('start bcrypt test');
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD';
    const someOtherPlaintextPassword = 'not_bacon';

    const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
    console.log('bcrypt hash', hash);

    const compareResultWithPassword = await bcrypt.compare(myPlaintextPassword, hash);
    console.log('isPassword - should be true, answer:', compareResultWithPassword);

    const compareResultWithSomeotherPassword = await bcrypt.compare(someOtherPlaintextPassword, hash);
    console.log('isPassword - should be false, answer:', compareResultWithSomeotherPassword);

    cb(null, { passwordResult: compareResultWithPassword})
}

