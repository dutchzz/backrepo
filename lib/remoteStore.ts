export type ResourceName = "products" | "settings" | "theme";

export type LoadResult<T> = { configured: boolean; value: T | null };

export async function loadResource<T>(
  name: ResourceName
): Promise<LoadResult<T>> {
  try {
    const res = await fetch(`/api/data?resource=${name}`);
    if (!res.ok) return { configured: false, value: null };
    return (await res.json()) as LoadResult<T>;
  } catch {
    return { configured: false, value: null };
  }
}

export async function saveResource<T>(
  name: ResourceName,
  value: T
): Promise<void> {
  try {
    await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resource: name, value }),
    });
  } catch {
    // offline / not configured — ignore; localStorage still holds it
  }
}
