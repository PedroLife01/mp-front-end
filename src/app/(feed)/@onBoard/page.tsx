'use client'
import { useEffect } from 'react'
import { PreferencesList } from './PreferencesList'

export default function OnBoardMenu() {
	useEffect(() => {
		const onBoardingMenu = document.getElementById('onboarding-menu') as HTMLDialogElement
		onBoardingMenu.showModal()
	}, [])

	return (
		<dialog
			onKeyDownCapture={e => {
				e.preventDefault()
			}}
			id="onboarding-menu"
			className="modal"
		>
			<form method="dialog" className="modal-box relative p-0">
				<div className="sticky top-0 z-30 p-6 text-center bg-base-100">
					<h3 className="text-lg font-bold">Boas vindas ao Re:Match!</h3>
					<p className="py-2">Antes de prosseguir, nos mostre um pouco do que você gosta</p>
					<p className="text-sm text-info">Você poderá modifacá-las mais tarde</p>
				</div>
				<PreferencesList />
				<div className="modal-action sticky bottom-0 z-30 bg-base-100 p-6">
					<button className="btn btn-ghost">Pular</button>
					<button className="btn btn-primary">Continuar</button>
				</div>
			</form>
		</dialog>
	)
}
