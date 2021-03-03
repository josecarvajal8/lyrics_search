import { setSongs } from "./actions";
import { SET_SONGS } from "./types";

const reducers: any = {
    [SET_SONGS]: (state: any, payload: any) => setSongs(state, payload),
    ['DEFAULT']: (state: any, payload: any) => state
}
export default function reducer(state: any, action: any) {
    const { type = 'DEFAULT', payload = null } = { ...action };
    return !!type ? reducers[type](state, payload) : reducers.DEFAULT(state);
}