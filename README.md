# paper-de
A desktop environment implementation of google's material design

Currently it is based on electron, angular-material, and openbox.

It is very much alpha right now, but the taskbar is working and works well in openbox.

Installation:
====
to try the taskbar:

git clone https://github.com/USU-grassRoots/paper-de/paper-de.git

cd ./paper-de

npm install && npm start

to use with openbox:

apt-get install openbox

add this line to ~/.config/openbox/autostart

~/paper-de/node_modules/electron-prebuilt/dist/electron ~/paper-de/main.js &

run obconf

in the margins section change the top margin to 64px

logout and change sesssion to openbox, log back in



