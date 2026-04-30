# Add Your Resume/CV Download

The "Download CV" button on the home page needs a PDF file to download.

## Steps:

1. **Add your CV/Resume PDF** to the public folder:
   - Place your CV file at: `public/resume.pdf`
   - Or use any name like: `public/Mahnoor-Khalid-CV.pdf`

2. **Update the download button** in `app/page.tsx`:

Find this code (around line 64):
```tsx
<button className="px-8 py-3 border-2 border-primary-500 rounded-full font-semibold hover:bg-primary-500/10 transition-all duration-300 flex items-center gap-2">
  <Download size={20} />
  Download CV
</button>
```

Replace it with:
```tsx
<a
  href="/resume.pdf"
  download="Mahnoor-Khalid-Resume.pdf"
  className="px-8 py-3 border-2 border-primary-500 rounded-full font-semibold hover:bg-primary-500/10 transition-all duration-300 flex items-center gap-2"
>
  <Download size={20} />
  Download CV
</a>
```

## Alternative: Link to External CV

If you host your CV elsewhere (Google Drive, Dropbox, etc.):

```tsx
<a
  href="https://your-cv-link.com"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 border-2 border-primary-500 rounded-full font-semibold hover:bg-primary-500/10 transition-all duration-300 flex items-center gap-2"
>
  <Download size={20} />
  Download CV
</a>
```

## If You Don't Have a CV Yet

You can temporarily hide the button by removing it, or keep it as is (it won't do anything when clicked).
