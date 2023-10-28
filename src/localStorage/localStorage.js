export function setTheme(value) {
  return localStorage.setItem("isDark", value);
}

export function getTheme() {
  return localStorage.getItem("isDark");
}
