import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Apply next-intl only to locale routes — skip /admin and static files
    "/((?!admin|api|_next|_vercel|.*\\..*).*)",
  ],
};
