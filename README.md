
# Daivam Flowers - 24/7 Pooja & Temple Flowers

## Overview

Daivam Flowers is a modern e-commerce web application for ordering pooja, temple, and devotional flowers in Bengaluru. Open 24/7, we deliver fresh flowers, garlands, maale, hara, and pooja items directly from K R Market to your home. Built with cutting-edge technologies focused on performance, user experience, and beautiful UI.

## Project Setup

To run this project locally, follow the steps below:

### Prerequisites

Ensure you have **Node.js** and **npm** installed. Using `nvm` is recommended for version management.

### Steps

1. **Clone the repository**

   ```bash
   git clone <YOUR_GIT_URL>
   ```

2. **Navigate to the project directory**

   ```bash
   cd <YOUR_PROJECT_NAME>
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   This starts the dev server with hot reloading and instant preview.

## Technologies Used

This project is built with:

* **Vite** – Lightning-fast build tool
* **React** – Component-based UI library
* **TypeScript** – Strongly typed JavaScript
* **Tailwind CSS** – Utility-first CSS framework
* **shadcn/ui** – Accessible and beautifully designed UI components

## Deployment

This project is configured for GitHub Pages deployment using the `gh-pages` branch.

### Deploy to GitHub Pages

1. **Build and deploy in one command:**

   ```bash
   npm run deploy
   ```

   This command will:
   - Build the project to the `dist/` folder
   - Deploy the `dist/` folder to the `gh-pages` branch
   - GitHub Pages will automatically serve your site

2. **Configure GitHub Pages Settings (First time only):**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select the **gh-pages** branch and **/ (root)** folder
   - Click **Save**

Your site will be live at: `https://<your-username>.github.io/<repository-name>/`

### Alternative Deployment Options

You can also deploy this project using other platforms:

* **Vercel**
* **Netlify**
* **Render**

For these platforms, just build the project using:

```bash
npm run build
```

Then deploy the contents of the `dist/` directory.

## Custom Domain

If hosting on a platform like Vercel or Netlify, you can connect a custom domain through their respective dashboards.

## Contributors

* **Sidram Hipparagi** – [@sidramhipparagi](https://github.com/sidramhipparagi)

## License

This project is open-source and available under the MIT License.

---

Let me know if you’d like a badge section, installation GIF, or custom branding added!
