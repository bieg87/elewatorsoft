# elewatorsoft
  
Zadanie rekrutacyjne
  
## Instrukcja uruchomienia
  
Najpierw należy pobrać pliki z repozytorium poleceniem: git clone https://github.com/bieg87/elewatorsoft.git  
Następnie trzeba wejść do katalogu elewatorsoft_api i uruchomić kontener dockera następującymi poleceniami:  
  
cd elewatorsoft_api  
docker build -t app ./  
docker run -d -p 3000:3000 app  

Api powinno się uruchomić  
  
Kod źródłow aplikacji frontendowej znajduje się w folderze elewatorsoft_front w pliku index.html. Aby uruchomić aplikację wystarczy uruchomić plik index.html w przeglądarce.