export function sendOrder(data, reset) {
  fetch("https://server-pi-red.vercel.app/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(data)),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      reset();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
