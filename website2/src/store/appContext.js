import { createContext, useState } from 'react';
import getState from './flux';

export const AppContext = createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {

        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions
        }))

        return (
            <AppContext.Provider value={state}>
                <PassedComponent {...props} />
            </AppContext.Provider>
        )
    }

    return StoreWrapper;
}

export default injectContext;