// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"

import {handlers} from "@/auth";

export const { GET, POST } = handlers; // handlers is an object that contains the GET and POST handlers for the authentication routes. By exporting them, we are telling Next.js to use these handlers for the corresponding HTTP methods on this route. This allows us to handle authentication requests (like sign in and sign out) using the logic defined in our NextAuth configuration.

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID!, // if you don't and ! in the end, then there would be TS error. 
//       clientSecret: process.env.GITHUB_SECRET!,
//       // Fixed the TypeScript error by adding non-null assertions (!) to the environment variables. Since GITHUB_ID and GITHUB_SECRET are required for authentication to work, they should always be defined at runtime, so the non-null assertion is appropriate here.
//     }),
//     // ...add more providers here
//   ],
// }

// export default NextAuth(authOptions)