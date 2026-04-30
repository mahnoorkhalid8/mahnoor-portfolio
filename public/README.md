# Images Folder

Place your images in this folder structure:

## Folder Structure

```
public/
├── images/
│   ├── profile.jpg          # Your profile picture for home page
│   ├── profile-about.jpg    # Optional: Different photo for about page
│   └── avatar.png           # Optional: Avatar/logo
├── projects/
│   ├── project1.jpg         # Project screenshots
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── project5.jpg
│   └── project6.jpg
└── README.md (this file)
```

## How to Use Images

### In Your Code

Reference images from the public folder like this:

```tsx
// For profile picture
<img src="/images/profile.jpg" alt="Your Name" />

// For project images
<img src="/projects/project1.jpg" alt="Project Name" />
```

### Image Recommendations

**Profile Picture:**
- Size: 500x500px or larger (square)
- Format: JPG or PNG
- File size: Under 500KB

**Project Screenshots:**
- Size: 1200x800px (3:2 ratio)
- Format: JPG or PNG
- File size: Under 1MB each

## Current Usage

The following files need images:

1. **Home Page** (`app/page.tsx`): 
   - `/images/profile.jpg` - Your main profile picture

2. **Projects Page** (`app/projects/page.tsx`):
   - `/projects/project1.jpg` through `/projects/project6.jpg`

3. **About Page** (optional):
   - Can use `/images/profile-about.jpg` if you want a different photo

## Next Steps

1. Add your images to the appropriate folders
2. Make sure filenames match what's in the code
3. Or update the code to match your filenames
