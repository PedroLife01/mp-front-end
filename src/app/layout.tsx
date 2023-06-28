'use client'
import axios from 'axios'
import { Navbar } from '@/components'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeSwitcher } from '@/components'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient()
axios.defaults.baseURL = 'http://localhost:3000/api'

export const metadata = {
	title: 'RE:Match',
	description: 'Descubra e compartilhe seus interesses o mundo!'
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-BR" data-theme="pastel">
			<QueryClientProvider client={queryClient}>
				<body className={inter.className}>
					<Navbar />
					{children}
					<ThemeSwitcher />
				</body>
			</QueryClientProvider>
		</html>
	)
}
