#!/bin/bash

# Download and install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
source ~/.bashrc


# Check if nvm is installed successfully
if command -v nvm &> /dev/null; then
    # Install Node.js version 16.14 using nvm
    nvm install 16.14

    # Use Node.js version 16.14
    nvm use 16.14

    # Install dependencies using npm
    npm install
else
    echo "Error: nvm is not installed or not properly configured."
    exit 1
fi
