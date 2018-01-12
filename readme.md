## Example of a complex typescript build for Apex lambda function deployment.

### Overview of build architecture

- *axios*
- *hello-one*
- *lodash-upper*

These functions are built with webpack which will bundle all all the dependencies into a single file. The webpack build hook is set in the `project-stub.json` file. See `webpack.config.js` for webpack settings.

Note in `webpack.config` the externals option prevents libraries being bundled in the code. You don't need to bundle `aws-sdk` as this is provided in lambda by default.

- *bcrypt*

As bcrypt relies on a c binary we need to bundle it with it's node modules. The `function.json` file inside the bcrypt function folder is used to override the default webpack bundle used for the other functions which don't have binary files.

Build command override in `functions\bcrypt\function.json`:

```
    "../../node_modules/.bin/webpack --config ../../webpack.config.js && cd lib && npm init -y && npm install bcrypt --save --target=6.1.0 --target_arch=x64 --target_platform=linux --target_libc=glibc"
```

This functions calls webpack with the webpack config file, then npm init. Then it npm installs bcrypt with flags that will download a binary which is compatible with the AWS linux runtime. Without these flags the binary will be compatible with your personal computer not lambda.

Note in `webpack.config` the externals option prevents libraries being bundled in the code. You don't need to bundle `bcrypt` as we are installing it with when we run the build command.

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

Add profile to `project.json` so your local settings dont get forgotten.

Feel free to delete the .js file created in the hello folder by apex init. The .ts file is the file that will actually be deployed.

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
