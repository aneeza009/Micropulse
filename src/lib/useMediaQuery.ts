"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Reads a CSS media query as React state.
 *
 * useSyncExternalStore is the right primitive here: the browser owns the value,
 * and the server snapshot is always `false`, so hydration matches and we never
 * have to set state from inside an effect.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}

export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
