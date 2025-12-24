const protocol = location.protocol === "https:" ? "wss" : "ws";
const ws = new WebSocket(`${protocol}://${location.host}/ws/status`);

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);

  // CPU
  document.getElementById("cpu").innerText =
    `CPU: ${data.cpu.uso_global}% | Núcleos: ${data.cpu.uso_nucleos.join(" | ")}%`;

  // RAM
  document.getElementById("ram").innerText =
    `RAM: ${data.ram.usada} / ${data.ram.total} GB (${data.ram.porcentaje}%)`;

  // Disco
  document.getElementById("disco").innerText =
    `Disco: ${data.disco.usado} / ${data.disco.total} GB (${data.disco.porcentaje}%)`;
};

ws.onclose = () => console.log("WebSocket cerrado");
ws.onerror = (e) => console.error("Error WS", e);
