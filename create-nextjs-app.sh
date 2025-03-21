#!/bin/bash
mkdir -p ali-trafikskola
cd ali-trafikskola
# Use expect syntax to handle interactive prompts
npx create-next-app@latest . --typescript --tailwind --eslint << EOF
Yes
Yes
Yes
No
Yes
EOF