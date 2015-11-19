# paper-de
A desktop environment implementation of google's material design

This project is in a VERY experimental state and we are researching the best way to make this happen.  Feel free to make suggestions in our Issues tracker.

This branch is for research and development of our wayland backend. We hope to be able to impliment a wayland compositor and wayland client using nodejs.

The client will utilize an HTML rendering engine for actual rendering of content, so that local applications can be written in HTML and Javascript.

The actual desktop application will be a special wayland client that the compositor then utilizes for desktop management. It should be a child implimentation of the client above.
