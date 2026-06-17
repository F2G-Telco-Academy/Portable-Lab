# F2G Portable Laboratory Landing Page

This project is a promotional landing page for the F2G Portable Lab, a portable end-to-end software defined 4G network used for telecom research, training, testing, and demonstrations.

The page highlights the lab's main capabilities, including LTE core network services, VoLTE/IMS, SMS, eSIM provisioning, hardware details, use cases, FAQs, and contact actions. It is built as a single-page React application with a fixed navigation bar, animated section reveals, and a rotating hero showcase.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons

## Prerequisites

- Node.js 18 or newer
- npm

## Clone And Run

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Go into the project folder.

```bash
cd Landing-Page-Portable-Lab
```

3. Install the dependencies.

```bash
npm install
```

4. Start the development server.

```bash
npm run dev
```

5. Open the local address shown in the terminal, usually:

```bash
http://localhost:5173
```

## Available Scripts

- `npm run dev` starts the Vite development server.
- `npm run build` type-checks the app and creates a production build.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint across the project.

## What The App Includes

- A fixed header with desktop and mobile navigation.
- A hero section with a rotating image showcase.
- Feature cards describing the LTE, IMS, SMS, SDR, and eSIM stack.
- A step-by-step "How It Works" section.
- Telecom use cases for training, R&D, field testing, and certification.
- An FAQ section with technical answers.
- A contact section with company links and a contact CTA.

## Project Structure

- `src/App.tsx` wires the page sections together.
- `src/components/layout/` contains the header and footer.
- `src/components/sections/` contains the main landing page sections.
- `src/components/ui/` contains reusable UI pieces such as buttons, containers, and the video modal.
- `src/lib/` contains shared helpers and the reveal animation hook.
- `public/` contains the logo, product images, and other static assets.

## Notes

- A demo video can be added later by restoring the contact CTA and providing a `public/demo.mp4` file.
- The app also uses the F2G logo and product images from the `public/` folder.
