# Developer Portfolio

## Overview
This is a modern, responsive, and highly customizable developer portfolio template built with **React.js**. It is designed to showcase skills, experience, projects, and open-source contributions in a professional and visually appealing manner.

The project is customized from the [DeveloperFolio](https://github.com/saadpasta/developerFolio) template, offering dynamic content loading, social media integration, and a sleek UI.

## Key Features
*   **Dynamic Content**: Easily customizable via `src/portfolio.js`.
*   **Responsive Design**: optimized for Mobile, Tablet, and Desktop.
*   **Lottie Animations**: Engaging visual elements.
*   **GitHub Integration**: Fetch and display pinned repositories and activity.
*   **Blog Support**: Integration with Medium feeds.
*   **PWA Support**: Progressive Web App capabilities.

## Tech Stack
*   **Frontend**: React.js (v16+)
*   **Styling**: SCSS, Bootstrap
*   **Animations**: Lottie, React-Reveal
*   **API Interactions**: GraphQL (GitHub API), Apollo Client

## Project Structure
```
React-Portfolio/
├── public/             # Static assets (images, manifest)
├── src/
│   ├── assets/         # Lottie files, images
│   ├── components/     # Reusable UI components (header, footer, cards)
│   ├── containers/     # Main page sections (Greeting, Skills, Projects)
│   ├── portfolio.js    # Configuration file for all personal data
│   ├── globalColor.scss# Theme customization
│   └── index.js        # Entry point
├── fetch.js            # Script to fetch dynamic data
└── package.json
```

## Getting Started

### Prerequisites
*   Node.js (v14 or higher recommended)
*   npm or yarn

### Installation
1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd React-Portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm start
    ```
    The app will run at `http://localhost:3000`.

## Customization
To personalize this portfolio, edit the `src/portfolio.js` file. This file contains all the text, links, and configurations for:
*   **Greetings & Social Media**: Update your name, title, and social links.
*   **Skills**: Add or remove tech stack icons.
*   **Education & Experience**: Update your timeline.
*   **Projects**: List your major projects.
*   **Contact Info**: Update email and phone details.

### Theme & Colors
You can change the primary color scheme by modifying `src/_globalColor.scss`.

### GitHub Token (Optional)
To display your GitHub profile and pinned repositories dynamically:
1.  Create a `.env` file in the root directory.
2.  Add your GitHub Personal Access Token:
    ```env
    REACT_APP_GITHUB_TOKEN="your_token_here"
    GITHUB_USERNAME="your_username"
    ```

## Deployment
This project is ready for deployment on platforms like Vercel, Netlify, or GitHub Pages.

To build for production:
```bash
npm run build
```
This creates a `build` directory with optimized static assets.

## Acknowledgements
*   Original template by [Saad Pasta](https://github.com/saadpasta).
*   Illustrations by [Undraw](https://undraw.co/).
