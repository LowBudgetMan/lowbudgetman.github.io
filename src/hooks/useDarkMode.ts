"use client";

import { useSyncExternalStore } from "react";

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

function subscribe(onChange: () => void) {
    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY);
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
}

function getSnapshot() {
    return window.matchMedia(COLOR_SCHEME_QUERY).matches;
}

// The site is statically exported, so there is no dark mode signal at build
// time; match the previous hook's initial value and let hydration correct it.
function getServerSnapshot() {
    return false;
}

export function useDarkMode() {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
