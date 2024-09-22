# 👨🏻‍💻 @jakubwojcik/protected-supabase-vite-starter

This is my starter template for building web applications using Supabase with Vite. It provides a solid foundation with a modern tech stack and essential development tools of my choice.

⚠️ This project assumes you have a basic understanding of a Supabase SDK and how to set up a Supabase project.
I've included some basic authentication functionality, but you can easily expand it to suit your needs.

Additionally, there are some usage examples of the SDK:
- `BucketImage.tsx` component for displaying images from Supabase Storage
- `login/Index.tsx` view with a working login form
- `useSearch.tsx` hook for searching through Supabase tables
- `AuthGuard.tsx` component for checking if the user is authenticated
- `ProtectedRoute.tsx` component for protecting views for unauthorized users (using the `AuthGuard`)

I've also included one example SQL "migration" script in the `sql` directory. You can run it using the Supabase SQL editor. 
I like to keep my database schema in the repository, so I can easily recreate it if needed. Adding dates as the prefixes helps me keep track of the order of changes.

If you're new to Supabase, I recommend checking out their [documentation](https://supabase.io/docs).

## Features

- **React**: A JavaScript library for building user interfaces
- **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS (only essentials included, feel free to add more or remove existing ones)
- **Vite**: Next generation frontend tooling
- **Supabase**: An open source Firebase alternative (used for authentication here)
- **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS
- **Tailwind CSS**: A utility-first CSS framework
- **Tanstack Query**: Powerful asynchronous state management
- **Tanstack Router**: Type-safe routing for React
- **React Hook Form**: Performant, flexible and extensible forms
- **ESLint**: Find and fix problems in your JavaScript code
- **Prettier**: Opinionated code formatter
- **Stylelint**: A mighty, modern linter that helps you avoid errors and enforce conventions in your styles
- **Husky**: Git hooks made easy
- **Commitlint**: Lint commit messages
- **Lint Staged**: Run linters against staged git files
- **Jotai**: Primitive and flexible state management for React
- **Lucide**: Beautiful & consistent icons

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/jakubwojcik/protected-supabase-vite-starter.git
   cd protected-supabase-vite-starter
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your Supabase project and update the environment variables in `.env.local`:
   ```
   VITE_SUPABASE_URL=your-supabase-project-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Start the development server:
   ```
   npm run dev
   ```
   
   You should see the main page of the app with Register and Login buttons. 

5. Open your browser and visit `http://localhost:5173` to see your app running.

## Scripts

- `dev` - Start the development server
- `build` - Build the app for production
- `format:check` - Run Prettier to check code formatting
- `format:write` - Run Prettier to format code
- `lint` - Run ESLint and Stylelint
- `preview` - Preview the production build locally
- `prepare` - Prepare the after install (install husky hooks)
- `pre-push-checks` - Run formatting check, linting and build before pushing

## Commit Messages

This project uses Conventional Commits for clear and standardized commit messages utilizing husky and commitlint. 
Please follow the [Conventional Commits specification](https://www.conventionalcommits.org/) when making commits.

## Usage with AI

I've included a `repopack` configuration in the root of the project. You can use it to pack the repository into a single, AI-friendly file (`repopack-output.txt`).
You can use it to share the codebase with tools like ChatGPT, Claude or aider.

## License

This project is licensed under the [MIT License](LICENSE).