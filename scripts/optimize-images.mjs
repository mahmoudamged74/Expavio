import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assetsDir = path.resolve("public/assets");

const jobs = [
  // Logo — keep small for header/footer/splash
  { src: "expavio.png", out: "expavio-logo.webp", width: 480, quality: 82 },
  {
    src: "expavio.png",
    out: "expavio-logo.png",
    width: 480,
    quality: 82,
    format: "png",
  },

  // Full-bleed / large photos
  // Hero backgrounds stay PNG — palette quantization keeps them under ~500KB
  {
    src: "hero-new-ar-dark.png",
    out: "hero-ar-dark.png",
    width: 1600,
    quality: 76,
    format: "png",
  },
  {
    src: "hero-new-ar-light.png",
    out: "hero-ar-light.png",
    width: 1600,
    quality: 76,
    format: "png",
  },
  {
    src: "hero-new-en-dark.png",
    out: "hero-en-dark.png",
    width: 1600,
    quality: 76,
    format: "png",
  },
  {
    src: "hero-new-en-light.png",
    out: "hero-en-light.png",
    width: 1600,
    quality: 76,
    format: "png",
  },
  {
    src: "foreign-investor.png",
    out: "foreign-investor.webp",
    width: 1400,
    quality: 72,
  },
  {
    src: "investor-hero.png",
    out: "investor-hero.webp",
    width: 1400,
    quality: 72,
  },
  {
    src: "investor-journey.png",
    out: "investor-journey.webp",
    width: 1600,
    quality: 70,
  },
  { src: "about-hero.png", out: "about-hero.webp", width: 1920, quality: 72 },
  {
    src: "about-hero-ar.png",
    out: "about-hero-ar.webp",
    width: 1920,
    quality: 72,
  },
  { src: "about-story.png", out: "about-story.webp", width: 1200, quality: 72 },
  {
    src: "about-method.png",
    out: "about-method.webp",
    width: 1600,
    quality: 70,
  },
  { src: "cta-bg.png", out: "cta-bg.webp", width: 1600, quality: 70 },
  {
    src: "brand-mark.png",
    out: "brand-mark.webp",
    width: 640,
    quality: 88,
  },
];

async function optimizeOne(job) {
  const input = path.join(assetsDir, job.src);
  const output = path.join(assetsDir, job.out);
  const pipeline = sharp(input).resize({
    width: job.width,
    withoutEnlargement: true,
  });

  if (job.format === "png") {
    await pipeline
      .png({
        quality: job.quality,
        palette: true,
        effort: 10,
        compressionLevel: 9,
      })
      .toFile(output);
  } else {
    await pipeline.webp({ quality: job.quality }).toFile(output);
  }

  const [before, after] = await Promise.all([fs.stat(input), fs.stat(output)]);

  const beforeKb = Math.round(before.size / 1024);
  const afterKb = Math.round(after.size / 1024);
  console.log(`${job.src} → ${job.out}: ${beforeKb}KB → ${afterKb}KB`);
}

async function main() {
  for (const job of jobs) {
    await optimizeOne(job);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
