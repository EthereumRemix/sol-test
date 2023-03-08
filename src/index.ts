import * as core from '@actions/core'
import * as cli from '@actions/exec'
import * as fs from 'fs'
import * as path from 'path'
import { EVMVersion } from '@remix-project/remix-solidity'

async function execute () {
  const testPath = core.getInput('test-path')
  const compilerVersion = core.getInput('compiler-version')
  const evmVersion = core.getInput('evm-version') as EVMVersion || ''
  const runs = core.getInput('optimizer-runs') || '0'
  const optimize = core.getBooleanInput('optimize')
  const hardFork = core.getInput('hard-fork')
  const nodeUrl = core.getInput('node-url')
  const blockNumber = core.getInput('block-number')
  const workingDirectory = process.cwd()

  await cli.exec('ls')

  await core.group("Install @remix-project/remix-tests cli", async () => {
    const yarnLock = path.join(workingDirectory, 'yarn.lock')
    const isYarnRepo = fs.existsSync(yarnLock)
    const packageLock = path.join(workingDirectory, 'package-lock.json')
    const isNPMrepo = fs.existsSync(packageLock)

    if (isYarnRepo) {
      await cli.exec('yarn', ['global', 'add', '@remix-project/remix-tests@0.2.25-alpha.7'])
    } else if (isNPMrepo) {
      await cli.exec('npm', ['install', '@remix-project/remix-tests@0.2.25-alpha.7', '-g'])
    } else {
      await cli.exec('npm', ['init', '-y'])
      await cli.exec('npm', ['install', '@remix-project/remix-tests@0.2.25-alpha.7', '-g'])
    }
  })


  await core.group("Run tests", async () => {
    await cli.exec('remix-tests', [
      '--compiler', compilerVersion,
      '--evm', evmVersion,
      '--optimize', optimize.toString(),
      '--runs', runs,
      '--fork', hardFork,
      '--nodeUrl', nodeUrl,
      '--blockNumber', blockNumber,
      testPath])
  })
}

execute().catch(error => {
  if (typeof (error) !== 'string') {
    if (error.message) error = error.message
    else {
      try { error = 'error: ' + JSON.stringify(error) } catch (e) { console.log(e) }
    }
  }
  core.setFailed(error)
})