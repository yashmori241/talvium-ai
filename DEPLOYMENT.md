# Talvium AI Deployment Guide

## Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Git (for version control)

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Environment Variables**
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   The website will be available at http://localhost:3000

## Building for Production

1. **Create Production Build**
   ```bash
   npm run build
   ```
   This will generate optimized files in the `dist` directory.

2. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Deployment Options

### Option 1: Google Cloud Run (Recommended)
Since this project was created with AI Studio, Google Cloud Run is the recommended deployment option.

1. **Install Google Cloud CLI**
   Follow the instructions at https://cloud.google.com/sdk/docs/install

2. **Authenticate with Google Cloud**
   ```bash
   gcloud auth login
   ```

3. **Set your project**
   ```bash
   gcloud config set project YOUR_PROJECT_ID
   ```

4. **Deploy to Cloud Run**
   ```bash
   gcloud run deploy talvium-ai \
     --source . \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

### Option 2: Vercel
1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Option 3: Netlify
1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## Environment Variables for Production
When deploying, make sure to set the following environment variables:
- `GEMINI_API_KEY` - Your Gemini API key

## Customization
To customize the website for your specific use case:

1. **Update Content**
   - Modify text in the component files (`src/components/*.tsx`)
   - Update images in `src/assets/images/`

2. **Add Real Case Studies**
   - Edit `src/components/ProofOfWork.tsx` with actual metrics and results

3. **Update Contact Information**
   - Modify contact details in `src/components/Footer.tsx`

4. **Add Your Logo**
   - Replace the logo in `src/components/Logo.tsx`

## Troubleshooting

### Common Issues
1. **Build Errors**
   - Ensure all dependencies are installed: `npm install`
   - Check Node.js version compatibility

2. **API Key Issues**
   - Verify the GEMINI_API_KEY is correctly set in environment variables
   - Check API key permissions in Google Cloud Console

3. **Deployment Failures**
   - Check build logs for specific error messages
   - Ensure all environment variables are set correctly

### Support
For additional support, refer to:
- React documentation: https://reactjs.org/
- Vite documentation: https://vitejs.dev/
- Tailwind CSS documentation: https://tailwindcss.com/