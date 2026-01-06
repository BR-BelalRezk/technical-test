"use server";

import { cookies } from "next/headers";

export async function setAuthCookie(token: string) {
  try {
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to set authentication cookie" };
  }
}

export async function getAuthCookie() {
  try {
    const cookieStore = await cookies();
    return cookieStore.get("token")?.value || null;
  } catch (error) {
    return null;
  }
}

export async function deleteAuthCookie() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete authentication cookie" };
  }
}
