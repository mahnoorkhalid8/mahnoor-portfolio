# Image Setup Guide

## Quick Start

Your portfolio is configured to use images from the `public` folder. Here's where to place your images:

### 1. Profile Picture (Home Page)
**Location:** `public/images/profile.jpg`
- **Recommended size:** 800x800px (square)
- **Format:** JPG or PNG
- **What it shows:** Your professional headshot or portrait

### 2. Project Screenshots
**Location:** `public/projects/`

Place 6 project images with these exact names:
- `project1.jpg` - E-Commerce Platform
- `project2.jpg` - Task Management App
- `project3.jpg` - Social Media Dashboard
- `project4.jpg` - AI Content Generator
- `project5.jpg` - Weather Forecast App
- `project6.jpg` - Portfolio Builder

**Recommended size:** 1200x800px (3:2 ratio)
**Format:** JPG or PNG

## How to Add Your Images

### Option 1: Using File Explorer (Windows)
1. Navigate to: `C:\Users\SEVEN86 COMPUTES\OneDrive\Desktop\portfolio\public`
2. Open the `images` folder
3. Copy your profile picture here and rename it to `profile.jpg`
4. Go back and open the `projects` folder
5. Copy your 6 project screenshots and rename them to `project1.jpg` through `project6.jpg`

### Option 2: Using Command Line
```bash
# Navigate to the portfolio directory
cd "C:\Users\SEVEN86 COMPUTES\OneDrive\Desktop\portfolio"

# Copy your profile image (replace SOURCE_PATH with your image location)
copy "SOURCE_PATH\your-photo.jpg" "public\images\profile.jpg"

# Copy project images
copy "SOURCE_PATH\project-screenshot-1.jpg" "public\projects\project1.jpg"
copy "SOURCE_PATH\project-screenshot-2.jpg" "public\projects\project2.jpg"
# ... and so on
```

## Image Optimization Tips

### For Best Performance:
1. **Compress images** before adding them (use tools like TinyPNG, Squoosh, or ImageOptim)
2. **Target file sizes:**
   - Profile picture: Under 200KB
   - Project screenshots: Under 500KB each
3. **Use JPG** for photos, PNG for graphics with transparency

### Image Requirements:
- **Profile Picture:** Should be well-lit, professional, with a clean background
- **Project Screenshots:** Show the main interface or key features of each project

## Fallback Behavior

If an image is missing, the portfolio will:
- **Profile picture:** Show a placeholder avatar icon (👤)
- **Project images:** Show colored placeholder images with project names

This means your portfolio will work even without images, but adding real images makes it much more professional!

## Updating Project Information

After adding images, you'll want to update the project details in:
`app/projects/page.tsx`

Edit the `projects` array to include:
- Your actual project titles
- Real descriptions
- Correct technology tags
- Your GitHub repository links
- Live demo URLs

## Next Steps After Adding Images

1. Add your images to the folders
2. Update project information in `app/projects/page.tsx`
3. Update your bio in `app/about/page.tsx`
4. Run `npm run dev` to see your portfolio
5. Check that all images load correctly
6. Make any final adjustments

## Troubleshooting

**Image not showing?**
- Check the filename matches exactly (case-sensitive)
- Verify the image is in the correct folder
- Make sure the file extension is correct (.jpg, .png)
- Try refreshing the browser with Ctrl+F5

**Image looks stretched or cropped?**
- Resize your image to the recommended dimensions
- Use the `object-cover` CSS class (already applied)

## Need Different Image Names?

If you want to use different filenames, update these files:
- `app/page.tsx` - Line 95 (profile picture)
- `app/projects/page.tsx` - Lines 9-54 (project images)
