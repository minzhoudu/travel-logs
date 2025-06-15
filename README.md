# 🌍 Nuxt Travel Log

A modern travel logging application built with Nuxt 3, allowing users to document and share their travel experiences with beautiful, responsive design.

## ✨ Features

- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🔐 **Authentication** - Secure user authentication with Better Auth
- 🗄️ **Database Integration** - Powered by Drizzle ORM with LibSQL/Turso
- 🎨 **Modern UI** - Beautiful interface with Tailwind CSS and DaisyUI
- 🌙 **Dark Mode** - Built-in dark/light mode toggle
- 📍 **Travel Logging** - Document your travels with photos, notes, and locations
- ⚡ **Fast Performance** - Built on Nuxt 3 for optimal performance
- 🔍 **SEO Optimized** - Server-side rendering for better search engine visibility

## 🛠️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **Frontend**: [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Database**: [LibSQL](https://turso.tech/) with [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Better Auth](https://www.better-auth.com/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Icons**: [Nuxt Icon](https://github.com/nuxt-modules/icon)
- **Code Quality**: [ESLint](https://eslint.org/) + [Husky](https://typicode.github.io/husky/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** or **yarn** or **pnpm**
- **Git**

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/minzhoudu/travel-logs.git
   cd nuxt-travel-log
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file with your configuration values.

4. **Set up the database**
   ```bash
   npm run dev:db
   ```

### Development

Start the development server with database:

```bash
npm run dev
```

This will concurrently run:

- Turso local database server
- Nuxt development server at `http://localhost:3000`

## 📜 Available Scripts

| Script             | Description                            |
| ------------------ | -------------------------------------- |
| `npm run dev`      | Start development server with database |
| `npm run dev:db`   | Start only the database server         |
| `npm run build`    | Build the application for production   |
| `npm run generate` | Generate static site                   |
| `npm run preview`  | Preview the production build           |
| `npm run lint`     | Run ESLint                             |
| `npm run lint:fix` | Fix ESLint errors automatically        |

## 📁 Project Structure

```
nuxt-travel-log/
├── components/          # Vue components
├── layouts/            # Application layouts
├── pages/              # Application pages (auto-routed)
├── plugins/            # Nuxt plugins
├── server/             # Server-side code
├── stores/             # Pinia stores
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── public/             # Static assets
├── assets/             # Build assets
├── nuxt.config.ts      # Nuxt configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── drizzle.config.ts   # Database configuration
└── package.json        # Project dependencies
```

## 🔧 Configuration

### Database

The application uses LibSQL with Turso for the database. Configuration can be found in:

- `drizzle.config.ts` - Drizzle ORM configuration
- Database migrations in the `migrations/` folder

### Styling

- **Tailwind CSS**: Configure in `tailwind.config.js`
- **DaisyUI**: Provides pre-built components and themes
- **Color Mode**: Dark/light mode toggle included

### Authentication

Authentication is handled by Better Auth. Configure your auth providers and settings in the appropriate configuration files.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Quality

This project uses:

- **ESLint** with Antfu's configuration for code linting
- **Husky** for git hooks
- **lint-staged** for pre-commit linting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the [documentation](https://nuxt.com/docs)
2. Search existing [issues](../../issues)
3. Create a new issue if needed

## 🙏 Acknowledgments

- [Nuxt.js](https://nuxt.com/) team for the amazing framework
- [Vue.js](https://vuejs.org/) community
- All the open-source contributors who made this project possible

---

Made with ❤️ and ☕
