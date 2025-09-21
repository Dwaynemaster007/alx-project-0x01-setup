# 🌟 ALX Project 0x01: Next.js Social Media Dashboard 🚀

Welcome to the **ALX Project 0x01**, a vibrant and modern **Next.js** application designed to showcase a dynamic social media dashboard! Built with **TypeScript**, **Tailwind CSS**, and **React**, this project fetches and displays posts and user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), complete with interactive modals for adding new content. Get ready to dive into a sleek, responsive, and feature-rich web app! 🎉

## ✨ Features

- **🏠 Home Page**: A stunning landing page with a bold gradient background and a welcoming message: *" Welcome to our Application!"*.
- **📝 Posts Page**: Displays a grid of posts fetched from JSONPlaceholder, with a modal to add new posts (stored in state).
- **👤 Users Page**: Shows user profiles in a card layout, with a modal to add new users (stored in state).
- **🎨 Styling**: Powered by **Tailwind CSS** for a modern, responsive UI with hover effects and smooth transitions.
- **🛠️ TypeScript**: Strongly typed interfaces (`PostProps`, `UserProps`, etc.) for robust code.
- **⚡ Static Site Generation**: Uses Next.js `getStaticProps` for fast, SEO-friendly pages.

## 🚀 Getting Started

Follow these steps to run this awesome project locally:

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/alx-project-0x01-setup.git
   cd alx-project-0x01-setup/alx-project-0x01
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Development Server**:
   ```bash
   NEXT_TURBOPACK=0 NEXT_TELEMETRY_DISABLE=1 npx next dev -p 3000
   ```
4. **Open in Browser**:
   Visit [http://localhost:3000](http://localhost:3000) to explore the app! 🌐

### Usage
- **Home Page**: Navigate to `/` for a vibrant welcome screen.
- **Posts Page**: Go to `/posts` to view posts and click *Add Post* to open the modal.
- **Users Page**: Visit `/users` to see user profiles and click *Add User* to add a new user.

## 📂 Project Structure

| Path | Description |
|------|-------------|
| `components/common/` | Reusable components: `PostCard.tsx`, `UserCard.tsx`, `PostModal.tsx`, `UserModal.tsx` |
| `components/layout/` | Layout components: `Header.tsx` |
| `interfaces/` | TypeScript interfaces: `index.ts` (defines `PostProps`, `UserProps`, etc.) |
| `pages/` | Next.js pages: `index.tsx` (Home), `posts/index.tsx`, `users/index.tsx` |
| `styles/` | Global styles: `globals.css` (Tailwind CSS) |
| `tailwind.config.ts` | Tailwind configuration |
| `postcss.config.mjs` | PostCSS configuration |
| `tsconfig.json` | TypeScript configuration with `@/` aliases |

## 🛠️ Technologies Used

- **Next.js**: React framework for static site generation and routing.
- **TypeScript**: For type-safe components and interfaces.
- **Tailwind CSS**: Utility-first CSS for responsive design.
- **JSONPlaceholder**: Mock API for posts and users.
- **React**: For building interactive UI components.

## 🤝 Contributing

We love contributions! 🌈 To get started:
1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Commit your changes (`git commit -m 'Add awesome feature'`).
4. Push to the branch (`git push origin feature/awesome-feature`).
5. Open a Pull Request.

## 📬 Contact

Got questions? Reach out via [GitHub Issues](https://github.com/your-username/alx-project-0x01-setup/issues) or tweet us on [X](https://x.com)! 🚀

## 🎉 Happy Coding!

Dive into this project, explore its features, and make it your own! Let’s build something extraordinary together! 💻✨