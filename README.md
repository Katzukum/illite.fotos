# Illite Fotos

A simple photography portfolio built with **React** and **Vite**.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages (requires gh-pages)
# Ensure `homepage` in package.json points to your repo URL
npm run deploy
```

## Project Structure
- **public/** – Static assets (images, index.html)
- **src/** – React source code
  - `components/` – Reusable components (Gallery, ContactForm)
  - `App.jsx` – Root component
  - `main.jsx` – Entry point
  - `styles.css` – Global styles

## Adding Images
Drop your photos into `public/images/` and add their paths to the `Gallery` component.

## Contact Form
The form posts to Formspree. Replace `your-form-id` in `ContactForm.jsx` with your Formspree form ID.
