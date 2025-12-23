import psutil
#¿Cuánto vale 1 gb a un byte?
giga = 1024 ** 3 #bytes

#cpu
def cpu():
    cpu = psutil.cpu_percent(interval=1) #Muestra el promedio global de el uso de CPU (Como lo que se muestra en el admin)
    cpu1 = psutil.cpu_percent( percpu=True) #Lo mismo pero por núcleo
    return{
        "uso_global": cpu,
        "uso_nucleos": cpu1
    }

#Ram
def ram():
    ram = psutil.virtual_memory() #Para las funciones
    return {
        "total": ram.total / giga,
        "usada": ram.used / giga,
        "libre": ram.available / giga,
        "porcentaje": ram.percent
    }
#Disco
def disco():
    disco  = psutil.disk_usage("/") #Para las funcioness
    return {
        "total": disco.total / giga,
        "usado": disco.used / giga,
        "libre": disco.free / giga,
        "porcentaje": disco.percent
    }
datos_cpu = cpu()
datos_ram = ram()
datos_disco = disco()

for clave, valor in datos_cpu.items():
    print(clave, "=> ", valor)
for clave, valor in datos_disco.items():
    print(clave, "=> ", valor)
for clave, valor in datos_ram.items():
    print(clave, "=> ", valor)

