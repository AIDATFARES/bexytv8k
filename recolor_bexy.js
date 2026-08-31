const fs = require("fs");
const path = require("path");

// BexyTV Indigo-Fuchsia Color Transformation Script
// NEW PALETTE:
//   Primary Accent:  #6366F1  (Indigo 500) - replaces #0EA5E9
//   Secondary:       #D946EF  (Fuchsia 500) - replaces #14B8A6
//   Tertiary/Soft:   #E0E7FF  (Indigo 100) - replaces #BAE6FD
//   Gradient Mid:    #8B5CF6  (Violet 500) - replaces #0D9488

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
  // Primary accent (Sky Blue -> Indigo)
  ["#0EA5E9", "#6366F1"],
  ["#0ea5e9", "#6366F1"],
  
  // Secondary (Teal Green -> Fuchsia)
  ["#14B8A6", "#D946EF"],
  ["#14b8a6", "#D946EF"],
  
  // Tertiary / soft highlights
  ["#BAE6FD", "#E0E7FF"],
  ["#bae6fd", "#E0E7FF"],
  
  // Gradient midpoint
  ["#0D9488", "#8B5CF6"],
  ["#0d9488", "#8B5CF6"],
];

files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  const original = content;

  replacements.forEach(([oldColor, newColor]) => {
    const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "gi");
    content = content.replace(regex, newColor);
  });

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    modifiedCount++;
    console.log("Modified:", file);
  }
});

console.log(`\nDone! Modified ${modifiedCount} files with new Indigo-Fuchsia palette.`);
