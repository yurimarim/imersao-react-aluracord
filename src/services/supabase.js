import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ymundrxxwaljeeyvbzll.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM4NTY0NywiZXhwIjoxOTU4OTYxNjQ3fQ.iLXEDIts3xVnesc3d5TR48KsCq2Rytsnip66nEJdbp4'

export const supabaseClient = createClient(
  // process.env.NEXT_PUBLIC_URL,
  // process.env.NEXT_PUBLIC_ANON_KEY
  supabaseUrl,
  supabaseAnonKey
)
