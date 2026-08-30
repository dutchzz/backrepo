"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { useProducts } from "@/components/ProductsProvider";
import { useSiteSettings, DEFAULTS } from "@/components/SiteSettingsProvider";
import { THEMES, type Palette } from "@/lib/themes";
import type { ProductCategory } from "@/lib/products";
import { CATEGORY_META } from "@/lib/products";

type Tab = "theme" | "products" | "content";

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("theme");

  return (
    <div className="min-h-screen">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
          <h1 className="br-wordmark text-lg tracking-tight text-brand-lime">
            Admin
          </h1>
          <a
            href="/"
            className="text-xs uppercase tracking-widest text-muted hover:text-paper"
          >
            View site →
          </a>
        </div>
      </header>

      <nav className="mx-auto flex max-w-content gap-1 px-6 pt-6 text-xs uppercase tracking-widest">
        {(["theme", "products", "content"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`border-b-2 px-3 py-2 br-tag ${
              tab === t
                ? "border-brand-lime text-brand-lime"
                : "border-transparent text-muted hover:text-paper"
            }`}
          >
            {t}
          </button>
        ))}
      </nav>

      <main className="mx-auto max-w-content px-6 py-10">
        {tab === "theme" && <ThemePanel />}
        {tab === "products" && <ProductsPanel />}
        {tab === "content" && <ContentPanel />}
      </main>
    </div>
  );
}

function ThemePanel() {
  const { themeId, setThemeId } = useTheme();

  return (
    <section>
      <h2 className="text-2xl font-extrabold tracking-tightest text-paper">
        Theme
      </h2>
      <p className="mt-2 text-sm text-muted">
        Select a palette to apply site-wide. Changes save automatically and
        persist in the browser.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {THEMES.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setThemeId(theme.id)}
            className={`overflow-hidden rounded border text-left transition ${
              themeId === theme.id
                ? "border-brand-lime"
                : "border-line hover:border-muted"
            }`}
          >
            <SwatchPreview theme={theme} />
            <div className="flex items-center justify-between px-4 py-3">
              <span className="br-tag text-paper">
                {theme.name}
              </span>
              {themeId === theme.id && (
                <span className="br-tag text-brand-lime">
                  Active
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function SwatchPreview({ theme }: { theme: Palette }) {
  return (
    <div
      className="flex h-24 items-center justify-center gap-2"
      style={{
        background: `rgb(${theme.bg})`,
        borderBottom: `1px solid rgb(${theme.line})`,
      }}
    >
      <span
        className="br-wordmark text-lg uppercase"
        style={{ color: `rgb(${theme.fg})` }}
      >
        Aa
      </span>
      <span
        className="h-6 w-6 rounded-full"
        style={{ background: `rgb(${theme.accent})` }}
      />
    </div>
  );
}

function ProductsPanel() {
  const { products, add, update, remove, reset } = useProducts();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [price, setPrice] = useState("0");
  const [fileCount, setFileCount] = useState("1");
  const [images, setImages] = useState<string[]>([]);
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [tagline, setTagline] = useState("");
  const [details, setDetails] = useState("");
  const [features, setFeatures] = useState("");
  const [category, setCategory] = useState<ProductCategory>("standard");
  const [highlight, setHighlight] = useState(false);
  const [uploading, setUploading] = useState(false);

  const startEdit = (id: string) => {
    const p = products.find((x) => x.id === id);
    if (!p) return;
    setEditingId(id);
    setName(p.name);
    setSummary(p.summary);
    setPrice(String(p.priceUsd));
    setFileCount(String(p.fileCount));
    setImages(p.images ?? (p.image ? [p.image] : []));
    setFileUrl(p.fileUrl ?? "");
    setTagline(p.tagline ?? "");
    setDetails(p.details ?? "");
    setFeatures((p.features ?? []).join(", "));
    setCategory(p.category ?? (p.priceUsd === 0 ? "free" : "standard"));
    setHighlight(p.highlight ?? false);
  };

  const handleUpload = async (files: FileList) => {
    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const body = new FormData();
        body.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Upload failed");
        setImages((prev) => [...prev, data.url]);
      }
    } catch (e) {
      alert(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const submit = () => {
    if (!name.trim()) return;
      const payload = {
        name: name.trim(),
        summary: summary.trim(),
        priceUsd: Math.max(0, Number(price) || 0),
        fileCount: Math.max(1, Number(fileCount) || 1),
        image: images[0] ?? undefined,
        images,
        fileUrl: fileUrl.trim() || undefined,
        tagline: tagline.trim() || undefined,
        details: details.trim() || undefined,
        features: features
          .split(",")
          .map((f) => f.trim())
          .filter(Boolean),
        category,
      };
    if (editingId) {
      update(editingId, payload);
    } else {
      add(payload);
    }
    resetForm();
  };

  const resetForm = () => {
    setEditingId(null);
    setName("");
    setSummary("");
    setPrice("0");
    setFileCount("1");
    setImages([]);
    setImageUrlInput("");
    setFileUrl("");
    setTagline("");
    setDetails("");
    setFeatures("");
    setCategory("standard");
    setHighlight(false);
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-extrabold tracking-tightest text-paper">
          Products
        </h2>
        <button
          onClick={reset}
          className="text-xs uppercase tracking-widest text-muted hover:text-paper"
        >
          Reset to defaults
        </button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xs uppercase tracking-widest text-muted">
            Catalog ({products.length})
          </h3>
          <ul className="divide-y divide-line border border-line">
            {products.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between px-4 py-3"
              >
                <div>
                  <p className="text-sm font-bold text-paper">{p.name}</p>
                  <p className="text-xs text-muted">
                    ${p.priceUsd} · {p.fileCount} file(s)
                  </p>
                </div>
                <div className="flex gap-3 text-xs uppercase tracking-widest">
                  <button
                    onClick={() => startEdit(p.id)}
                    className="text-muted hover:text-paper"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => remove(p.id)}
                    className="text-muted hover:text-paper"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-line p-6">
          <h3 className="mb-4 text-xs uppercase tracking-widest text-muted">
            {editingId ? "Edit product" : "Add product"}
          </h3>
          <div className="space-y-4">
            <Field label="Name">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              />
            </Field>
            <Field label="Summary">
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows={2}
                className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              />
            </Field>
            <Field label={`Images (${images.length})`}>
              <div className="space-y-3">
                {images.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {images.map((src, i) => (
                      <div key={i} className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt={`image ${i + 1}`}
                          className="h-20 w-24 border border-line object-cover"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setImages((prev) => prev.filter((_, idx) => idx !== i))
                          }
                          className="absolute -right-2 -top-2 bg-ink px-1.5 text-xs text-muted hover:text-paper"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <input
                  type="file"
                  multiple
                  accept="image/png,image/jpeg,image/webp,image/svg+xml"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length) {
                      handleUpload(e.target.files);
                      e.target.value = "";
                    }
                  }}
                  className="block w-full text-xs text-muted file:mr-3 file:border-0 file:bg-line file:px-3 file:py-2 file:text-xs file:uppercase file:tracking-widest file:text-paper"
                />
                <input
                  value={imageUrlInput}
                  onChange={(e) => setImageUrlInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && imageUrlInput.trim()) {
                      setImages((prev) => [...prev, imageUrlInput.trim()]);
                      setImageUrlInput("");
                    }
                  }}
                  placeholder="…or paste a hosted image URL, press Enter"
                  className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
                />
                {uploading && (
                  <span className="text-xs text-muted">Uploading…</span>
                )}
              </div>
            </Field>
            <Field label="Download file URL (for free / $0 products)">
              <div className="space-y-2">
                <input
                  value={fileUrl}
                  onChange={(e) => setFileUrl(e.target.value)}
                  placeholder="https://…/file.stl"
                  className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
                />
                <div>
                  <input
                    type="file"
                    accept=".stl,.zip"
                    id="download-file-upload"
                    className="hidden"
                    onChange={async (e) => {
                      const f = e.target.files?.[0];
                      if (!f) return;
                      setUploading(true);
                      try {
                        const body = new FormData();
                        body.append("file", f);
                        const res = await fetch("/api/upload", {
                          method: "POST",
                          body,
                        });
                        const data = await res.json();
                        if (!res.ok)
                          throw new Error(data.error || "Upload failed");
                        setFileUrl(data.url);
                      } catch (err) {
                        alert(
                          err instanceof Error ? err.message : "Upload failed"
                        );
                      } finally {
                        setUploading(false);
                        e.target.value = "";
                      }
                    }}
                  />
                  <label
                    htmlFor="download-file-upload"
                    className="inline-block cursor-pointer border border-line px-3 py-2 text-xs font-bold uppercase tracking-widest text-muted hover:text-paper"
                  >
                    {uploading ? "Uploading…" : "Upload .stl / .zip"}
                  </label>
                </div>
              </div>
            </Field>
            <Field label="Tagline (modal)">
              <input
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="Short line shown above the title"
                className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              />
            </Field>
            <Field label="Details (modal)">
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={3}
                placeholder="Longer description shown in the popup"
                className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              />
            </Field>
            <Field label="Features (modal, comma-separated)">
              <input
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                placeholder="Feature one, Feature two, Feature three"
                className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              />
            </Field>
            <label className="flex items-center gap-3 text-sm text-paper">
              <input
                type="checkbox"
                checked={highlight}
                onChange={(e) => setHighlight(e.target.checked)}
                className="h-4 w-4 accent-[rgb(var(--c-accent))]"
              />
              Premium (adds accent border + Premium badge)
            </label>
            <Field label="Category">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ProductCategory)}
                className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              >
                {(Object.keys(CATEGORY_META) as ProductCategory[]).map((c) => (
                  <option key={c} value={c}>
                    {CATEGORY_META[c].label}
                  </option>
                ))}
              </select>
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Price (USD)">
                <input
                  type="number"
                  min={0}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
                />
              </Field>
              <Field label="File count">
                <input
                  type="number"
                  min={1}
                  value={fileCount}
                  onChange={(e) => setFileCount(e.target.value)}
                  className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
                />
              </Field>
            </div>
            <div className="flex gap-3">
              <button
                onClick={submit}
                className="bg-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink"
              >
                {editingId ? "Save changes" : "Add product"}
              </button>
              {editingId && (
                <button
                  onClick={resetForm}
                  className="border border-line px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted hover:text-paper"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentPanel() {
  const { settings, update, reset } = useSiteSettings();
  const [brand, setBrand] = useState(settings.brand);
  const [heroTitle, setHeroTitle] = useState(settings.heroTitle);
  const [heroSubtitle, setHeroSubtitle] = useState(settings.heroSubtitle);
  const [footerDisclaimer, setFooterDisclaimer] = useState(
    settings.footerDisclaimer
  );

  const save = () => {
    update({
      brand: brand.trim() || "Back Repo",
      heroTitle: heroTitle.trim(),
      heroSubtitle: heroSubtitle.trim(),
      footerDisclaimer: footerDisclaimer.trim(),
    });
  };

  return (
    <section>
      <h2 className="text-2xl font-extrabold tracking-tightest text-paper">
        Site Content
      </h2>
      <p className="mt-2 text-sm text-muted">
        Edit brand name, hero copy, and the compliance disclaimer. Save to apply
        store-wide.
      </p>
      <div className="mt-8 max-w-2xl space-y-5 border border-line p-6">
        <Field label="Brand name">
          <input
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
          />
        </Field>
        <Field label="Hero title (use \n for line break)">
          <textarea
            value={heroTitle}
            onChange={(e) => setHeroTitle(e.target.value)}
            rows={2}
            className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
          />
        </Field>
        <Field label="Hero subtitle">
          <textarea
            value={heroSubtitle}
            onChange={(e) => setHeroSubtitle(e.target.value)}
            rows={3}
            className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
          />
        </Field>
        <Field label="Footer disclaimer">
          <textarea
            value={footerDisclaimer}
            onChange={(e) => setFooterDisclaimer(e.target.value)}
            rows={4}
            className="w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
          />
        </Field>
        <div className="flex gap-3">
          <button
            onClick={save}
            className="bg-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink"
          >
            Save content
          </button>
          <button
            onClick={() => {
              reset();
              setBrand(DEFAULTS.brand);
              setHeroTitle(DEFAULTS.heroTitle);
              setHeroSubtitle(DEFAULTS.heroSubtitle);
              setFooterDisclaimer(DEFAULTS.footerDisclaimer);
            }}
            className="border border-line px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted hover:text-paper"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[10px] uppercase tracking-widest text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
