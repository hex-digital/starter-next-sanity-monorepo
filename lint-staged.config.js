export default {
  '*.*': [
    () => 'echo "Lint staged currently de-activated"'
  ],
  // './apps/**/*.{ts,tsx,vue}': [
    //'eslint --fix',
    // () => 'pnpm all:typecheck', // Have to run typecheck on all files via a function - can't check just staged files
  // ],
  // './packages/**/*.{ts,tsx,vue}': [
    //'eslint --fix',
    // () => 'pnpm all:typecheck', // Have to run typecheck on all files via a function - can't check just staged files
  // ],
  //'./apps/**/*.{js,jsx}': 'eslint --fix',
  //'./packages/**/*.{js,jsx}': 'eslint --fix',
};

