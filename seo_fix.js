const fs = require("fs");
const path = require("path");

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (file !== "node_modules" && file !== ".git" && file !== ".next" && file !== "public") {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith(".ts") || dirFile.endsWith(".tsx")) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
}

const files = walkSync("src");
let modifiedCount = 0;
const report = {
  h1: 0,
  h2: 0,
  h3: 0,
  h4: 0,
  colors: 0
};

files.forEach(file => {
  const original = fs.readFileSync(file, "utf8");
  let updated = original;

  // 1. Fix lingering #FF6B00 colors
  if (updated.includes("#FF6B00")) {
    updated = updated.replace(/text-\[#FF6B00\]/g, "text-[#7D927D]");
    updated = updated.replace(/border-\[#FF6B00\]/g, "border-[#5B7083]");
    updated = updated.replace(/bg-\[#FF6B00\]/g, "bg-[#5B7083]");
    updated = updated.replace(/shadow-\[#FF6B00\]/g, "shadow-[#5B7083]");
    report.colors++;
  }

  // 2. Fix H1s
  if (file.includes("HeroSection.tsx")) {
    const h1Regex = /BEST <span className="([^"]*)">IPTV<\/span> STREAMING –<br \/>/g;
    if (h1Regex.test(updated)) {
      updated = updated.replace(h1Regex, 'PREMIUM <span className="$1">4K IPTV</span> SERVICE –<br />');
      report.h1++;
    }
  }

  if (file.includes("PricingPageContent.tsx")) {
    if (updated.includes("Choose Your Exclusive")) {
      updated = updated.replace("Choose Your Exclusive", "Premium IPTV Subscription");
      updated = updated.replace("Subscription Plans.", "Plans &amp; Pricing");
      report.h1++;
    }
  }

  if (file.includes("installation") && file.includes("page.tsx")) {
    if (updated.includes("How to Setup IPTV Service")) {
      updated = updated.replace("How to Setup IPTV Service", "IPTV Installation Guide");
      updated = updated.replace("On Any Device Quickly.", "For All Supported Devices.");
      report.h1++;
    }
  }

  if (file.includes("ResellerPageContent.tsx")) {
    if (updated.includes("Become an IPTV Reseller")) {
      updated = updated.replace("Become an IPTV Reseller", "IPTV Reseller Program");
      updated = updated.replace("And Start Earning Easy Money.", "Become a Partner Today.");
      report.h1++;
    }
  }

  if (file.includes("channels") && file.includes("page.tsx")) {
    if (updated.includes("Popular BexyTV")) {
      updated = updated.replace("Popular BexyTV", "Premium IPTV Channels");
      updated = updated.replace("Live Channels &amp; VOD.", "Live TV, Sports &amp; VOD.");
      report.h1++;
    }
  }

  // 3. Fix H4s
  if (file.includes("PricingPageContent.tsx")) {
    const h4Regex = /<h4([^>]*)>Secure Payments & Instant Access<\/h4>/g;
    if (h4Regex.test(updated)) {
      updated = updated.replace(h4Regex, '<p$1>Secure Payments & Instant Access</p>');
      report.h4++;
    }
  }

  if (file.includes("PricingSection.tsx")) {
    const h4Regex2 = /<h4([^>]*)>([\s\S]*?)<\/h4>/g;
    if (h4Regex2.test(updated)) {
      updated = updated.replace(h4Regex2, '<p$1>$2</p>');
      report.h4++;
    }
  }
  
  if (file.includes("DeviceSetupGuide.tsx")) {
    const h4Regex3 = /<h4([^>]*)>Important Note<\/h4>/g;
    if (h4Regex3.test(updated)) {
      updated = updated.replace(h4Regex3, '<p$1>Important Note</p>');
      report.h4++;
    }
    const h4Regex4 = /<h4([^>]*)>\{title\}<\/h4>/g;
    if (h4Regex4.test(updated)) {
      // It's inside an FAQ, usually FAQs use H3
      updated = updated.replace(h4Regex4, '<h3$1>{title}</h3>');
      report.h4++;
    }
  }

  // 4. Fix floating H3 in page.tsx
  if (file.endsWith("app\\page.tsx") || file.endsWith("app/page.tsx")) {
    const h3Regex = /<h3([^>]*)>Supported on all your favorite devices<\/h3>/g;
    if (h3Regex.test(updated)) {
      updated = updated.replace(h3Regex, '<p$1>Supported on all your favorite devices</p>');
      report.h3++;
    }
  }

  // 5. Ensure DeviceSupport.tsx has H3s - Wait, my previous audit showed it already has H3s for devices. That's fine.

  if (original !== updated) {
    fs.writeFileSync(file, updated, "utf8");
    modifiedCount++;
    console.log("Modified:", file);
  }
});

console.log(`\nModified ${modifiedCount} files for SEO fixes.`);
console.log(`H1 fixed: ${report.h1}`);
console.log(`H3 fixed: ${report.h3}`);
console.log(`H4 fixed: ${report.h4}`);
console.log(`Colors replaced: ${report.colors}`);
