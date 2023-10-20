import requests
import json
url="http://httpbin.org/get"
response=requests.get(url)
print(response.content.decode())
print(type(response.content.decode()))
jsonresponse=json.loads(response.content)
print(type(jsonresponse))


for i in jsonresponse:
    print(i)
    for j in jsonresponse[i].items():
        print(j)



