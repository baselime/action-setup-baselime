# action-setup-baselime

# :gear: `action-setup-baselime` ![](https://github.com/Baselime/action-setup-baselime/workflows/Tests/badge.svg)
> Setup the Baselime CLI in Github actions

## About
This action sets up the [Baselime CLI](https://docs.baselime.io/cli/overview/) in Github Actions.

This action can be run on `ubuntu-latest`, and `macos-latest` GitHub Actions runners, and will install and expose a specified version of the `baselime` CLI on the runner environment.

## Usage

Setup the `baselime` CLI:

```yaml
steps:
- uses: baselime/action-setup-baselime@v0.0.1
  with:
    baselime-api-key: <YOUR_API_KEY> # Can be imported from Github Actions Secrets
```

A specific version of the `baselime` CLI can be installed:

```yaml
steps:
- uses: baselime/action-setup-baselime@v1
  with:
    baselime-api-key: <YOUR_API_KEY> # Can be imported from Github Actions Secrets
    version:
      0.0.18
```

## Inputs
The actions supports the following inputs:

- `baselime-api-key`: The API key to use with the Baselime CLI. You can get your API key by running `baselime auth status` in your local terminal or through the Baselime console
- `version`: The version of `baselime` to install, defaulting to the latest version

## Contributing

Feel free to submit PRs or to fill issues. Every kind of help is appreciated. 

Kindly check our [Contributing](Contributing.md) guide on how to propose
bugfixes and improvements, and submitting pull requests to the project.

## License

&copy; Baselime Limited, 2022

Distributed under MIT License (`The MIT License`).

See [LICENSE](LICENSE) for more information.

<!-- Badges -->

[docs]: https://docs.baselime.io
[docs_badge]: https://img.shields.io/badge/docs-reference-blue.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[license_badge]: https://img.shields.io/github/license/baselime/cli.svg?color=blue&style=flat-square&ghcache=unused

