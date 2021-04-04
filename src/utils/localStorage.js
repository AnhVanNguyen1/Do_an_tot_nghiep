async function get(key) {
  let data = await localStorage.getItem(key);
  return data;
}

async function set(key, value) {
  return await localStorage.setItem(`${key}`, value);
}

async function remove(key) {
  return await localStorage.removeItem(key);
}

export default {
  get,
  set,
  remove,
};
