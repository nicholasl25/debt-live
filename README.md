# Live Debt Clocks

A simple GitHub Pages site showing two counters that grow in real time:

1. **U.S. National Debt** — anchored at **$38.91 trillion** on May 5, 2026 (Senate Joint Economic Committee gross national debt), increasing at **$2.70 trillion per year** (the reported year-over-year increase as of May 2026).

2. **The Luca Debt** — starts at **95.5** on May 20, 2026, compounding at **10% per month**.

## Local preview

```bash
cd debt-live
python3 -m http.server 8080
```

Open http://localhost:8080

## Publish to GitHub Pages

1. Create a new repository on GitHub (e.g. `debt-live`).

2. Push this folder:

```bash
cd debt-live
git init
git add .
git commit -m "Add live national and Luca debt clocks"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/debt-live.git
git push -u origin main
```

3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source**: **GitHub Actions** (this repo includes `.github/workflows/pages.yml`).

4. After the workflow runs, your site will be at `https://YOUR_USERNAME.github.io/debt-live/`

Alternatively, deploy from branch **main**, folder **/ (root)** — either method works for this static site.

## Sources

- [JEC Senate — National debt $38.91T, May 2026](https://www.jec.senate.gov/public/index.cfm/republicans/2026/5/national-debt-reaches-38-91-trillion-increased-2-70-trillion-year-over-year-increased-10-75-trillion-in-five-years)
