import { mkdir, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, "..");
const brandDir = join(root, "public", "brand", "paradox-trello");
const execFileAsync = promisify(execFile);

const colors = {
  void: "#050505",
  iron: "#0d0f11",
  graphite: "#15181b",
  bone: "#f4efe6",
  mint: "#77f6c9",
  ash: "#9da5ad",
  frost: "#d9e7e1",
};

const svgTemplate = ({
  width,
  height,
  body,
}: {
  width: number;
  height: number;
  body: string;
}) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${colors.void}" />
      <stop offset="100%" stop-color="${colors.graphite}" />
    </linearGradient>
    <linearGradient id="trace" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${colors.mint}" />
      <stop offset="100%" stop-color="${colors.frost}" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="7" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  ${body}
</svg>`;

const mazeFrame = ({
  x,
  y,
  width,
  height,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
}) => `
  <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${width * 0.08}" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3" />
  <path d="M ${x + width * 0.18} ${y + height * 0.14} H ${x + width * 0.72} V ${y + height * 0.36} H ${x + width * 0.42} V ${y + height * 0.58} H ${x + width * 0.78} V ${y + height * 0.82} H ${x + width * 0.18}" fill="none" stroke="url(#trace)" stroke-width="${width * 0.05}" stroke-linecap="square" stroke-linejoin="miter" filter="url(#glow)" />
  <path d="M ${x + width * 0.32} ${y + height * 0.14} V ${y + height * 0.28} M ${x + width * 0.58} ${y + height * 0.58} V ${y + height * 0.72} M ${x + width * 0.18} ${y + height * 0.48} H ${x + width * 0.3}" fill="none" stroke="${colors.bone}" stroke-width="${width * 0.026}" stroke-linecap="square" />
  <circle cx="${x + width * 0.18}" cy="${y + height * 0.82}" r="${width * 0.03}" fill="${colors.bone}" />
  <circle cx="${x + width * 0.72}" cy="${y + height * 0.14}" r="${width * 0.03}" fill="${colors.mint}" />
`;

const fieldLines = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => `
  <g opacity="0.22">
    <path d="M 96 94 H ${width - 96}" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
    <path d="M 96 ${height - 94} H ${width - 96}" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
    <path d="M 96 94 V ${height - 94}" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
    <path d="M ${width - 96} 94 V ${height - 94}" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
  </g>
  <g opacity="0.28">
    <path d="M 176 210 H ${width - 220} V 360 H ${Math.round(width * 0.42)} V 538 H ${Math.round(width * 0.76)} V ${height - 240} H 176" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="5" />
    <path d="M 236 280 H ${Math.round(width * 0.58)} V 430 H ${Math.round(width * 0.32)} V 640 H ${Math.round(width * 0.66)}" fill="none" stroke="url(#trace)" stroke-width="8" filter="url(#glow)" />
  </g>
`;

const markSvg = svgTemplate({
  width: 512,
  height: 512,
  body: `
    <rect width="512" height="512" fill="url(#bg)" />
    <rect x="46" y="46" width="420" height="420" rx="34" fill="#0a0b0c" stroke="rgba(255,255,255,0.1)" />
    ${mazeFrame({ x: 78, y: 78, width: 356, height: 356 })}
  `,
});

const logoSvg = svgTemplate({
  width: 1480,
  height: 420,
  body: `
    <rect width="1480" height="420" fill="${colors.void}" />
    <g transform="translate(42 38) scale(0.67)">
      <rect width="512" height="512" fill="url(#bg)" />
      <rect x="46" y="46" width="420" height="420" rx="34" fill="#0a0b0c" stroke="rgba(255,255,255,0.1)" />
      ${mazeFrame({ x: 78, y: 78, width: 356, height: 356 })}
    </g>
    <text x="424" y="176" fill="${colors.bone}" font-size="152" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">PARADOX</text>
    <text x="424" y="304" fill="${colors.bone}" font-size="152" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">TRELLO</text>
    <text x="430" y="356" fill="${colors.ash}" font-size="28" font-family="Arial, Helvetica, sans-serif" letter-spacing="10">OFFICIAL LINKS / BOARD MAP / DISCORD / ROBLOX</text>
    <rect x="430" y="382" width="456" height="8" fill="${colors.mint}" />
  `,
});

const heroSvg = svgTemplate({
  width: 1600,
  height: 1800,
  body: `
    <rect width="1600" height="1800" fill="url(#bg)" />
    ${fieldLines({ width: 1600, height: 1800 })}
    <path d="M 176 230 H 960 V 498 H 612 V 762 H 1222 V 1128 H 350 V 1500 H 1398" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="12" />
    <path d="M 234 292 H 860 V 456 H 544 V 700 H 1124 V 1038 H 416 V 1414 H 1328" fill="none" stroke="url(#trace)" stroke-width="16" filter="url(#glow)" />
    <circle cx="234" cy="292" r="20" fill="${colors.bone}" />
    <circle cx="1328" cy="1414" r="20" fill="${colors.mint}" />
    <g transform="translate(1110 178) scale(0.72)">
      <rect width="512" height="512" fill="none" />
      <rect x="46" y="46" width="420" height="420" rx="34" fill="rgba(10,11,12,0.82)" stroke="rgba(255,255,255,0.1)" />
      ${mazeFrame({ x: 78, y: 78, width: 356, height: 356 })}
    </g>
    <text x="146" y="1268" fill="${colors.bone}" font-size="216" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="8">PARADOX</text>
    <text x="146" y="1474" fill="${colors.bone}" font-size="216" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="8">TRELLO</text>
    <text x="154" y="1560" fill="${colors.ash}" font-size="34" font-family="Arial, Helvetica, sans-serif" letter-spacing="10">ROUTE THE QUERY TO THE RIGHT OFFICIAL SURFACE</text>
  `,
});

const ogSvg = svgTemplate({
  width: 1200,
  height: 630,
  body: `
    <rect width="1200" height="630" fill="url(#bg)" />
    ${fieldLines({ width: 1200, height: 630 })}
    <path d="M 102 120 H 632 V 232 H 420 V 356 H 862 V 510 H 1084" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8" />
    <path d="M 132 154 H 564 V 252 H 360 V 386 H 808 V 472 H 1016" fill="none" stroke="url(#trace)" stroke-width="12" filter="url(#glow)" />
    <g transform="translate(866 104) scale(0.46)">
      <rect width="512" height="512" fill="none" />
      <rect x="46" y="46" width="420" height="420" rx="34" fill="rgba(10,11,12,0.84)" stroke="rgba(255,255,255,0.1)" />
      ${mazeFrame({ x: 78, y: 78, width: 356, height: 356 })}
    </g>
    <text x="100" y="446" fill="${colors.bone}" font-size="124" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">PARADOX TRELLO</text>
    <text x="104" y="502" fill="${colors.ash}" font-size="24" font-family="Arial, Helvetica, sans-serif" letter-spacing="7">OFFICIAL BOARD / OFFICIAL DISCORD / OFFICIAL ROBLOX PAGE</text>
    <rect x="104" y="534" width="430" height="8" fill="${colors.mint}" />
  `,
});

async function writeSvgAndPng(
  name: string,
  svg: string,
  options?: { width?: number; height?: number }
) {
  const svgPath = join(brandDir, `${name}.svg`);
  const pngPath = join(brandDir, `${name}.png`);

  await writeFile(svgPath, svg, "utf8");

  const args = ["-o", pngPath];
  if (options?.width) {
    args.push("-w", String(options.width));
  }
  if (options?.height) {
    args.push("-h", String(options.height));
  }
  args.push(svgPath);

  await execFileAsync("rsvg-convert", args);
}

async function main() {
  await mkdir(brandDir, { recursive: true });

  await writeSvgAndPng("paradox-trello-mark", markSvg, {
    width: 512,
    height: 512,
  });
  await writeSvgAndPng("paradox-trello-logo", logoSvg, { width: 1480 });
  await writeSvgAndPng("paradox-trello-hero", heroSvg, { width: 1600 });
  await writeSvgAndPng("paradox-trello-og", ogSvg, { width: 1200, height: 630 });

  await writeFile(join(root, "public", "favicon.svg"), markSvg, "utf8");
  await execFileAsync("rsvg-convert", [
    join(root, "public", "favicon.svg"),
    "-o",
    join(root, "public", "favicon.png"),
    "-w",
    "512",
    "-h",
    "512",
  ]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
