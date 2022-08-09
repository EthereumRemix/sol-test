import * as core from '@actions/core'
import * as cli from '@actions/exec'
import * as fs from 'fs'
import * as path from 'path'

async function execute () {
  const testPath = core.getInput('test-path')
  const compilerVersion = core.getInput('compiler-version')
  const workingDirectory = process.cwd()

  await cli.exec('ls')

  await core.group("Install @remix-project/remix-tests cli", async () => {
    const yarnLock = path.join(workingDirectory, 'yarn.lock')
    const isYarnRepo = fs.existsSync(yarnLock)
    const packageLock = path.join(workingDirectory, 'package-lock.json')
    const isNPMrepo = fs.existsSync(packageLock)

    if (isYarnRepo) {
      await cli.exec('yarn', ['global', 'add', '@remix-project/remix-tests@0.2.16-alpha.0'])
    } else if (isNPMrepo) {
      await cli.exec('npm', ['install', '@remix-project/remix-tests@0.2.16-alpha.0', '-g'])
    } else {
      await cli.exec('npm', ['init', '-y'])
      await cli.exec('npm', ['install', '@remix-project/remix-tests@0.2.16-alpha.0', '-g'])
    }
  })


  await core.group("Run tests", async () => {
    await cli.exec('remix-tests', ['--compiler', compilerVersion, testPath])
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