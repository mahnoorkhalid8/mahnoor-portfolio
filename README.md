# Personal Portfolio

A beautiful and modern portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring smooth animations and a responsive design.

## Features

- 🎨 Beautiful gradient color scheme with purple and blue tones
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🚀 Built with Next.js 14 and TypeScript
- 💅 Styled with Tailwind CSS
- 📧 Gmail integration for contact form
- 🎯 Multiple pages: Home, About, Projects, Skills, Contact

## Pages

- **Home**: Hero section with introduction and profile picture placeholder
- **About**: Experience, education, and achievements
- **Projects**: Showcase of your work with project cards
- **Skills**: Technical skills with progress bars
- **Contact**: Contact information with Gmail integration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. **Home Page** (`app/page.tsx`):
   - Replace "Your Name" with your actual name
   - Add your profile picture (replace the emoji placeholder)
   - Update the description text

2. **About Page** (`app/about/page.tsx`):
   - Update experience, education, and achievements arrays
   - Modify the bio text

3. **Projects Page** (`app/projects/page.tsx`):
   - Replace dummy projects with your actual projects
   - Update images, descriptions, tags, and links

4. **Skills Page** (`app/skills/page.tsx`):
   - Modify skill categories and levels
   - Add or remove skills as needed

5. **Contact Page** (`app/contact/page.tsx`):
   - Replace `your.email@gmail.com` with your actual Gmail address
   - Update phone number and location

6. **Footer** (`components/Footer.tsx`):
   - Update social media links (GitHub, LinkedIn, Twitter)
   - Replace with your actual profile URLs

### Add Your Profile Picture

Replace the emoji placeholder in `app/page.tsx` with an actual image:

```tsx
<img 
  src="/your-photo.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

Place your image in the `public` folder.

### Color Customization

Edit `tailwind.config.ts` to change the color scheme:
- `primary`: Main blue colors
- `accent`: Purple/pink accent colors

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This portfolio can be easily deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any hosting service that supports Node.js

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

## Technologies Used

- **Next.js 14**: React framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## License

Feel free to use this template for your own portfolio!

## Support

If you have any questions or need help customizing, feel free to reach out!
