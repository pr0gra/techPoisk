import ky from "ky";

// https://github.com/sindresorhus/ky#kyextenddefaultoptions
const api = ky.extend({
  prefixUrl: process.env.PREFIX_URL,
});

export default api;
