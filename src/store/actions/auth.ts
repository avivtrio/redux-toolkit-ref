import { authAction } from "../reducers/auth";

export const userLogin = (user: {}) => {
    return async (dispatch: any) => {
        setTimeout(() => {
            dispatch(authAction.login())

        }, 5000);


        const logUser = () => {
            console.log('user:', user);
        }

        logUser();
    }
}