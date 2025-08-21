export Type LoginRequest = {
	username: string;
	password: string;
};

export Type LoginResponse = {
	accessToken: string;
	refreshToken: string;
	/**
	 * ISO-Datum als Text
	 */
	accessTokenExpiration: string;
	refreshTokenExpiration: string;
	tokenType: string;
};