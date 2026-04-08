# mubashir-qureshii.github.io

Portfolio website for Mubashir Qureshi hosted on GitHub Pages with custom domain: **noobdeveloper.me**

## 🖼️ How to Add Images to Your Website

### Method 1: Upload via GitHub Web Interface (Easiest)

1. **Go to your GitHub repository**: https://github.com/mubashir-qureshii/mubashir-qureshii.github.io
2. **Navigate to the `images` folder** (click on the folder)
3. **Click "Add file" → "Upload files"**
4. **Drag and drop your images** or click to browse
5. **Commit the changes** with a message like "Add profile images"
6. **Wait a few minutes** for GitHub Pages to rebuild your site

### Method 2: Upload via Git Command Line

```bash
# Navigate to your repository
cd mubashir-qureshii.github.io

# Copy your images to the images folder
cp /path/to/your/image.jpg images/

# Add, commit, and push
git add images/
git commit -m "Add new images"
git push origin main
```

### Method 3: Use GitHub Desktop (Recommended for Beginners)

1. **Install GitHub Desktop** from https://desktop.github.com/
2. **Clone your repository**
3. **Copy image files** into the `images` folder in your local repository
4. **Commit the changes** in GitHub Desktop
5. **Push to origin**

## 📁 Required Images for Your Portfolio

Place these images in the `images` folder:

### Essential Images:
- **`profile.jpg`** - Your profile photo (recommended: 500x500px, square)
- **`favicon.ico`** or **`favicon.png`** - Browser tab icon (16x16px or 32x32px)

### Optional Images:
- **`coding.jpg`** - About section image (recommended: 800x600px)
- **`project1.jpg`** - First project thumbnail (recommended: 600x400px)
- **`project2.jpg`** - Second project thumbnail
- **`project3.jpg`** - Third project thumbnail
- **`github-icon.png`** - GitHub social icon (64x64px)
- **`linkedin-icon.png`** - LinkedIn social icon (64x64px)
- **`email-icon.png`** - Email social icon (64x64px)
- **`apple-touch-icon.png`** - iOS home screen icon (180x180px)

## 🎨 Image Best Practices

### File Formats:
- **Photos/Pictures**: Use `.jpg` or `.jpeg` (smaller file size)
- **Graphics/Icons**: Use `.png` (supports transparency)
- **Logos**: Use `.svg` (scalable) or `.png`
- **Favicons**: Use `.ico` or `.png`

### File Size:
- Keep images under 1MB each
- Compress images before uploading using:
  - TinyPNG: https://tinypng.com/
  - Squoosh: https://squoosh.app/
  - ImageOptim (Mac): https://imageoptim.com/

### Naming Convention:
- Use lowercase letters
- Use hyphens instead of spaces: `profile-picture.jpg` ✓ not `Profile Picture.jpg` ✗
- Be descriptive: `about-coding-desk.jpg` is better than `img1.jpg`

## 🏷️ HTML Image Tag Examples

### Basic Profile Image:
```html
<img src="images/profile.jpg" alt="Mubashir Qureshi Profile Picture" class="profile-img">
```

### Project Thumbnail:
```html
<img src="images/project1.jpg" alt="Project 1 thumbnail" class="project-img">
```

### Social Icon:
```html
<img src="images/github-icon.png" alt="GitHub" class="social-icon">
```

### Complete Image Tag Attributes:
```html
<img
    src="images/your-image.jpg"           <!-- Path to image -->
    alt="Description of image"            <!-- Alt text for accessibility -->
    class="your-css-class"                <!-- CSS class for styling -->
    width="300"                           <!-- Optional: width in pixels -->
    height="200"                          <!-- Optional: height in pixels -->
    loading="lazy"                        <!-- Optional: lazy loading -->
>
```

## 🎯 Favicon Setup

### Method 1: Simple Favicon (PNG)
Place `favicon.png` in the root directory, then add to `<head>`:
```html
<link rel="icon" type="image/png" href="favicon.png">
```

### Method 2: ICO Format (Classic)
Place `favicon.ico` in the root directory, then add to `<head>`:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### Method 3: Multiple Sizes (Professional)
```html
<link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
```

### Create Favicon from Image:
Use free online tools:
- Favicon.io: https://favicon.io/
- RealFaviconGenerator: https://realfavicongenerator.net/

## 🎨 Where to Find Free Images

### Profile Photos:
- Take your own photo with good lighting
- Use a professional headshot if available

### Stock Photos for Projects/Background:
- Unsplash: https://unsplash.com/ (free, no attribution required)
- Pexels: https://www.pexels.com/ (free, no attribution required)
- Pixabay: https://pixabay.com/ (free images)

### Icons (Social Media, etc.):
- Font Awesome: https://fontawesome.com/ (icons as code)
- Flaticon: https://www.flaticon.com/ (downloadable icons)
- Icons8: https://icons8.com/ (free icons)
- Simple Icons: https://simpleicons.org/ (brand icons)

## 📝 Current Website Structure

```
mubashir-qureshii.github.io/
├── index.html              # Main HTML file
├── CNAME                   # Custom domain configuration
├── README.md               # This file
├── favicon.ico             # Browser tab icon (add this)
├── css/
│   └── style.css          # Stylesheet
└── images/                 # Your images go here
    ├── profile.jpg         # Add your profile photo
    ├── coding.jpg          # Add about section image
    ├── project1.jpg        # Add project images
    ├── project2.jpg
    ├── project3.jpg
    ├── github-icon.png     # Add social icons
    ├── linkedin-icon.png
    └── email-icon.png
```

## 🚀 Quick Start Checklist

- [ ] Upload your profile photo as `images/profile.jpg`
- [ ] Create and upload a favicon as `favicon.ico` or `favicon.png`
- [ ] Add project screenshot images (project1.jpg, project2.jpg, etc.)
- [ ] Download and add social media icons
- [ ] Update the HTML with your actual information
- [ ] Test your website at https://noobdeveloper.me

## 🔗 Useful Links

- **Live Site**: https://noobdeveloper.me
- **Repository**: https://github.com/mubashir-qureshii/mubashir-qureshii.github.io
- **GitHub Pages Docs**: https://docs.github.com/en/pages

## 🛠️ Customization

### Change Profile Image:
Replace `images/profile.jpg` with your photo and keep the same filename, or update the src in `index.html`:
```html
<img src="images/your-photo-name.jpg" alt="Your Name" class="profile-img">
```

### Add More Projects:
Copy the project card HTML and add your own images:
```html
<div class="project-card">
    <img src="images/new-project.jpg" alt="New project thumbnail" class="project-img">
    <h3>New Project Title</h3>
    <p>Description of your project.</p>
    <a href="#" class="project-link">View Project →</a>
</div>
```

### Update Social Links:
Edit the href attributes in the contact section:
```html
<a href="https://github.com/your-username" target="_blank">
    <img src="images/github-icon.png" alt="GitHub" class="social-icon">
</a>
```

## 📞 Need Help?

If you encounter any issues:
1. Check that your images are in the correct folder
2. Verify image file names match exactly (case-sensitive)
3. Wait a few minutes after pushing changes for GitHub Pages to update
4. Check browser console for any errors (F12 → Console tab)

---

Built with ❤️ using GitHub Pages
