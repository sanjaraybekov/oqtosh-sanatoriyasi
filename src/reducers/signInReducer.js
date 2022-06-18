import { CHECK_USER_PASSWORD, CHECK_USER_PHONE, SIGN_OUT_ACTION } from "../constants/constants";

export function SignInReducer(
	state = {
		user: {
			variation_code: 1111,
		},
	},
	action
) {
	switch (action.type) {
		case CHECK_USER_PASSWORD:
			state = {
				variation_code: state.user.variation_code,
				user: action.payload,
			};
			break;
		case SIGN_OUT_ACTION:
			state = {
				variation_code: 1111,
				user: action.payload,
			};
			break;
		case CHECK_USER_PHONE:
			state = {
				...state,
				user: {
					...state.user,
					phone: action.payload,
				},
			};
			break;
		default:
			state = { ...state };
			break;
	}
	return state;
}
