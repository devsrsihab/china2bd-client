import envConfig from "@/config/envConfig";

export async function settingsFetcher() {
  try {
    const res = await fetch(`${envConfig.serverApi}/settings`, {
      cache: "no-store", // Prevent caching for fresh data
    });
    if (!res.ok) throw new Error("Failed to fetch settings");

    return res.json();
  } catch (error) {
    console.error("Error fetching settings:", error);
    return null;
  }
}
