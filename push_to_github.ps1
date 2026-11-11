# Afrah Al Jazeera - Quick GitHub Push Script
# Usage: .\push_to_github.ps1 -RepoUrl "https://github.com/your-username/your-repo.git"

param(
  [Parameter(Mandatory=$false)]
  [string]$RepoUrl
)

if (-not $RepoUrl) {
  $RepoUrl = Read-Host "Enter your GitHub Repository URL (e.g. https://github.com/username/repo.git)"
}

if (-not $RepoUrl) {
  Write-Host "No URL provided. Exiting." -ForegroundColor Red
  exit 1
}

Write-Host "Configuring remote origin to: $RepoUrl" -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin $RepoUrl

Write-Host "Setting branch to main..." -ForegroundColor Cyan
git branch -M main

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -eq 0) {
  Write-Host "`nSuccessfully pushed to GitHub!" -ForegroundColor Green
  Write-Host "Your website will automatically deploy to GitHub Pages via the included workflow." -ForegroundColor Cyan
} else {
  Write-Host "`nPush encountered an issue. Check your repository permissions and try again." -ForegroundColor Yellow
}
