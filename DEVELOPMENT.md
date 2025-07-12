# Quark AI Website - Development Guide

## Quick Start

This is a static website that can be run locally without any build process or dependencies. Simply open `index.html` in your browser.

## Local Development Setup

### Method 1: Direct File Opening
1. Navigate to the project folder
2. Double-click `index.html` to open in your default browser
3. The website will load immediately

### Method 2: Local HTTP Server (Recommended)
For better development experience and to avoid CORS issues:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js (if installed):
```bash
# Install a simple server globally
npm install -g http-server

# Run the server
http-server -p 8000
```

#### Using PHP (if installed):
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## File Structure

```
quark-ai-website/
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── script.js               # JavaScript functionality
├── assets/
│   └── icons/              # Navigation icons
│       ├── telegram.png    # Telegram icon
│       ├── discord.png     # Discord icon
│       └── gitbook.png     # GitBook icon
├── README.md               # Project overview
├── DEVELOPMENT.md          # This development guide
├── DEPLOYMENT.md           # Deployment instructions
├── design-concept.md       # Design documentation
└── todo.md                # Development progress
```

## Development Workflow

### Making Changes

1. **HTML Changes**: Edit `index.html` directly
2. **Styling Changes**: Edit `styles.css`
3. **JavaScript Changes**: Edit `script.js`
4. **Assets**: Add new images to `assets/` folder

### Testing Changes

1. Save your files
2. Refresh your browser (F5 or Ctrl+R)
3. Changes will be visible immediately

### Browser Developer Tools

Use browser developer tools for debugging:
- **Chrome**: F12 or Right-click → Inspect
- **Firefox**: F12 or Right-click → Inspect Element
- **Safari**: Cmd+Option+I (enable Developer menu first)

## Configuring Navigation Links

The website includes a JavaScript function to update navigation links:

### In Browser Console:
```javascript
updateNavigationLinks({
    telegramBot: "https://t.me/your_bot_link",
    telegramGroup: "https://t.me/your_group_link", 
    discord: "https://discord.gg/your_server",
    gitbook: "https://your-docs.gitbook.io/",
    website1: "https://your-first-website.com",
    website2: "https://your-second-website.com"
});
```

### Permanent Configuration:
Edit the `links` object in `script.js` (around line 56):

```javascript
const links = {
    telegramBot: 'https://t.me/your_bot_link',
    telegramGroup: 'https://t.me/your_group_link',
    discord: 'https://discord.gg/your_server',
    gitbook: 'https://your-docs.gitbook.io/',
    website1: 'https://your-first-website.com',
    website2: 'https://your-second-website.com'
};
```

## Customization Guide

### Colors
Main colors are defined in CSS variables at the top of `styles.css`:
- Primary Background: `#0B1426`
- Primary Blue: `#2563EB`
- Accent Cyan: `#06B6D4`
- Text White: `#FFFFFF`
- Text Gray: `#94A3B8`

### Typography
The website uses Inter font from Google Fonts. To change:
1. Update the Google Fonts link in `index.html`
2. Update the font-family in `styles.css`

### Content
All content can be edited directly in `index.html`:
- Hero section text
- Problem descriptions
- Feature descriptions
- Call-to-action text

### Images
- Icons are stored in `assets/icons/`
- Supported formats: PNG, JPG, SVG
- Recommended icon size: 512x512px for best quality

## Responsive Design

The website uses a mobile-first approach:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1200px and up

Test responsiveness using browser developer tools device simulation.

## Performance Optimization

The website is already optimized for performance:
- Minimal CSS and JavaScript
- Optimized images
- No external dependencies (except Google Fonts)
- Efficient animations using CSS transforms

## Browser Compatibility

Tested and working on:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Troubleshooting

### Common Issues:

1. **Fonts not loading**: Check internet connection for Google Fonts
2. **Icons not displaying**: Verify icon files are in `assets/icons/`
3. **Animations not working**: Check if JavaScript is enabled
4. **Layout issues**: Clear browser cache and refresh

### Debug Mode:
Open browser console to see debug messages and any errors.

## Next Steps

1. Configure your navigation links
2. Test on different devices/browsers
3. Deploy to your hosting service (see DEPLOYMENT.md)
4. Set up analytics if needed

## Support

For technical issues:
1. Check browser console for errors
2. Verify all files are present
3. Test in different browsers
4. Check network connectivity for external resources

