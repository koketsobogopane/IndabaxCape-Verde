function getImageURL(name, section) {
  return new URL(`../assets/${section}/${name}`, import.meta.url).href;
}

export { getImageURL };
