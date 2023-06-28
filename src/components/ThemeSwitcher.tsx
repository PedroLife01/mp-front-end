import { Moon, Sun } from '@phosphor-icons/react'
import { ChangeEvent } from 'react'

export const ThemeSwitcher = () => {
	const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			document.querySelector('html')?.setAttribute('data-theme', 'fantasy')
		} else {
			document.querySelector('html')?.setAttribute('data-theme', 'dark')
		}
	}

	return (
		<label data-cy="theme-switcher" className="swap btn-ghost swap-rotate btn-circle btn fixed bottom-8 right-8 text-base-content">
			<input type="checkbox" onChange={handleThemeChange} />
			<Sun data-cy="light-theme" className="swap-off fill-current" size={32} />
			<Moon data-cy="dark-theme" className="swap-on fill-current" size={32} />
		</label>
	)
}
