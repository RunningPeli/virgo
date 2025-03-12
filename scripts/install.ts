import { execSync } from 'node:child_process'
import process from 'node:process'

// Parse command line arguments
const args = process.argv.slice(2)
const useFrozenLockfile = args.includes('--frozen-lockfile')

function installDependenciesWithIgnoreScripts(): void {
  console.log('📦 Installing project dependencies (with ignore-scripts)...')
  try {
    const cmd = useFrozenLockfile
      ? 'pnpm install --ignore-scripts --frozen-lockfile'
      : 'pnpm install --ignore-scripts'
    execSync(cmd, { stdio: 'inherit' })
  }
  catch (error) {
    throw new Error(`Failed to install dependencies: ${error}`)
  }
}

function buildPackages(): void {
  console.log('🔨 Building packages...')
  try {
    execSync('pnpm build', { stdio: 'inherit' })
    console.log('✅ Package build complete!')
  }
  catch (error) {
    throw new Error(`Failed to build packages: ${error}`)
  }
}

function runFullInstall(): void {
  console.log('📦 Running full install...')
  try {
    const cmd = useFrozenLockfile
      ? 'pnpm install --frozen-lockfile'
      : 'pnpm install'
    execSync(cmd, { stdio: 'inherit' })
    console.log('✅ Full installation complete!')
  }
  catch (error) {
    throw new Error(`Failed to run full install: ${error}`)
  }
}

async function install(): Promise<void> {
  console.log('🚀 Installing project...')

  try {
    installDependenciesWithIgnoreScripts()
    buildPackages()
    runFullInstall()

    console.log('✅ Installation complete!')
  }
  catch (error) {
    console.error('❌ Installation failed:', error)
    process.exit(1)
  }
}

install().catch((error) => {
  console.error('❌ Unhandled error during installation:', error)
  process.exit(1)
})
