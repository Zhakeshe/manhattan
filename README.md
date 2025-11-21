# manhattan
Build a luxury VIP Kazakh-style site called “MANHATTAN”, with a fully dynamic Admin CMS.
All content must be stored LOCALLY using localStorage (no backend, no database).
Design: premium, rounded, modern, warm beige & gold tones.


---

✨ GENERAL STYLE

Soft-rounded corners

Smooth golden shadows

Gentle Kazakh luxury aesthetic

Premium typography

Mosaic artistic layout (as in the sketch)

Aesthetic slight block rotations

Parallax background

Smooth fade-on-scroll



---

🏛 MAIN LAYOUT

HEADER

Center: large rounded pill badge with 𝗠𝗔𝗡𝗛𝗔𝗧𝗧𝗔𝗡

Right side: small elegant Telegram button (editable link)


CONTENT BLOCKS

Create an editable mosaic grid similar to the sketch:

6–8 blocks

Different sizes

Soft random rotation

Each block supports:

TEXT

IMAGE

BUTTON (with link)

Any combination of the above



Blocks must be fully dynamic:

Add new block

Remove block

Hide block

Edit block

Reorder blocks (drag & drop)

Change color

Change border radius

Change shadow

Change rotation

Enable/disable hover animations



---

🎨 BACKGROUND SYSTEM

Admin panel must allow:

Upload background image (stored in Base64)

Replace background

Blur control (slider)

Opacity/darkness control

Switch:

solid color

gradient

uploaded image




---

🔐 ADMIN PANEL (local only)

Accessible only via /admin.

Login

Simple password field

Password stored in code, not visible in UI


Admin Dashboard

Must include:

1. Background Editor

upload image

adjust blur

adjust brightness

change background type


2. Block Manager

Admin can:

create new block

delete block

hide/show block

reorder blocks

edit block content

upload images

edit button text + link

change text color, size, alignment


3. Global Settings

change site title

change Telegram link

toggle animations

change fonts

upload favicon



---

💾 LOCAL STORAGE SYSTEM (IMPORTANT)

All changes must save locally, without server.

Use this structure:

localStorage.manhattanData = {
  blocks: [...],
  background: {...},
  settings: {...}
}

Every time user edits anything in admin panel:

Save automatically to localStorage

On page load → load all data from localStorage


Image uploads must convert to Base64 so they can be stored locally.


---

🧨 VIP EXTRAS

Add these effects:

3D hover lift

Gold glow softly

Slow shadow animation

Block rotate ±2–4°

Subtle Kazakh ornament in background (low opacity)

Parallax on scroll



---

📱 RESPONSIVE

Mobile-friendly

Grid adapts to single-column on phone

Header centered

Blocks keep rounded look



---

🧩 OUTPUT MUST INCLUDE

1. Full frontend code


2. Full admin panel code


3. LocalStorage save/load system


4. Base64 image support


5. Dynamic block creation


6. Background upload system


7. Secure admin route /admin


8. All animations & premium design




---

🔥 FINAL GOAL

A VIP Manhattan menu-site with a built-in mini CMS running entirely on localStorage, no backend required.
