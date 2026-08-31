const fs = require("fs");
const path = require("path");

// ═══════════════════════════════════════════════════════
// BexyTV Blue-Green Color Transformation Script
// ═══════════════════════════════════════════════════════
//
// NEW PALETTE:
//   Primary Accent:  #0EA5E9  (Sky Blue)
//   Secondary:       #14B8A6  (Teal Green)
//   Tertiary/Soft:   #BAE6FD  (Light Sky)
//   Gradient Mid:    #0D9488  (Teal 600)
//   Dark Text:       #0F172A  (Slate 900)
//   Muted Text:      #64748B  (Slate 500)
//   Background:      #F8FAFC  (Slate 50)
//   Surface:         #F1F5F9  (Slate 100)
//   Surface High:    #E2E8F0  (Slate 200)
// ═══════════════════════════════════════════════════════

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!["node_modules", ".git", ".next", "public"].includes(file)) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith(".tsx") || dirFile.endsWith(".ts") || dirFile.endsWith(".css")) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
}

const files = walkSync("src");
let modifiedCount = 0;

const replacements = [
  // ─── Primary accent (Sage Green → Sky Blue) ───
  ["#7D927D", "#0EA5E9"],
  
  // ─── Secondary (Slate Blue → Teal Green) ───
  ["#5B7083", "#14B8A6"],
  
  // ─── Tertiary / soft highlights ───
  ["#D9C5B2", "#BAE6FD"],
  
  // ─── Gradient midpoint ───
  ["#6C8180", "#0D9488"],
  
  // ─── Dark text (Charcoal → Slate 900) ───
  ["#2F3136", "#0F172A"],
  
  // ─── Muted text (Grey → Slate 500) ───
  ["#68717A", "#64748B"],
  
  // ─── Background surfaces ───
  ["#F1F1F5", "#F1F5F9"],
  ["#E8E9ED", "#E2E8F0"],
  ["#F7F7F8", "#F8FAFC"],
];

files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  const original = content;

  replacements.forEach(([oldColor, newColor]) => {
    // Case-insensitive replacement for hex colors
    const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "gi");
    content = content.replace(regex, newColor);
  });

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    modifiedCount++;
    console.log("Modified:", file);
  }
});

console.log(`\nDone! Modified ${modifiedCount} files with new blue-green palette.`);
