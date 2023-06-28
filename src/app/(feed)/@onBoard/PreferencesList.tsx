'use client'
import { apiEndpoints } from '@/lib/api'
import { Check } from '@phosphor-icons/react'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import useSWR from 'swr'

const getPreferences = async (url: string) => {
	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json().then(data => data.slice(0, 32))
}

// const updatePreferences = async (url: string, { arg }: { arg: { preferenceId: string } }) => {
// 	const response = await fetch(url, {
// 		method: 'POST',
// 		body: JSON.stringify(arg)
// 	})

// 	if (!response.ok) {
// 		throw new Error(response.statusText)
// 	}

// 	return response.json()
// }

export const PreferencesList = () => {
	const { data: preferences, isLoading } = useSWR(apiEndpoints.GET_ALL_PHOTOS, getPreferences)
	// const { trigger } = useSWRMutation(apiEndpoints.MUTATE_PREFERENCES, updatePreferences)
	const [selectedPreferences, setSelectedPreferences] = useState<string[]>([])

	const handlePreferenceSelection = async (preferenceId: string) => {
		 // await trigger({ preferenceId }).then(() => {}) <<< falta implementar mock do backend

		const newSelectionList = selectedPreferences.includes(preferenceId)
			? selectedPreferences.filter(id => id !== preferenceId)
			: [...selectedPreferences, preferenceId]

		setSelectedPreferences(newSelectionList)
	}

	return (
		<div
			data-cy="preferences-list"
			className="flex w-full flex-wrap items-center justify-center gap-8 bg-transparent p-6"
		>
			{isLoading ? (
				<span className="loading-spinner mx-auto h-6 w-6" />
			) : (
				preferences.map((preference: any) => (
					<button
						onClick={e => {
							e.preventDefault()
							handlePreferenceSelection(preference.id)
						}}
						className="indicator aspect-square flex-1 basis-1/3 md:basis-1/5"
						key={preference.id}
					>
						<span
							data-cy="preference-card-checked"
							className={clsx(
								'badge badge-secondary badge-sm indicator-item z-20',
								selectedPreferences.includes(preference.id) ? 'visible' : 'invisible'
							)}
						>
							<Check size={16} />
						</span>
						<div
							data-cy="preference-card"
							className={clsx(
								'card image-full card-compact h-full w-full shadow-xl',
								selectedPreferences.includes(preference.id) && 'border border-primary'
							)}
						>
							<figure className="relative">
								<div className="bg-black-900 absolute left-0 top-0 h-full w-full opacity-50" />
								<Image fill className="object-cover" src={preference.thumbnailUrl} alt="Shoes" />
							</figure>
							<div className="card-body">
								<h2 className="card-title">{preference.albumId}</h2>
								<p>{preference.id}</p>
							</div>
						</div>
					</button>
				))
			)}
		</div>
	)
}
