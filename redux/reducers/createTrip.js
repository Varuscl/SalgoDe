import { actions as createTripActions } from '../actions/createtrip'

export default function spotsReducer(state = {}, action) {
  switch (action.type) {
    case createTripActions.SET_START_STOP:
      return { ...state, startStop: action.payload }
    case createTripActions.SET_END_STOP:
      return { ...state, endStop: action.payload }
    case createTripActions.CLEAR_START_STOP:
      return { ...state, startStop: '' }
    case createTripActions.CLEAR_END_STOP:
      return { ...state, endStop: '' }
    case createTripActions.SET_START_TIME:
      return { ...state, startTime: action.payload }
    case createTripActions.CLEAR_CREATE_TRIP_INFO:
      return {
        startStop: '',
        endStop: '',
        startTime: '',
      }
    default:
      return state
  }
}
