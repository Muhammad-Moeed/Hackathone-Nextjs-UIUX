const {
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET = 'production', // Default value if not set
  NEXT_PUBLIC_SANITY_AUTH_TOKEN
} = process.env;

// Check if the required environment variables are available
if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !NEXT_PUBLIC_SANITY_AUTH_TOKEN) {
  console.error("Sanity project ID or auth token is missing.");
  process.exit(1); // Exit if projectId or authToken is missing
}

// Set up the Sanity client
const client = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  token: NEXT_PUBLIC_SANITY_AUTH_TOKEN,
  useCdn: false, // Set to true for faster responses if you're okay with outdated data
});
