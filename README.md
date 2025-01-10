
<h1>Next.js Auth Credentials Made Easier with Better Auth</h1>

A simple authentication setup built with Next.js and Better Auth for managing sign-up and sign-in processes. The application features a skeleton dashboard for logged-in users. This project utilizes modern tools and libraries to ensure a seamless developer and user experience.

🚀 Features

Authentication: Secure and efficient user authentication using Better Auth.
UI Components: Styled with Tailwind CSS and enhanced with ShadCN for accessible and reusable components.
Icons: Modern and elegant icons provided by Lucide React.
Data Management: Arcjet for efficient and flexible data storage.
Dashboard: Skeleton dashboard for logged-in users as a starting point.


Here’s a detailed README for your Next.js application:

Next.js Auth Credentials Made Easier with Better Auth
A simple authentication setup built with Next.js and Better Auth for managing sign-up and sign-in processes. The application features a skeleton dashboard for logged-in users. This project utilizes modern tools and libraries to ensure a seamless developer and user experience.

🚀 Features
Authentication: Secure and efficient user authentication using Better Auth.
UI Components: Styled with Tailwind CSS and enhanced with ShadCN for accessible and reusable components.
Icons: Modern and elegant icons provided by Lucide React.
Data Management: Arcjet for efficient and flexible data storage.
Dashboard: Skeleton dashboard for logged-in users as a starting point.

🛠️ Technologies Used

<li>
<ul>Next.js: React framework for server-side rendering and static site generation.</ul>
<ul>Better Auth: Simplified and robust authentication management.</ul>
<ul>ShadCN: Styled component library for building beautiful and consistent UIs.</ul>
<ul>Lucide React: Icon library for modern and customizable React icons.</ul>
<ul>Arcjet: A flexible backend tool for managing data and services.</ul>
</li>

📂 Project Structure

nextjs-auth-credentials
├── components/        # Reusable React components
├── pages/             # Next.js pages
│   ├── api/           # API routes
│   │   └── auth/      # Better Auth endpoints
│   ├── index.js       # Landing page
│   ├── dashboard.js   # Skeleton dashboard
│   └── auth/          # Sign-up and sign-in pages
├── public/            # Static assets
├── styles/            # Tailwind CSS configurations
├── utils/             # Helper functions and utilities
├── .env.local         # Environment variables for Better Auth and Arcjet
├── next.config.js     # Next.js configuration
└── tailwind.config.js # Tailwind CSS configuration


🖥️ Getting Started

Prerequisites

Ensure you have the following installed:

Node.js (v16 or later)

npm or yarn
Installation

1.Clone the repository:

git clone https://github.com/your-username/nextjs-auth-credentials.git
cd nextjs-auth-credentials

2.Install dependencies:

npm install
# or
yarn install

3.Set up your environment variables: Create a .env.local file in the root directory and add the following:

NEXT_PUBLIC_BETTER_AUTH_API_KEY=your_better_auth_api_key
NEXT_PUBLIC_ARCJET_BASE_URL=your_arcjet_base_url
NEXT_PUBLIC_ARCJET_API_KEY=your_arcjet_api_key

4.Run the development server:

npm run dev
# or
yarn dev

5.Open http://localhost:3000 in your browser.

🖼️ Pages Overview

Landing Page (/)

A simple introduction to the application with links to the sign-up and sign-in pages.

Sign Up (/auth/signup)

A form for creating a new account using Better Auth.

Sign In (/auth/signin)

A form for existing users to log in securely.

Dashboard (/dashboard)

A protected route accessible only to authenticated users. Currently, this is a skeleton dashboard to serve as a starting point for further development.


