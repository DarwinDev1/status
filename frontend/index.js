const ws = new WebSocket(`ws://${location.hostname}:8000/ws/status`);


ws.onmessage = (event) => {
  const data = JSON.parse(event.data);

  // CPU
  document.getElementById("cpu").innerText =
    `CPU: ${data.cpu.uso_global}% | Núcleos: ${data.cpu.uso_nucleos.join(" | ")}%`;

  // RAM
  document.getElementById("ram").innerText =
    `RAM: ${data.ram.usado.toFixed(1)} / ${data.ram.total.toFixed(1)} GB (${data.ram.porcentaje}%)`;

  // Disco
  document.getElementById("disco").innerText =
    `Disco: ${data.disco.usada.toFixed(1)} / ${data.disco.total.toFixed(1)} GB (${data.disco.porcentaje}%)`;
};

ws.onclose = () => console.log("WebSocket cerrado");
ws.onerror = (e) => console.error("Error WS", e);
