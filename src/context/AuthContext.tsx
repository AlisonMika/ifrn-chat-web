import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useRouter } from 'next/router';

export interface AuthUser {
	name: string;
}

interface AuthContextState {
	user: AuthUser | null;
	isAuthenticated: boolean;
	isLoading: boolean;
}

interface AuthContextType extends AuthContextState {
	login: (data: AuthUser) => void;
	logout: () => void;
}

const initialState: AuthContextState = {
	user: null,
	isAuthenticated: false,
	isLoading: true,
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: PropsWithChildren) => {
	const [state, setState] = useState(initialState)
	const router = useRouter();

	useEffect(() => {
		const checkAuthentication = localStorage.getItem('user')

		if (checkAuthentication) {
			setState({
				user: JSON.parse(checkAuthentication),
				isAuthenticated: true,
				isLoading: false
			})
		} else {
			setState({
				user: null,
				isAuthenticated: false,
				isLoading: false
			})
		}
	}, [])

	const login = (data: AuthUser) => {
		setState({
			user: data,
			isAuthenticated: true,
			isLoading: false
		})
		localStorage.setItem('user', JSON.stringify(data))
		router.push('/')
	}

	const logout = () => {
		setState({
			user: null,
			isAuthenticated: false,
			isLoading: false
		})
		localStorage.removeItem('user')
		router.push('/login')
	}
	
	return (
		<AuthContext.Provider value={{ ...state, login, logout }}>
			{props.children}
		</AuthContext.Provider>
	)
}