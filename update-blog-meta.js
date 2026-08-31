const fs = require('fs');

const file = 'src/data/blog.ts';
let content = fs.readFileSync(file, 'utf8');

const replacements = [
  {
    oldTitle: 'title: "Best IPTV Players for Android TV in 2026"',
    newTitle: 'title: "Best IPTV Players for Android TV in 2026 | BexyTV"',
    oldDesc: 'description: "Looking for the best IPTV players for Android TV in 2026? Compare TiviMate, IPTV Smarters Pro, Sparkle TV, OTT Navigator and Kodi."',
    newDesc: 'description: "Discover the 5 best IPTV players for Android TV in 2026. We compare TiviMate, IPTV Smarters Pro, and more to help you stream 4K IPTV flawlessly."'
  },
  {
    oldTitle: 'title: "IPTV Login Failed: Username, Password and Server URL Fixes"',
    newTitle: 'title: "IPTV Login Failed? How to Fix Username & URL Errors"',
    oldDesc: 'description: "Getting an IPTV login failed error? Learn how to check your username, password, server URL, account status, app settings and connection."',
    newDesc: 'description: "Getting an IPTV login failed error? Learn how to easily troubleshoot your username, password, server URL, and app settings to get back to streaming fast."'
  },
  {
    oldTitle: 'title: "What Internet Speed Do You Need for IPTV in 2026?"',
    newTitle: 'title: "What Internet Speed Do You Need for IPTV in 2026?"',
    oldDesc: 'description: "Wondering what internet speed you need for IPTV in 2026? Learn the requirements for 4K, HD, and SD streaming, and how to optimize your connection."',
    newDesc: 'description: "How much internet speed is required for 4K IPTV streaming? Learn the recommended Mbps requirements and how to optimize your network for zero buffering."'
  },
  {
    oldTitle: 'title: "IPTV Buffering Every Few Minutes: Causes and Fixes"',
    newTitle: 'title: "IPTV Buffering Every Few Minutes? Top Causes & Fixes"',
    oldDesc: 'description: "Is your IPTV buffering every few minutes? Learn the most common causes and practical fixes, from Wi-Fi problems and DNS settings to device performance and stream issues."',
    newDesc: 'description: "Is your IPTV buffering constantly? Discover the most common causes and apply our expert fixes for Wi-Fi, DNS, and device settings to stop freezing."'
  },
  {
    oldTitle: 'title: "Best IPTV Players for Firestick in 2026: Top Apps Compared"',
    newTitle: 'title: "Best IPTV Players for Firestick in 2026 (Top Apps Compared)"',
    oldDesc: 'description: "Looking for the best IPTV player for Firestick in 2026? Compare TiviMate, IPTV Smarters, VLC and Kodi based on features, ease of use, EPG support and performance."',
    newDesc: 'description: "Find the best IPTV player for your Amazon Firestick. Compare features, EPG support, and performance for TiviMate, IPTV Smarters, VLC, and Kodi."'
  },
  {
    oldTitle: 'title: "IPTV Channels Not Loading: 10 Things to Check"',
    newTitle: 'title: "IPTV Channels Not Loading? 10 Things to Check & Fix"',
    oldDesc: 'description: "IPTV channels not loading? Learn the 10 most common causes and how to check your internet connection, playlist, credentials, EPG, IPTV player, and device."',
    newDesc: 'description: "IPTV channels not loading or showing a blank screen? Follow our 10-step troubleshooting guide to fix internet, playlist, and EPG problems instantly."'
  },
  {
    oldTitle: 'title: "How to Set Up IPTV on Firestick in 2026: Complete Guide"',
    newTitle: 'title: "How to Set Up IPTV on Firestick in 2026 (Step-by-Step)"',
    oldDesc: 'description: "Learn how to set up IPTV on Firestick in 2026, configure your IPTV player, add your playlist, fix common issues, and optimize streaming performance."',
    newDesc: 'description: "Learn how to easily set up IPTV on your Firestick in 2026. Follow our complete guide to configure your IPTV player, add your playlist, and start streaming."'
  }
];

replacements.forEach(r => {
  content = content.replace(r.oldTitle, r.newTitle);
  content = content.replace(r.oldDesc, r.newDesc);
});

fs.writeFileSync(file, content, 'utf8');
console.log('Updated blog metadata');
