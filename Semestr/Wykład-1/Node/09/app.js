//Stwórzmy aplikację której zadaniem będzie operacja na tablicy zawierającej użytkowników

//tablica niech będzie zdefiniowana na sztywno w kodzie, np:
//    let users = [
///        {
//            name: "Jan",
//            username: "Nowak",
//            email: "jannowak@gmail.com",
//            id: 1
//        }
//    ];
//stwórzmy ścieżkę /add do dodawania użytkownika, niech przyjmuje ona parametry name, username, email np ?name=Jan&username=janko&email=jan@nowak.abc, dodanie użytkownika powinno zadziałać tyko wtedy gdy zostało wysłane żądanie typu POST, jako rezultat należy zwrócić identyfikator dodanego użytkownika (sposób przydzielania identyfikatorów dowolny)
//dodajmy ścieżkę /show do wyświetlania wszystkich użytkowników (gdy żądanie będzie typu GET)
//rozbudujmy ścieżkę /show tak by wyświetlała jedynie wybranego użytkownika, jeżeli zostanie podany odpowiedni id (/show?id=1) oraz żądanie będzie typu GET, gdy nie ma użytkownika o danym id zwracamy odpowiedni kod statusu
//rozszerzmy aplikację o kasowanie użytkownika poprzez ścieżkę /delete?id=1, gdy nie ma użytkownika o danym id zwracamy odpowiedni kod statusu
