import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useDarkMode() {
  [dark, setDark] = useLocalStorage('darkmode', false)
  return [dark, setDark]
}