# Professional Git Ignore Guide

## Files and Folders That Should NEVER Be Committed to GitHub

### 🔴 CRITICAL - Security & Sensitive Data

#### Environment Variables & Secrets
- **`.env`** - Environment variables (API keys, database passwords, secrets)
- **`.env.local`**, **`.env.production`** - Environment-specific configs
- **`*.key`**, **`*.pem`**, **`*.cert`** - SSL certificates and private keys
- **`secrets/`** - Any folder containing secrets
- **`credentials.json`** - API credentials
- **`config/secrets.json`** - Secret configuration files

**Why?** These files contain sensitive information that could compromise your application if exposed.

---

### 📦 Dependencies

#### Node.js
- **`node_modules/`** - Installed npm packages
- **`.pnp/`** - Yarn PnP files

#### Python
- **`venv/`**, **`env/`** - Virtual environments
- **`__pycache__/`** - Python cache files
- **`*.pyc`** - Compiled Python files

#### Java
- **`target/`** - Maven build output
- **`build/`** - Gradle build output

**Why?** Dependencies can be reinstalled using package managers. They're large and change frequently.

---

### 🏗️ Build Artifacts & Compiled Code

#### Frontend Builds
- **`.next/`** - Next.js build output
- **`dist/`** - Distribution/build folders
- **`build/`** - Build output directories
- **`out/`** - Export/output directories

#### Backend Builds
- **`dist/`** - Compiled TypeScript/JavaScript
- **`build/`** - Compiled code
- **`*.class`** - Compiled Java files
- **`*.o`**, **`*.so`** - Compiled C/C++ files

**Why?** Build artifacts are generated from source code and can be recreated. They're large and unnecessary in version control.

---

### 💾 Database Files

- **`*.sqlite`**, **`*.sqlite3`** - SQLite database files
- **`*.db`** - Database files
- **`*.dump`** - Database dumps
- **`data/`** - Local data directories

**Why?** Database files are large, change frequently, and should be managed separately.

---

### 📝 Logs & Temporary Files

- **`logs/`** - Log directories
- **`*.log`** - Log files (npm, yarn, application logs)
- **`*.tmp`**, **`*.temp`** - Temporary files
- **`.cache/`** - Cache directories

**Why?** Logs are generated at runtime and can be large. They don't need version control.

---

### 💻 IDE & Editor Files

#### Visual Studio Code
- **`.vscode/`** - VS Code settings (except shared settings)
- **`*.code-workspace`** - Workspace files

#### IntelliJ / WebStorm
- **`.idea/`** - IntelliJ IDEA configuration
- **`*.iml`** - IntelliJ module files

#### Sublime Text
- **`*.sublime-project`**, **`*.sublime-workspace`**

#### Vim
- **`*.swp`**, **`*.swo`** - Swap files

**Why?** IDE settings are personal preferences and can cause conflicts between team members.

**Exception:** You can commit shared settings like:
- `.vscode/settings.json` (with team-agreed settings)
- `.vscode/extensions.json` (recommended extensions)

---

### 🖥️ Operating System Files

#### macOS
- **`.DS_Store`** - Finder metadata
- **`.AppleDouble`** - AppleDouble files
- **`.Trashes`** - Trash folder

#### Windows
- **`Thumbs.db`** - Thumbnail cache
- **`desktop.ini`** - Folder customization
- **`$RECYCLE.BIN/`** - Recycle bin

#### Linux
- **`.directory`** - KDE folder metadata
- **`.Trash-*`** - Trash folders

**Why?** OS-specific files are not relevant to the project and can cause issues across different operating systems.

---

### 🧪 Testing & Coverage

- **`coverage/`** - Test coverage reports
- **`.nyc_output/`** - NYC coverage output
- **`.pytest_cache/`** - Python test cache
- **`*.lcov`** - Coverage data files

**Why?** Coverage reports are generated and can be recreated. They're often large.

---

### ☁️ Deployment & Cloud Files

- **`.vercel/`** - Vercel deployment files
- **`.aws-sam/`** - AWS SAM build artifacts
- **`.heroku/`** - Heroku files
- **`.gcloudignore`** - Google Cloud ignore patterns

**Why?** Deployment-specific files are environment-dependent and shouldn't be in source control.

---

### 📦 Package Manager Lock Files (Optional)

**Decision:** Whether to commit lock files depends on your team's preference:

#### ✅ Commit (Recommended for most projects)
- **`package-lock.json`** - Ensures consistent dependency versions
- **`yarn.lock`** - Ensures consistent dependency versions
- **`pnpm-lock.yaml`** - Ensures consistent dependency versions

**Why commit?** Ensures all team members use the same dependency versions.

#### ❌ Don't Commit (Less common)
- Only if you want to allow flexible dependency resolution

---

### 🗂️ Archives & Backups

- **`*.zip`**, **`*.tar`**, **`*.tar.gz`** - Archive files
- **`*.bak`**, **`*.backup`** - Backup files
- **`*.old`**, **`*.orig`** - Old/original files

**Why?** Archives are large and can be recreated. Backups shouldn't be in version control.

---

## Best Practices

### 1. **Always Use .gitignore**
   - Create a comprehensive `.gitignore` file
   - Use language/framework-specific templates

### 2. **Review Before Committing**
   ```bash
   git status
   git diff
   ```

### 3. **Use .gitignore Templates**
   - GitHub provides templates: https://github.com/github/gitignore
   - Use tools like `gitignore.io`

### 4. **Never Commit Secrets**
   - If accidentally committed, use `git-filter-repo` or `BFG Repo-Cleaner` to remove from history
   - Rotate any exposed secrets immediately

### 5. **Use Environment Examples**
   - Commit `.env.example` with placeholder values
   - Document required environment variables in README

### 6. **Regular Audits**
   - Periodically review what's in your repository
   - Use tools like `git-secrets` to prevent committing secrets

---

## Quick Checklist

Before committing, ensure you're NOT committing:
- [ ] `node_modules/` or other dependency folders
- [ ] `.env` or any environment files with secrets
- [ ] Build artifacts (`.next/`, `dist/`, `build/`)
- [ ] Log files (`*.log`)
- [ ] IDE-specific files (`.vscode/`, `.idea/`)
- [ ] OS files (`.DS_Store`, `Thumbs.db`)
- [ ] Database files (`*.sqlite`, `*.db`)
- [ ] Temporary files (`*.tmp`, `*.temp`)
- [ ] Private keys or certificates (`*.key`, `*.pem`)

---

## Resources

- [GitHub's gitignore templates](https://github.com/github/gitignore)
- [gitignore.io](https://www.toptal.com/developers/gitignore) - Generate .gitignore files
- [GitHub's guide on sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)

