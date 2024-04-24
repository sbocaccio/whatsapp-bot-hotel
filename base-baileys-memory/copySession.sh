#!/bin/bash

# Define source and destination directories
source_dir="saved_session"
destination_dir="bot_sessions"


if [ ! -d "$destination_dir" ]; then
    # Create the folder if it doesn't exist
    mkdir -p "$destination_dir"
fi


# Copy files from source to destination
cp -r "$source_dir"/* "$destination_dir"/

echo "Files copied from '$source_dir' to '$destination_dir'."
