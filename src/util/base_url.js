function base_url_fn() {
  let base_url = "http://0.0.0.0:3000";
  if (process.env.NODE_ENV === "production") {
    base_url = "http://59.110.231.214:3000";
  }
  return base_url;
}
export default base_url_fn();
