## Example of a complex typescript build for Apex lambda function deployment.

### Overview of build architecture

- *axios*
- *hello-one*
- *lodash-upper*

These functions are built with webpack which will bundle all all the dependencies into a single file. The webpack build hook is set in the `project-stub.json` file. See webpack.config.js for webpack settings.

- *bcrypt*

As bcrypt relies on a c binary we need to bundle it with it's node modules. The `function.json` and `tsconfig.json` files inside the bcrypt function folder are used to override the default webpack bundle used for the other functions which don't have binary files.

Build command override in `functions\bcrypt\function.json`:

```
../../node_modules/typescript/bin/tsc -p tsconfig.json && cd lib && npm init -y && npm install bcrypt --save --target=6.1.0 --target_arch=x64 --target_platform=linux --target_libc=glibc
```

This functions calls tsc (the typescript compiler), then npm init. Then it npm installs bcrypt with flags that will download a binary which is compatible with the AWS linux runtime. Without these flags the binary will be compatible with your personal computer not lambda.

### Get setup

To run the example first setup your [AWS Credentials](http://apex.run/#aws-credentials).

Install NPM dependencies:

```
$ npm install
```

Initialize the function role:
```
$ apex init
```

Add extra options from `project.json_stub` to generated `project.json` to include the runtime, handler and hook options.

Add profile to `project.json`

*Deploy the functions:*

```
$ apex deploy
```

*Try it out:*

```
$ apex invoke axios
```

```
$ apex invoke hello-one
```

```
$ apex invoke lodash-upper
```

```
$ apex invoke bcrypt
```
