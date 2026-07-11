# CFPS Website

The official site for the Cougar Financial Planning Society at the University of Houston. Plain HTML, CSS, and JavaScript. No frameworks, no build step, no paid services. It runs anywhere that serves static files.

## What is in here

```
cfps-website/
  index.html        Home
  about.html        Mission, story, nonprofit and EIN info
  events.html       Fall 2026 calendar with category filters
  join.html         Benefits, dues, FAQ, enrollment form
  leadership.html   Exec board, committees, CIG
  partners.html     Sponsorship pitch and tier table
  resources.html    Member resources and links
  404.html          Custom not found page
  css/styles.css    All styling
  js/main.js        Nav, accordion, small shared behavior
  js/events.js      THE EVENTS LIST. Edit this each semester.
  assets/           Logo and favicons
```

## Deploy for free

### Option A: GitHub Pages (recommended, free forever)
1. Create a free account at github.com if you do not have one.
2. Click New repository, name it something like `cfps-website`, keep it Public, and create it.
3. Click "uploading an existing file" and drag everything inside this folder in (all the html files plus the css, js, and assets folders). Commit.
4. Go to Settings, then Pages. Under Source pick "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
5. In a minute or two the site is live at `https://YOURUSERNAME.github.io/cfps-website/`. The 404 page works automatically.

To use a custom domain later (like cfpsuh.org), buy the domain anywhere and point it in Settings, then Pages. The hosting itself stays free.

### Option B: Netlify Drop (fastest)
Go to app.netlify.com/drop and drag this whole folder onto the page. You get a live URL in seconds. Free account required to keep it permanently.

## Updating the site

### Events (every semester)
Open `js/events.js`. The whole calendar is one list at the top with instructions written right above it. Copy a block, paste it, change the text. When a date gets locked in, change `tentative: true` to `tentative: false` and the site shows a Confirmed badge. Nothing else needs to change; month headers and filters build themselves.

### Officers (every election)
Open `leadership.html`. There is a comment in the file marking the exec board grid. Each officer is one small block: initials, name, role. Copy, paste, edit. Committee officers are right below in the same pattern.

### Nav and footer
The nav and footer are repeated on every page, which keeps the site simple with no build tools. If you ever change a nav link or footer line, make the same change in all nine html files. A find and replace across the folder takes about a minute in any editor.

## Adding real photos later
The design intentionally ships without stock photos. When you have real event and team photos:
1. Drop them into `assets/` (jpg, reasonably sized, under about 400 KB each is ideal).
2. Good homes for them: the About page next to the mission, the Leadership page (swap a monogram circle for a real headshot by replacing the `monogram` div with an `img`), and event recap sections you might add later.

## Logo quality note
The current logo file is 170 by 170 pixels, which is fine for the nav and favicons but will look soft anywhere large. When you get a higher resolution export (512 pixels or bigger, or the original design file), just replace `assets/cfps-logo.jpg` with it, keeping the same filename, and everything updates automatically.

## Contacts baked into the site
- Enrollment form: the Fall 2026 Google Form, linked from every page
- Sponsorship: Tatiana Benitez, tcbenite@gmail.com
- Instagram: instagram.com/uh_cfps
- LinkedIn: linkedin.com/company/cougarfinancialplanningsociety
- EIN 41-3308399 appears on the About page and in the footer of every page
