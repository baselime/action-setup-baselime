# Contributing to Baselime Github Setup Action

You want to help improve the Baselime Github Setup Action? Awesome, thank you!

## Reporting Issues 

Bugs, feature requests, and development-related questions should be directed to our [GitHub issue tracker](https://github.com/baselime/action-setup-baselime/issues).

When reporting a bug, please try and provide as much context as possible such as your operating system, Node version, and anything else that might be relevant to the bug. For feature requests, please explain what you're trying to do, and how the requested feature would help you do that.

## Building and Packaging the project

### Prerequisites:

- Node 16.15+ Installed.

```shell
$ npm run build
```

- Packaging the binary

```shell
# Linux
$ npm run package:linux

# MacOS
$ npm run package:macos
```
 
## Setup

[Fork](https://github.com/baselime/action-setup-baselime) then clone this repository:

```bash
$ git clone https://github.com/baselime/action-setup-baselime.git
$ cd action-setup-baselime
$ npm ci
```

Install [@vercel/ncc](https://www.npmjs.com/package/@vercel/ncc)

```bash
$ npm i -g @vercel/ncc
```

Compile the module into a single file after making you changes

```bash
$ npm run compile
```
