import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const ROOT_DIR = path.resolve(process.cwd())
const DIRS_TO_CLEAN = ['node_modules', '.dist', '.output', '.nuxt', 'dist']

let totalRemoved = 0
let totalErrors = 0

const cleanRootNodeModules = process.argv.includes('--all')

function removeDirectory(dir: string): boolean {
  const relativePath = path.relative(ROOT_DIR, dir)
  console.log(`🗑️  Removing: ${relativePath}`)

  try {
    fs.rmSync(dir, { recursive: true, force: true })
    totalRemoved++
    return true
  }
  catch (err) {
    console.error(`❌ Failed to remove ${relativePath}: ${(err as Error).message}`)
    totalErrors++
    return false
  }
}

function shouldRemoveDirectory(dir: string): boolean {
  const dirName = path.basename(dir)
  return DIRS_TO_CLEAN.includes(dirName)
    && (dir !== path.join(ROOT_DIR, 'node_modules') || cleanRootNodeModules)
}

function findAndRemoveDirs(currentDir: string): void {
  try {
    if (shouldRemoveDirectory(currentDir)) {
      removeDirectory(currentDir)
      return
    }

    const entries = fs.readdirSync(currentDir, { withFileTypes: true })
    entries
      .filter(entry => entry.isDirectory())
      .forEach(entry => findAndRemoveDirs(path.join(currentDir, entry.name)))
  }
  catch (error) {
    console.error(`⚠️ Could not access directory: ${path.relative(ROOT_DIR, currentDir)}`, error)
  }
}

function printSummary() {
  if (!cleanRootNodeModules) {
    console.log('\n📝 Note: Root node_modules was preserved to keep dependencies available.')
    console.log('   To clean everything including root node_modules, run: pnpm clean --all\n')
  }

  const message = totalErrors > 0
    ? `✅ Cleaned workspace! Removed ${totalRemoved} directories with ${totalErrors} errors.`
    : `✅ Cleaned workspace! Removed ${totalRemoved} directories.`

  console.log(message)
}

try {
  console.log('🧹 Cleaning workspace...')
  findAndRemoveDirs(ROOT_DIR)
  printSummary()
}
catch (error) {
  console.error('❌ Cleaning failed:', error)
  process.exit(1)
}
