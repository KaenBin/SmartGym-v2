import serial
import time
import sys
import random
from Adafruit_IO import MQTTClient
import serial.tools.list_ports
AIO_FEED_ID = ["sensor-temp", "sensor-moist", "sensor-movement","turnOnLight","setup-fan"]
AIO_USERNAME = "DangLe1311"
AIO_KEY = "aio_VImQ751FpRTqqzJitG4ckv9qe48B"


def  connected(client):
    print("Ket noi thanh cong...")
    for i in range (0, len(AIO_FEED_ID)):
        client.subscribe(AIO_FEED_ID[i])

def  subscribe(client , userdata , mid , granted_qos):
    print("Subcribe thanh cong...")

def  disconnected(client):
    print("Ngat ket noi...")
    sys.exit (1)

def  message(client , feed_id , payload):
    print("Nhan du lieu: " + payload)
    ser.write((str(payload)).encode())

client = MQTTClient(AIO_USERNAME , AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()

def getPort():
    ports = serial.tools.list_ports.comports()
    N = len(ports)
    commPort = "None"
    for i in range(0, N):
        port = ports[i]
        strPort = str(port)
        if "USB-SERIAL" in strPort:
            splitPort = strPort.split(" ")
            commPort = (splitPort[0])
    return commPort

ser = serial.Serial( port=getPort(), baudrate=115200)

mess = ""
def processData(data):
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    print(splitData)
    if splitData[1] == "TEMP":
        client.publish("sensor-temp", splitData[2])
    if splitData[1]=="MOIST":
        client.publish("sensor-moist", splitData[2])
    if splitData[1]=="MOVEMENT":
        client.publish("sensor-movement", splitData[2])
mess = ""
def readSerial():
    bytesToRead = ser.inWaiting()
    if (bytesToRead > 0):
        global mess
        mess = mess + ser.read(bytesToRead).decode("UTF-8")
        while ("#" in mess) and ("!" in mess):
            start = mess.find("!")
            end = mess.find("#")
            processData(mess[start:end + 1])
            if (end == len(mess)):
                mess = ""
            else:
                mess = mess[end+1:]
while True:
    readSerial()
    time.sleep(1)