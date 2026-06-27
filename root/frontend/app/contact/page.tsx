async function wait() {
  return new Promise((r) => setTimeout(r, 5000));
}

export default async function Page() {
  await wait();

  return <h1 className="work">Videos Loaded</h1>;
}