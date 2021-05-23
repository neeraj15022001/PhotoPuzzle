# BoilerPlate

## Features

1. PWA Support
2. SEO Optimized
3. Ready to Use HTML,CSS, JS Boilerplate

## How To Use

1. To change website logo navigate to root of project and replace `logo.png` with your file and rename it to **logo.png**.
   (Option 2 Optional Step if package not installed)
2. Install npm package globally using `npm i -g pwa-asset-generator`. This will install pwa-asset-generator globally in your system.
3. Delete icons/ folder and run `pwa-asset-generator logo.png icons/` in terminal.
4. Change data in meta tags in index.html accordingly

```
 <meta name="title" content="<WEBSITE-NAME>" />
    <meta
      name="description"
      content="<WEBSITE-DESCRIPTION>"
    />
    <meta name="keywords" content="<WEBSITE TAGS SEPERATED BY COMMAS" />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="author" content="<YOUR-NAME>" />
```

5. Change

```
"short_name": "<WEBSITE NAME>",
  "name": "<WEBSITE NAME>",
  "description": "<WEBSITE DESCRIPTION>",
```

in manifest.json to your website name in shortname and name. 6. Change

```
"background_color": "#ffffff",
  "theme_color": "#000000",
```

these colors in manifest.json to change the top bar color of pwa app change `theme_color` and for background default color change `background_color.`. 7. Change

```
"display": "standalone",
```

to **fullscreen** for fullscreen mode in pwa app.
