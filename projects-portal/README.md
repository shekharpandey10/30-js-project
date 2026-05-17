# Projects Portal

A compact, clickable index of the 30-day JS projects in this workspace. Use this portal to quickly open the local demo, the GitHub source, or the live deployment.

Why this exists
- Fast access to demos while developing.
- Easy place to paste into a README or site for sharing.

How it works
- `index.html` reads `projects.json` and renders a table of projects.

Usage

Open the portal locally:

```bash
# from the workspace root
start projects-portal/index.html    # Windows
open projects-portal/index.html     # macOS
xdg-open projects-portal/index.html # Linux
```

Publish to GitHub

1. Create a new repository on GitHub (for example: `30-js-project-portal`).
2. From the portal folder, push the code:

```bash
cd projects-portal
git init
git add .
git commit -m "Add projects portal"
git remote add origin <your-remote-url>
git branch -M main
git push -u origin main
```

Features
- Projects are listed with three quick links:
	- Local: opens the local `index.html` for the demo (if present).
	- GitHub: direct link to the repo path (formatted like `https://github.com/shekharpandey10/30-js-project/tree/main/<project-folder>`).
	- Live: the hosted deployment URL (Netlify/Vercel) when available.

Want me to do more?
- I can create the GitHub repo and push this portal for you if you provide a GitHub token with repo permissions (or you can run the commands above).
- I can also inject the GitHub URLs directly into `README.md` at the workspace root.
