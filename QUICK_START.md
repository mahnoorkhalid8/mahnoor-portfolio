# Portfolio Setup - Quick Start Guide

## ✅ What's Already Done

Your portfolio is fully built with:
- ✨ Beautiful gradient design (blue & purple theme)
- 📱 Responsive layout (works on all devices)
- 🎬 Smooth animations
- 📧 Gmail integration for contact form
- 🔗 Your social links (GitHub, LinkedIn, Twitter)
- 📄 5 pages: Home, About, Projects, Skills, Contact

## 🚀 Getting Started

### Step 1: Install Dependencies
Open your terminal and run:
```bash
cd "C:\Users\SEVEN86 COMPUTES\OneDrive\Desktop\portfolio"
npm install
```

### Step 2: Add Your Images
See `IMAGE_SETUP_GUIDE.md` for detailed instructions.

**Quick version:**
1. Add your profile photo to: `public/images/profile.jpg`
2. Add 6 project screenshots to: `public/projects/project1.jpg` through `project6.jpg`

### Step 3: Run the Development Server
```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## 📝 Customization Checklist

### Essential Updates:
- [ ] Add profile picture (`public/images/profile.jpg`)
- [ ] Add project screenshots (`public/projects/project1-6.jpg`)
- [ ] Update project details in `app/projects/page.tsx`
- [ ] Update work experience in `app/about/page.tsx`
- [ ] Update phone number in `app/contact/page.tsx` (currently placeholder)
- [ ] Update location in `app/contact/page.tsx` (currently "City, Country")

### Already Updated:
- ✅ Your name: Mahnoor Khalid
- ✅ Email: mahnoorkhalid814@gmail.com
- ✅ GitHub: github.com/mahnoorkhalid8
- ✅ LinkedIn: linkedin.com/in/mahnoor-khalid-547329244
- ✅ Twitter: x.com/mahnoor8mk
- ✅ Skills section customized

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── projects/page.tsx     # Projects page
│   ├── skills/page.tsx       # Skills page
│   ├── contact/page.tsx      # Contact page
│   ├── layout.tsx            # Main layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   └── Footer.tsx            # Footer
├── public/
│   ├── images/               # Your profile picture goes here
│   └── projects/             # Your project screenshots go here
└── package.json              # Dependencies

```

## 🎨 Customizing Content

### Update Projects (`app/projects/page.tsx`)
Edit the `projects` array (lines 7-56) to add your real projects:
```typescript
{
  title: "Your Project Name",
  description: "Project description",
  image: "/projects/project1.jpg",
  tags: ["Tech1", "Tech2"],
  github: "https://github.com/mahnoorkhalid8/your-repo",
  demo: "https://your-demo-url.com",
}
```

### Update About Page (`app/about/page.tsx`)
- Lines 7-23: Update work experience
- Lines 25-34: Update education
- Lines 36-41: Update achievements
- Lines 68-77: Update your bio

### Update Skills (`app/skills/page.tsx`)
Already customized with your tech stack! Adjust skill levels if needed.

### Update Contact Info (`app/contact/page.tsx`)
- Line 78: Update phone number
- Line 93: Update location

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Your portfolio will be live in minutes!

### Other Options:
- **Netlify:** Similar to Vercel
- **GitHub Pages:** Free hosting
- **Your own server:** Run `npm run build` then `npm start`

## 🛠️ Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Check for code issues
```

## 📧 Gmail Integration

The contact page has a button that opens Gmail compose window with your email pre-filled. Users can click it to send you an email directly.

## 🎯 Next Steps

1. **Add images** (see IMAGE_SETUP_GUIDE.md)
2. **Update project information** with your real projects
3. **Test everything** - click all links, check all pages
4. **Deploy** to Vercel or your preferred platform
5. **Share** your portfolio URL!

## 💡 Tips

- Keep project descriptions concise (2-3 sentences)
- Use high-quality images (but compress them first)
- Update your CV/resume file for the "Download CV" button
- Test on mobile devices to ensure responsiveness
- Add Google Analytics if you want to track visitors

## 🆘 Need Help?

- Check the README.md for more details
- See IMAGE_SETUP_GUIDE.md for image setup
- All your personal info is already configured!

## 🎉 You're All Set!

Your portfolio is ready to go. Just add your images, update the project details, and deploy!
