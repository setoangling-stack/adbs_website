# Tutorial Deploy Website ADBS ke Vercel (Option A)

## Step 1: Siapkan Git Lokal

Buka Command Prompt/PowerShell di folder project:

```bash
cd C:\Users\Win10\Downloads\adbswebsitefix
```

Inisialisasi Git:

```bash
git init
git config user.name "Nama Kamu"
git config user.email "email@gmail.com"
```

## Step 2: Add & Commit Files

```bash
git add .
git commit -m "Initial ADBS website commit"
```

Output normal:
```
[main (root-commit) xxxxx] Initial ADBS website commit
 7 files changed, 500 insertions(+)
```

## Step 3: Buat Repository di GitHub

1. Pergi ke **github.com** (login/signup dulu jika belum)
2. Klik tombol **"+" > "New repository"** di kanan atas
3. Isi form:
   - **Repository name**: `adbs-website` (atau nama lain)
   - **Description**: `SMP Ahmad Dahlan Sukoharjo Website`
   - **Public** (pilih Public agar bisa diakses)
   - ❌ Jangan centang "Add README" (sudah ada file)
4. Klik **"Create repository"**

Akan muncul halaman dengan instruksi. Copy link repo-mu (format: `https://github.com/username/adbs-website.git`)

## Step 4: Push ke GitHub

Di Command Prompt, jalankan:

```bash
git remote add origin https://github.com/username/adbs-website.git
```

Ganti `username` dengan username GitHub-mu.

Kemudian push:

```bash
git branch -M main
git push -u origin main
```

Akan diminta login GitHub. Pilih browser auth atau buat Personal Access Token.

**Output sukses:**
```
Enumerating objects: 7, done.
...
To https://github.com/username/adbs-website.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

## Step 5: Connect ke Vercel

1. Pergi ke **vercel.com** (login/signup dengan GitHub)
2. Klik **"Add New..."** > **"Project"**
3. Pilih repository `adbs-website` dari list
4. Klik **"Import"**
5. Di halaman config:
   - **Framework Preset**: Biarkan kosong/pilih "Other"
   - **Build Command**: Kosongkan
   - **Output Directory**: `.` (atau kosong)
   - **Root Directory**: `./`
6. Klik **"Deploy"**

Tunggu 30-60 detik. Vercel akan:
- Clone repo dari GitHub
- Build & deploy
- Generate URL (contoh: `adbs-website-alpha.vercel.app`)

## Step 6: Akses Website

Klik link yang diberikan Vercel. Website live di internet!

---

## Workflow Kedepannya

Setiap kali edit file:

```bash
git add .
git commit -m "Deskripsi perubahan"
git push origin main
```

Vercel otomatis redeploy dalam 1-2 menit.

## Troubleshoot

**Git command not found?**
- Install Git: https://git-scm.com/download/win

**Login GitHub di browser gagal?**
- Buat Personal Access Token: Settings > Developer Settings > Personal Access Tokens > Generate New Token
- Copy token, paste saat diminta password

**Vercel deploy stuck?**
- Cek build log di Vercel dashboard
- Pastikan index.html di root folder

---

✅ Selesai! Website ADBS live di Vercel dengan domain gratis.
