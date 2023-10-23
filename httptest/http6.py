import requests
url="https://polideportes.poligran.edu.co/wp-content/uploads/2018/02/MILLOS.jpg"
response=requests.get(url,stream=True)


with open('httptest/download.jpg','wb') as file:
    for pedazo in response.iter_content():    
        file.write(pedazo)