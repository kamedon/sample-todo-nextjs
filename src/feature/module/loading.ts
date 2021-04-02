export function createInitialState(): boolean {
  return false;
}

export const GET_LOADING = 'loading/get' as const;
export const SET_LOADING = 'loading/set' as const;

export function getLoading() {
  return {
    type: GET_LOADING,
  };
}

export function setLoading(loading: boolean) {
  return {
    type: SET_LOADING,
    payload: {
      loading,
    },
  };
}

type GetAction = ReturnType<typeof getLoading>;
type SetAction = ReturnType<typeof setLoading>;

export type Actions = GetAction | SetAction;

export function reducer(state = createInitialState(), action: Actions) {
  switch (action.type) {
    case GET_LOADING:
      return state;
    case SET_LOADING:
      return action.payload.loading;
    default:
      return state;
  }
}
