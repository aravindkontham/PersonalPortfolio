# Aravind Kontham - Portfolio Website

A modern, high-performance developer portfolio built specifically to showcase cloud architecture, backend microservices, and technical achievements to recruiters and hiring managers.

Optimized for **zero-configuration deployment on Vercel**.

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom dark theme, glowing gradients, mesh patterns)
- **Icons:** Lucide React
- **Animations & Effects:** Canvas Confetti, Framer Motion & CSS keyframe animations
- **Target Hosting:** Vercel

---

## 🌟 Key Features for Recruiters

1. **Recruiter 30-Sec Fast-Track:**
   - Instant summary of core competencies, current company (Capgemini), academic standing, and cloud credentials.
   - Quick one-click copy buttons for email and phone.
   - Instant resume download.
2. **Interactive Cloud Architecture Visualizer:**
   - Real-time simulation of Azure APIM -> Service Bus / Functions -> ASP.NET Core Web API -> Azure SQL / Blob Storage flow.
3. **Experience Timeline:**
   - Details of Capgemini Software Engineer and Intern roles with quantified bullets and tech tags.
4. **Featured Projects Showcase:**
   - Azure Data Factory ETL Pipeline, API Management Gateway, and On-Demand Car Wash Backend (with GitHub links).
5. **Certifications Showcase:**
   - Microsoft Azure AI Engineer Associate, Google GenAI Leader, Azure Fundamentals, and Azure AI Fundamentals.
6. **LeetCode & GitHub Profiles:**
   - Dedicated algorithmic problem-solving and open-source footprints.
7. **Direct Contact Channels:**
   - Pre-filled contact form, email launcher, and verified links.

---

## 💻 Local Development

1. Clone or navigate to the repository:
   ```bash
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Hosting on Vercel (Step-by-Step)

### Option A: Via GitHub (Recommended)

1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Aravind Kontham Portfolio"
   ```

2. Create a new repository on your GitHub account (`https://github.com/new`), e.g., `portfolio`.

3. Push your code:
   ```bash
   git remote add origin https://github.com/aravindkontham/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
5. Click **"Add New..."** -> **"Project"**.
6. Import your `portfolio` repository.
7. Click **Deploy**. Vercel will automatically detect Next.js and deploy your live site in under 60 seconds with a free `.vercel.app` domain!

---

### Option B: Via Vercel CLI (Instant)

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```
   Follow the simple prompts in your terminal to publish immediately!
