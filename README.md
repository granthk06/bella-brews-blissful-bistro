# Bella Brew's Blissful Bistro

A premium coffee shop and bistro website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Beautiful, mobile-first design that works on all devices
- **Interactive Menu**: Browse our coffee, pastries, and sandwiches with an integrated shopping cart
- **Online Reservations**: Easy table booking system for dine-in experiences
- **Customer Reviews**: Showcase of customer testimonials and ratings
- **Modern UI**: Clean, professional interface with smooth animations

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives with shadcn/ui
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bella-brews-blissful-bistro
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, etc.)
│   ├── About.tsx       # About section component
│   ├── Cart.tsx        # Shopping cart component
│   ├── CartContext.tsx # Cart state management
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section component
│   ├── Menu.tsx        # Menu display component
│   ├── Reservation.tsx # Reservation form component
│   └── Reviews.tsx     # Customer reviews component
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── index.css          # Global styles and Tailwind imports
```

## Customization

### Colors and Theming

The project uses a custom color palette defined in `src/index.css`. You can modify the CSS custom properties to change the theme:

```css
:root {
  --primary: /* Your primary color */;
  --secondary: /* Your secondary color */;
  /* ... other color variables */
}
```

### Menu Items

Menu items are defined in `src/components/Menu.tsx`. Update the `menuData` object to add, remove, or modify menu items.

### Contact Information

Update contact details in `src/components/Footer.tsx` and `src/components/Reservation.tsx`.

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Host directly from your GitHub repository
- **Any static hosting service**: Upload the `dist` folder contents

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact us at hello@bellabrews.com