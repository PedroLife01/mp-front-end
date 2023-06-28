import { getUser } from '@/lib/auth'
import { ReactNode } from 'react'

export default function FeedLayout({ userFeed, onBoard }: { userFeed: ReactNode; onBoard: ReactNode }) {
	const hasPreferences = getUser()

	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-base-100 p-24">
			{hasPreferences ? userFeed : onBoard}
		</main>
	)
}
