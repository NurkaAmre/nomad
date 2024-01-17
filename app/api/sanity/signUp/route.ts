import { signUpHandler } from 'next-auth-sanity';

import { client } from "@/sanity/lib/client";
import type { SanityClient } from '@sanity/client';

export const POST = signUpHandler(client as SanityClient);
