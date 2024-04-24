#!/bin/bash

# Define source and destination directories
source_dir="saved_session"
destination_dir="bot_sessions"

# Copy files from source to destination
cp -r "$source_dir"/* "$destination_dir"/

echo "Files copied from '$source_dir' to '$destination_dir'."
