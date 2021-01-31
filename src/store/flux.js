const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            input: {
                agenda_slug: "Pabloxxde2171",
                email: "",
                full_name: "",
                phone: "",
                address: "",


            },
            users: []
        },
        actions: {
            handleChange: (e) => {
                const store = getStore(); //llamo a  la store
                const input = store.input;
                input[e.target.name] = e.target.value;
                setStore({
                    input: input //lo agrego guardo todo en el input
                })
            },
            enviarDatos: (e) => {
                e.preventDefault();
                console.log("enviando el form...");

            },
            /* eliminar: () => {

            }, */
            post: () => {
                const store = getStore(); //llamo a  la store
                const input = store.input;
                fetch("https://assets.breatheco.de/apis/fake/contact/", {
                    method: "POST",
                    body: JSON.stringify(input),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => console.log(data))

            },
            get: () => {
                fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Pabloxxde2171")
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            users: data
                        })
                    })
            },
            /* erased: (id) => {
                const store = getStore(); //llamo a  la store
                const users = store.users;

                fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => console.log(data))
                   



            } */


        }
    }
}

export default getState;