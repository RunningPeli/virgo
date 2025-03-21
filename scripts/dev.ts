import type { ChildProcess } from 'node:child_process'
import { execSync, spawn } from 'node:child_process'
import process from 'node:process'

const activeProcesses: ChildProcess[] = []

function installDependencies(): void {
  console.log('📦 Installing project dependencies (with ignore-scripts)...')
  try {
    execSync('pnpm install --ignore-scripts', { stdio: 'inherit' })
  }
  catch (error) {
    throw new Error(`Failed to install dependencies: ${error}`)
  }
}

async function startPackageWatcher(): Promise<ChildProcess> {
  console.log('🔄 Starting packages watch mode...')

  const watchProcess = spawn('pnpm', ['watch'], {
    shell: true,
    stdio: ['inherit', 'pipe', 'inherit'],
  })

  activeProcesses.push(watchProcess)

  return new Promise((resolve, reject) => {
    watchProcess.stdout?.on('data', (data) => {
      const output = data.toString()
      process.stdout.write(data)

      if (output.includes('[vite:dts] Declaration files built')) {
        console.log('✅ Package build complete!')
        resolve(watchProcess)
      }
    })

    watchProcess.on('error', reject)
    watchProcess.on('exit', (code) => {
      if (code !== 0 && code !== null) {
        reject(new Error(`Watch process exited with code ${code}`))
      }
    })
  })
}

function setupDocumentation(): ChildProcess {
  console.log('📖 Setting up documentation...')
  try {
    execSync('pnpm --filter @runningpeli/virgo-docs install', { stdio: 'inherit' })
  }
  catch (error) {
    throw new Error(`Failed to install documentation dependencies: ${error}`)
  }

  console.log('📚 Starting documentation dev mode...')
  const env = { ...process.env, NODE_ENV: 'development' }
  const docsProcess = spawn('pnpm', ['dev:docs'], {
    stdio: 'inherit',
    shell: true,
    env,
  })

  activeProcesses.push(docsProcess)
  return docsProcess
}

function startVuePlayground(): ChildProcess {
  console.log('🚀 Setting up Vue playground...')
  try {
    execSync('pnpm --filter playground-vue install', { stdio: 'inherit' })
  }
  catch (error) {
    throw new Error(`Failed to install Vue playground dependencies: ${error}`)
  }

  console.log('🎮 Starting Vue playground dev mode...')
  const env = { ...process.env, NODE_ENV: 'development' }
  const playgroundProcess = spawn('pnpm', ['--filter', 'playground-vue', 'dev'], {
    stdio: 'inherit',
    shell: true,
    env,
  })

  activeProcesses.push(playgroundProcess)
  return playgroundProcess
}

function startNuxtPlayground(): ChildProcess {
  console.log('🚀 Setting up Nuxt playground...')
  try {
    execSync('pnpm --filter playground-nuxt install', { stdio: 'inherit' })
  }
  catch (error) {
    throw new Error(`Failed to install Nuxt playground dependencies: ${error}`)
  }

  console.log('🎮 Starting Nuxt playground dev mode...')
  const env = { ...process.env, NODE_ENV: 'development' }
  const playgroundProcess = spawn('pnpm', ['--filter', 'playground-nuxt', 'dev'], {
    stdio: 'inherit',
    shell: true,
    env,
  })

  activeProcesses.push(playgroundProcess)
  return playgroundProcess
}

function setupCleanup(): void {
  process.on('SIGINT', () => {
    console.log('👋 Shutting down all processes...')
    activeProcesses.forEach(proc => proc.kill())
    process.exit(0)
  })

  process.stdin.resume()
}

function parseArgs(): { vue: boolean, nuxt: boolean, docs: boolean } {
  const args = process.argv.slice(2)
  return {
    vue: args.includes('--vue'),
    nuxt: args.includes('--nuxt'),
    docs: args.includes('--docs') || (!args.includes('--vue') && !args.includes('--nuxt')),
  }
}

async function dev(): Promise<void> {
  console.log('🚀 Starting development environment...')

  const args = parseArgs()

  try {
    installDependencies()

    await startPackageWatcher()

    if (args.docs) {
      setupDocumentation()
    }

    if (args.vue) {
      startVuePlayground()
    }

    if (args.nuxt) {
      startNuxtPlayground()
    }

    console.log('✅ Development environment ready!')
    console.log('   Press Ctrl+C to stop all processes.')
    setupCleanup()
  }
  catch (error) {
    console.error('❌ Dev setup failed:', error)
    activeProcesses.forEach(proc => proc.kill())
    process.exit(1)
  }
}

dev().catch((error) => {
  console.error('❌ Unhandled error during development setup:', error)
  process.exit(1)
})
