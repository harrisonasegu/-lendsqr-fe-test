/* eslint-disable @typescript-eslint/no-explicit-any */
import { afterEach } from "vitest"
import { cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"

afterEach(() => {
  cleanup()
})

const mockMatchMedia = (query: string): any => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: function(){}, // Deprecated
  removeListener: function(){}, // Deprecated
  addEventListener: function(){},
  removeEventListener: function(){},
  dispatchEvent: function(){},
});

// Assign the mock to window
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: mockMatchMedia,
});

// Mocking window.getComputedStyle
// Mocking window.getComputedStyle
const mockGetComputedStyle = () => ({
  getPropertyValue: () => 'auto',
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window.getComputedStyle = mockGetComputedStyle;

