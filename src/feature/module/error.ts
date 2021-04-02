export function createInitialState(): Error | null {
  return null;
}

export const GET_ERROR = 'error/get' as const;
export const SET_ERROR = 'error/set' as const;
export const CLEAR_ERROR = 'error/clear' as const;

export function getError() {
  return {
    type: GET_ERROR,
  };
}

export function setError(error: Error) {
  return {
    type: SET_ERROR,
    payload: {
      error,
    },
  };
}

export function clearError() {
  return {
    type: CLEAR_ERROR,
  };
}

type GetAction = ReturnType<typeof getError>;
type SetAction = ReturnType<typeof setError>;
type ClearAction = ReturnType<typeof clearError>;

export type Actions = GetAction | SetAction | ClearAction;

export function reducer(state = createInitialState(), action: Actions) {
  switch (action.type) {
    case GET_ERROR:
      return state;
    case SET_ERROR:
      return action.payload.error;
    case CLEAR_ERROR:
      return null;
    default:
      return state;
  }
}
