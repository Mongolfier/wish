#!/bin/sh
set -e

# Start nginx in the background
nginx

# Start Next.js application
exec npm start
