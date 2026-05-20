# Live Debt Clocks

A simple GitHub Pages site showing two counters that grow in real time:

1. **U.S. National Debt** — anchored at **$38.91 trillion** on May 5, 2026 (Senate Joint Economic Committee gross national debt), increasing at **$2.70 trillion per year** (the reported year-over-year increase as of May 2026).

2. **The Luca Debt** — starts at **$95.50** on May 20, 2026, compounding at **10% per month**.

## Local preview

```bash
cd debt-live
python3 -m http.server 8080
```

Open http://localhost:8080

## Publish to GitHub Pages

Repo: [github.com/nicholasl25/debt-live](https://github.com/nicholasl25/debt-live)

One-time setup (no GitHub Actions required):

1. Open **Settings → Pages** on the repo.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two, the site is live at **https://nicholasl25.github.io/debt-live/**

If you previously enabled **GitHub Actions** as the Pages source, switch it to **Deploy from a branch** as above. The old deploy workflow was removed because the Actions token cannot create or enable Pages on its own.

## Sources

- [JEC Senate — National debt $38.91T, May 2026](https://www.jec.senate.gov/public/index.cfm/republicans/2026/5/national-debt-reaches-38-91-trillion-increased-2-70-trillion-year-over-year-increased-10-75-trillion-in-five-years)
