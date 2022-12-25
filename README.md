# Remove Twitter View Count

Browser extension to remove the view count from tweets

**Compatible with**:

- Chrome (and Chromium-based browsers, Store release pending)
  - Edge
  - Brave
- Firefox (Store release pending)

- Alternatively, you can use the [Userscript](remove-twitter-view-count.user.js) in [Tampermonkey](https://www.tampermonkey.net/)

**Not tested**:

- Opera
- Safari


## Installation

### Chrome

1. Download the latest release
2. Go to `chrome://extensions/`
3. Enable `Developer mode`
4. Click `Load unpacked`
5. Select the folder where you downloaded the extension


### Firefox

1. Download the latest release
2. Go to `about:debugging#/runtime/this-firefox`
3. Click `Load Temporary Add-on`
4. Select the file you downloaded


## Build from source

1. Clone the repository
2. Build the extension
   - `npm run build:chrome` for Chrome
   - `npm run build:firefox` for Firefox
3. Load the extension from the `dist` folder
   - See the installation instructions for your browser