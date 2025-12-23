# Usamos Python 3.13
FROM python:3.13-slim

# Carpeta de trabajo
WORKDIR /app

# Copiamos archivos
COPY . /app

# Instalamos dependencias
RUN pip install --no-cache-dir fastapi uvicorn psutil

# Exponemos puerto
EXPOSE 8000

# Ejecutamos FastAPI
CMD ["uvicorn", "lol:app", "--host", "0.0.0.0", "--port", "8000"]
