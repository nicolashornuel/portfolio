export default class Fetch {
    constructor(url) {
        this.url = url;
      }

      getData = () => {
        return fetch(this.url)
        .then( response => {
          if (response.status !== 200) {
            throw new Error("Le serveur n'a pas répondu correctement");
          } else return response.text();
        })

      }

}