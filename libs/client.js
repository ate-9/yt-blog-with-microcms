import { createClient } from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: "next-js-blog-tutorial",
  apiKey: process.env.API_KEY,
})