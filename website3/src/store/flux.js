const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Luis'
        },
        actions: {
            saludo: () => {
                const { name } = getStore();
                console.log(`Hola ${name}`);
            }
        }
    }
}

export default getState;