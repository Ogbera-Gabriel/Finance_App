# Budget and Financial Helper App

## Overview

This app is designed to help users manage their finances by allowing them to create accounts, categorize transactions, and visualize their data using bar charts and pie charts. The app features a robust backend built with Hono.js, a modern frontend using Next.js, and various other technologies to ensure seamless performance and user experience.

## Tech Stack

- **Runtime:** Bun
- **Frontend:** Next.js
- **Authentication:** Clerk
- **Backend:** Hono.js
- **UI Library:** Shadcn
- **State Management:** React Query
- **Validation:** Zod (both front-end and backend)
- **Database ORM:** Drizzle ORM

## Features

- User account management
- Categorization of transactions
- Data visualization with bar charts and pie charts
- Secure authentication and authorization
- Responsive and user-friendly interface

## Installation

### Prerequisites

- Node.js (v16.0.0 or later)
- Bun runtime

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Ogbera-Gabriel/Finance_App.git 
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```sh
   bun install
   ```

3. **Set up the database:**
   ```sh
   docker-compose up -d
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add the necessary environment variables.
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

   DATABASE_URL=your_database_url

   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

5. **Run the development server:**
   ```sh
   bun dev
   ```

### Running in Production

Since the app is still under development, the deployment steps will be detailed in a future release. Ensure you are testing thoroughly and iterating based on feedback.

## Contributing

We welcome contributions from the community! Here’s how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the creators of Hono.js, Next.js, Clerk, and all other open-source projects used in this app.

---

Feel free to expand or modify this README as needed to fit your project's specific requirements.