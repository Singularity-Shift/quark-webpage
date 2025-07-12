# Quark AI Website

A professional, mobile-first, responsive one-page website showcasing the Quark AI Telegram bot - the first fully on-chain, pay-as-you-go AI platform.

## Features

### Design
- **Mobile-First Responsive Design**: Optimized for all screen sizes (320px+)
- **Modern Dark Theme**: Professional crypto/AI aesthetic with blue accents
- **Smooth Animations**: Hover effects, scroll animations, and interactive elements
- **Professional Typography**: Inter font family for clean, modern look

### Content Sections
1. **Hero Section**: Pay-per-message AI messaging with emojicoin branding
2. **Problem Section**: Three key problems solved with target audience
3. **How It Works**: Step-by-step process flow with token transfer features
4. **Key Features**: Six feature cards highlighting main benefits
5. **Call-to-Action**: Prominent CTA for user engagement
6. **Footer**: Brand information and navigation links

### Technical Features
- **Semantic HTML5**: Clean, accessible structure
- **CSS Grid & Flexbox**: Modern layout techniques
- **Vanilla JavaScript**: No dependencies, fast loading
- **Cross-Browser Compatible**: Works on all modern browsers
- **SEO Optimized**: Proper meta tags and semantic structure

## Navigation Links

The website supports separate links for:
- **Telegram Bot**: Direct link to start using Quark AI (main CTA buttons)
- **Telegram Group**: Community/group link (navigation icons)
- **Discord Server**: Discord community link
- **GitBook Documentation**: Documentation link
- **Additional Websites**: Two additional webpage links

## Updating Links

To update the navigation links after deployment, use the browser console:

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

## File Structure

```
quark-ai-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── assets/
│   └── icons/          # Navigation icons
│       ├── telegram.png
│       ├── discord.png
│       └── gitbook.png
├── design-concept.md   # Design documentation
├── todo.md            # Development progress
└── README.md          # This file
```

## Key Messaging

- **Primary**: Pay-per-use AI with emojicoin (📒)
- **Secondary**: No subscriptions, transparent pricing
- **Tertiary**: Seamless Telegram integration with token transfers
- **Supporting**: Built on Aptos blockchain for transparency

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance

- Fast loading with optimized images
- Minimal JavaScript dependencies
- Efficient CSS with mobile-first approach
- Smooth animations with hardware acceleration

## Deployment

The website is ready for deployment to any static hosting service. All assets are self-contained and no server-side processing is required.

