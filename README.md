## Action For Running Solidity Unit Tests
[![npm version](https://badge.fury.io/js/%40remix-project%2Fremix-tests.svg)](https://www.npmjs.com/package/@remix-project/remix-tests)
[![npm](https://img.shields.io/npm/dt/@remix-project/remix-tests.svg?label=Total%20Downloads)](https://www.npmjs.com/package/@remix-project/remix-tests)
[![npm](https://img.shields.io/npm/dw/@remix-project/remix-tests.svg)](https://www.npmjs.com/package/@remix-project/remix-tests)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ethereum/remix-project/tree/master/libs/remix-tests)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/ethereum/remix-project/issues)

This GitHub action enables you to run Solidity Unit Tests as part of your continuous integration and deployment process. 
To know more about Remix IDE `Solidity Unit Testing`, visit [Remix IDE official documentation](https://remix-ide.readthedocs.io/en/latest/unittesting.html), [Remix Tests Library](https://github.com/ethereum/remix-project/blob/master/libs/remix-tests/README.md).

### Example workflow: Sample
```
name: solidity-unit-testing-action
on: [push]

jobs:
  run_sample_test_job:
    runs-on: ubuntu-latest
    name: A job to run sample solidity tests
    steps:
      - name: Checkout
         uses: actions/checkout@v2
      - name: Environment Setup
         uses: actions/setup-node@v3
         with:
             node-version: 14.17.6
      - name: Run SUT Action
        uses: EthereumRemix/sol-test@v1
        with:
            test-path: 'sample/tests'
            compiler-version: '0.8.15'
```


### License
MIT © 2018-22 Remix Team