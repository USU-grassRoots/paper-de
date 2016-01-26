command -v openbox >/dev/null 2>&1 || { echo "openbox is not installed. You may want that." >&2; exit 1; }
echo "openbox available, adding to autostart"
echo "$PWD/node_modules/electron-prebuilt/dist/electron $PWD/main.js &" > ~/.config/openbox/autostart
echo "Success! logout and log back into openbox session to try it out."
