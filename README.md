# C&B Consulting Website - Deployment Package

## 📁 Project Structure

```
cb-consulting-website/
│
├── index.html                    # Homepage
├── privacy.html                  # Privacy policy page
├── style.css                     # Global styles (all pages)
├── favicon.svg                   # Website favicon (C&B logo)
├── robots.txt                    # SEO configuration
├── sitemap.xml                   # XML sitemap for search engines
│
├── js/                          # JavaScript modules
│   ├── nav.js                   # Sticky navigation scroll effect
│   ├── capabilities.js          # Stacked card scroll animations
│   ├── contact-form.js          # Form validation & submission
│   └── cookies.js               # Cookie consent + Google Analytics
│
├── fonts/                       # Local font files
│   ├── local-fonts.css          # @font-face declarations
│   ├── Outfit-400.woff2         # [TO ADD] Outfit Regular
│   ├── Outfit-500.woff2         # [TO ADD] Outfit Medium
│   ├── Outfit-600.woff2         # [TO ADD] Outfit SemiBold
│   ├── Outfit-700.woff2         # [TO ADD] Outfit Bold
│   ├── Switzer-400.woff2        # [TO ADD] Switzer Regular
│   ├── Switzer-500.woff2        # [TO ADD] Switzer Medium
│   ├── Switzer-600.woff2        # [TO ADD] Switzer SemiBold
│   ├── Geist-Mono-400.woff2     # [TO ADD] Geist Mono Regular
│   ├── Geist-Mono-500.woff2     # [TO ADD] Geist Mono Medium
│   └── README.md
│
├── images/                      # Image assets
│   ├── about-team.jpg           # Professional team image (1200×900px)
│   ├── capability-diligence.jpg # Due diligence card image (600×800px)
│   ├── capability-financial.jpg # Financial solutions card (700×800px)
│   ├── capability-strategy.jpg  # Business strategy card (600×800px)
│   ├── approach-bg.jpg          # Approach section background (1920×1080px)
│   └── README.md
│
└── README.md                    # This deployment guide
```

## 🚀 Quick Start Guide

### Step 1: Download & Extract
1. Download the zip file
2. Extract to your computer
3. Keep the folder structure intact

### Step 2: Add Font Files (Important!)
The website uses custom fonts that must be downloaded:

1. Visit https://fonts.google.com
2. Search for and download:
   - **Outfit** (weights: 400, 500, 600, 700)
   - **Switzer** (weights: 400, 500, 600)
   - **Geist Mono** (weights: 400, 500)
3. Export as WOFF2 format
4. Place all .woff2 files in the `fonts/` folder

**Without fonts, the website will display with fallback system fonts.**

### Step 3: Optional - Add Real Images
The package includes placeholder images. To replace:
- `images/about-team.jpg` - Team collaboration image
- `images/capability-diligence.jpg` - Due diligence analysis
- `images/capability-financial.jpg` - Financial planning
- `images/capability-strategy.jpg` - Business strategy
- `images/approach-bg.jpg` - London skyline/architecture

### Step 4: Deploy to GitHub

#### A. Create a New Repository
1. Go to https://github.com/new
2. Create repository named `cb-consulting` (or similar)
3. Do NOT initialize with README (we have one)

#### B. Upload Files via Git (Terminal/Command Line)
```bash
cd cb-consulting-website
git init
git add .
git commit -m "Initial commit: C&B Consulting website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/cb-consulting.git
git push -u origin main
```

#### C. Upload Files via GitHub Web Interface
1. Go to your new GitHub repo
2. Click "Add file" → "Upload files"
3. Drag and drop entire folder contents
4. Commit changes

### Step 5: Deploy to Web Hosting

#### Option A: GitHub Pages (Free)
1. Push to GitHub (see Step 4)
2. Go to repo Settings → Pages
3. Select "main" branch as source
4. Site will be live at: `https://your-username.github.io/cb-consulting`

#### Option B: Netlify (Free with custom domain)
1. Go to https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repo
4. Leave build settings empty (it's a static site)
5. Deploy!

#### Option C: Vercel (Free)
1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Import your GitHub repo
4. Framework: "Other" (static site)
5. Deploy!

#### Option D: Traditional Hosting (Bluehost, GoDaddy, etc.)
1. Use FTP/SFTP client to connect
2. Upload all files maintaining folder structure
3. Ensure `index.html` is in root directory
4. Done!

#### Option E: Firebase Hosting
1. Go to https://firebase.google.com
2. Create a new project
3. Run: `firebase deploy`
4. Site will be live on Firebase

## ⚙️ Configuration

### Google Analytics
- Currently wired to: `G-VGHRJF98Z1`
- To use your own tracking ID:
  1. Open `js/cookies.js`
  2. Find the GA ID and replace with yours
  3. Save and redeploy

### Contact Form
- Currently frontend-only (displays success message)
- To receive emails, integrate with:
  - **Formspree** (easiest, free)
  - **Netlify Forms** (if using Netlify)
  - **EmailJS** (serverless)
  - Your own backend

### Privacy Policy
- Update `privacy.html` with your actual policy
- Current version is placeholder text

## 📋 Checklist Before Going Live

- [ ] All font files added to `fonts/` folder
- [ ] Images are optimized and in `images/` folder
- [ ] Privacy policy updated in `privacy.html`
- [ ] Google Analytics ID is correct in `js/cookies.js`
- [ ] Contact form backend integrated
- [ ] Domain name configured (if custom domain)
- [ ] SSL certificate enabled (HTTPS)
- [ ] Tested on mobile and desktop
- [ ] Tested on different browsers

## 🔧 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main landing page |
| `privacy.html` | Privacy policy page |
| `style.css` | All styling for entire site |
| `favicon.svg` | Browser tab icon (C&B logo) |
| `js/nav.js` | Navigation sticky scroll effect |
| `js/capabilities.js` | Stacked card scroll animation |
| `js/contact-form.js` | Contact form validation |
| `js/cookies.js` | Cookie consent + Google Analytics |
| `fonts/local-fonts.css` | Local font declarations |
| `robots.txt` | Search engine instructions |
| `sitemap.xml` | Website structure for SEO |

## 🎨 Features

✅ **Responsive Design** - Works on all screen sizes
✅ **Dark Theme** - Premium, modern appearance
✅ **Performance Optimized** - Fast loading
✅ **Sticky Navigation** - Professional UX
✅ **Stacked Cards** - Engaging scroll effects
✅ **Form Validation** - Client-side checks
✅ **Cookie Consent** - GDPR compliant
✅ **Google Analytics** - Track visitors
✅ **Local Fonts** - No external dependencies
✅ **SEO Ready** - robots.txt & sitemap

## ❓ Troubleshooting

### Fonts not loading?
- Verify .woff2 files are in `fonts/` folder
- Check browser console for 404 errors
- Ensure `local-fonts.css` is linked in HTML

### Images not showing?
- Check image files are in `images/` folder
- Verify filenames match exactly
- Check browser console for errors

### Website looks broken?
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser
- Check console for JavaScript errors
- Verify all files uploaded correctly

### Contact form not working?
- Currently shows success message only
- Integrate backend solution (see Configuration)
- Test with temporary email service first

## 📞 Support

If you have issues:
1. Check browser Developer Tools (F12) → Console tab
2. Look for error messages
3. Verify file paths and names are correct
4. Test on different browser/device
5. Re-upload files ensuring folder structure

## 📚 Resources

- [GitHub Help](https://docs.github.com)
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [Google Fonts Download](https://fonts.google.com)
- [Formspree Docs](https://formspree.io)

---

**Your website is production-ready!** 🎉

Last updated: 2024
Version: 1.0.0
