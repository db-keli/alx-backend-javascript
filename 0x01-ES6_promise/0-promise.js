export default function getResponseFromAPI() {
  const weAreFine = true;
  return new Promise((resolve, reject) => {
    if (weAreFine === true) {
      resolve();
    } else {
      reject();
    }
  });
}
