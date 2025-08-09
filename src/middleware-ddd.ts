// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { jwtDecode } from "jwt-decode";
// import { NextRequest, NextResponse } from "next/server";
// import { removeTokenFromCookie } from "./utils/token";

// const AuthRoutes = ["/admin/login"];

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const cookies = request.cookies;
//   const accessToken = cookies.get("realStateAccessToken")?.value ?? ""; // Ensure it's always a string

//   // If the user is already logged in and visits the login page, redirect to dashboard
//   if (accessToken && pathname === "/admin/login") {
//     return NextResponse.redirect(new URL("/admin/dashboard", request.url));
//   }

//   // If no token and trying to access a protected route, redirect to login
//   if (!accessToken.trim() && !AuthRoutes.includes(pathname)) {
//     const response = NextResponse.redirect(
//       new URL("/admin/login", request.url)
//     );

//     // Remove token from cookies if it somehow exists but is invalid
//     removeTokenFromCookie();
//     return response;
//   }

//   try {
//     // Ensure accessToken is not empty before decoding
//     if (accessToken.trim()) {
//       const decodedData = jwtDecode(accessToken) as any;
//       const role = decodedData?.role;

//       // Allow only ADMIN to access /admin routes
//       if (pathname.startsWith("/admin") && role !== "ADMIN") {
//         return NextResponse.redirect(new URL("/", request.url)); // Redirect unauthorized users to home
//       }
//     }

//     return NextResponse.next(); // Allow access
//   } catch (error) {
//     console.error("Error decoding token:", error);

//     // If token is invalid, clear it and redirect to login
//     const response = NextResponse.redirect(
//       new URL("/admin/login", request.url)
//     );
//     removeTokenFromCookie();
//     return response;
//   }
// }

// export const config = {
//   matcher: ["/admin/:path*", "/admin/login"],
// };
