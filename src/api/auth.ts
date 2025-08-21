import api from './axios';
import { LoginRequest, LoginResponse } from '@/types/auth';

/**
 * Fuehrt den Login durch und gibt Tokens zurueck.
 *
 * @param credentials - Benutzername und Passwort
 * @returns JWT-Tokens und Ablaufdaten
 */
export async function loginV1(credentials: LoginRequest): Promise<LoginResponse>{
	const response = await api.post<LoginResponse>('/auth/login', credentials);
	return response.data;
}