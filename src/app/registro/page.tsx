import FormRegistro from "@/components/pages/Registro/FormRegistro"
import Image from 'next/image'

const RegistroPage = () => {
	return (
		<div className="flex h-screen w-full justify-between bg-base-100">
			<div className="m-auto hidden md:inline">
				<Image src="/Emilia-Registro.webp" width={450} height={570} alt="Subaru Login" />
			</div>
			<div className="m-auto">
				<Image src="/Rematch-logo.webp" width={350} height={250} alt="Subaru Login" />
				<FormRegistro />
			</div>
		</div>
	)
}

export default RegistroPage
