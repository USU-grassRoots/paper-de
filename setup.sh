#!/bin/bash

echo "Updating repos and base packages..."
sudo pacman -Syu --noconfirm > /dev/null

echo "Installing node.js and npm..."
sudo pacman -S --noconfirm nodejs npm > /dev/null

echo "Installing nvm..."
runuser -l vagrant -c 'curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash' > /dev/null
