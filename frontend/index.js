 const ws = new WebSocket("ws://127.0.0.1:8000/ws/cpu");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      document.getElementById("cpu").innerText = 
        `Uso global: ${data.uso_global}% | Núcleos: ${data.uso_nucleos}%`;
    };

        ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      document.getElementById("ram").innerText = 
        `Uso global: ${data.ram_total}% | Núcleos: ${data.ram_used}%`;
    };

    ws.onclose = () => console.log("Conexión cerrada");
    ws.onerror = (e) => console.error("Error WebSocket", e);