// middleware.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

// ==========================
// Role Constants
// ==========================
export const USER_ROLE = {
  superAdmin: "super-admin",
  admin: "admin",
  user: "user",
  manager: "manager",
} as const;

export type UserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];

export const USER_STATUS = ["active", "blocked"] as const;

// ==========================
// Access Map
// ==========================
const roleAccessMap: Record<string, readonly UserRole[]> = {
  "/c2bdadmin": [USER_ROLE.admin, USER_ROLE.superAdmin],
  "/manager": [USER_ROLE.manager],
  "/account": [USER_ROLE.user],
};

// ==========================
// Public Routes (no protection)
// ==========================
const publicRoutes = [
  "/login",
  "/register",
  "/c2bdadmin/login",
  "/manager/login",
];

// ==========================
// Middleware
// ==========================
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("c2bdAccessToken")?.value ?? "";

  // ✅ Skip protection for public routes
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    // Optional: if user is already logged in, redirect away from login/register
    if (token.trim()) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // If no token → redirect to correct login page
  if (!token.trim()) {
    if (pathname.startsWith("/c2bdadmin")) {
      return NextResponse.redirect(new URL("/c2bdadmin/login", request.url));
    }
    if (pathname.startsWith("/manager")) {
      return NextResponse.redirect(new URL("/manager/login", request.url));
    }
    if (pathname.startsWith("/account")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }

  try {
    // Decode token
    const decoded = jwtDecode<{ role?: UserRole }>(token);
    const role = decoded?.role as UserRole | undefined;

    if (!role) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // ✅ Role-based protection
    for (const [route, allowedRoles] of Object.entries(roleAccessMap)) {
      if (pathname.startsWith(route) && !allowedRoles.includes(role)) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }

    return NextResponse.next();
  } catch (err) {
    console.error("Invalid token:", err);
    // Invalid token → redirect to login
    if (pathname.startsWith("/c2bdadmin")) {
      return NextResponse.redirect(new URL("/c2bdadmin/login", request.url));
    }
    if (pathname.startsWith("/manager")) {
      return NextResponse.redirect(new URL("/manager/login", request.url));
    }
    if (pathname.startsWith("/account")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// ==========================
// Config
// ==========================
export const config = {
  matcher: ["/c2bdadmin/:path*", "/manager/:path*", "/account/:path*", "/login", "/register"],
};
