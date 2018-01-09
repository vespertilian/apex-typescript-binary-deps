
To run the example first setup your [AWS Credentials](http://apex.run/#aws-credentials).

Add profile to the project.json


Install NPM dependencies:

```
$ npm install
```

Initialize the function role:
```
$ apex init
```

Add extra options from `project.json_stub` to generated `project.json` to include the runtime, handler and hook  options.

Deploy the functions:

```
$ apex deploy
```

Try it out:

```
$ apex invoke axios
```

```
$ apex invoke hello-one
```

```
$ apex invoke lodash-upper
```

