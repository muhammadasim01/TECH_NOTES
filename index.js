async function sleep(time) {
  return new Promise((resolve) => setTimeout(() => resolve(time), time));
}
async function a() {
  console.log(1);
  await sleep(1000);
  console.log(2);
}
async function b() {
  console.log(3);
  await sleep(1000);
  console.log(4);
}
a();
b();
