# paper-de
A desktop environment implementation of google's material design

Currently it is based on electron, angular-material, and openbox.

It is very much alpha right now, but the taskbar is working and works well in openbox.

Installation:
====
to try the taskbar:

git clone https://github.com/USU-grassRoots/paper-de.git

cd ./paper-de

git checkout electron-prototype

WARNING: This next step may wreck your openbox config, that might matter to you if you already use openbox

npm install

if successful, logout and back into openbox session


to use with openbox:
====

apt-get install openbox

run obconf

in the margins section change the top margin to 64px (to leave space for the top bar)

logout and change sesssion to openbox, log back in
