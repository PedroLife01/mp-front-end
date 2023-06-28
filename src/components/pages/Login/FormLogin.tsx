'use client'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useMutation } from 'react-query'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

type fieldstype = {
	email: string
	password: string
}

const FormLogin = () => {
	const router = useRouter()
	const { mutate, isError, isLoading, isSuccess } = useMutation({
		mutationFn: (fields: fieldstype) => {
			return axios.post('/auth/login', fields)
		},
		onSuccess: () => {
			router.push('/')
		}
	})
	return (
		<div className="m-auto flex items-center justify-center">
			<Formik
				initialValues={{
					email: '',
					password: ''
				}}
				validationSchema={Yup.object().shape({
					email: Yup.string().email('Email é invalido').required('Email é necessário'),
					password: Yup.string()
						.min(6, 'Sua senha precisa ter no minimo 6 caracteres')
						.required('É necessário uma senha')
				})}
				onSubmit={fields => {
					mutate(fields)
					//alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
				}}
				component={({ errors, touched }) => (
					<Form className="h-full w-full text-base-content">
						<div className="p-2 text-sm">
							<p className="bold text-xl">Entrar no App</p>
							<br />
							<span>ou </span>
							<a className="text-[#4F75FF] underline" href="/registro">
								criar uma conta
							</a>
						</div>
						{isError && (
							<div>
								<p className="ml-2 text-error">E-mail ou senha incorretos.</p>
							</div>
						)}
						<div className="p-2">
							<Field
								disabled={(isLoading || isSuccess)}
								placeholder="Email"
								name="email"
								type="text"
								className={
									clsx('placeholder-black-600 form-control w-full rounded-lg border-2 input-primary bg-transparent p-2',
									(errors.email && touched.email ? 'is-invalid' : ''),
									(isLoading || isSuccess) && "input-disabled")
								}
							/>
							<ErrorMessage name="email" component="div" className="invalid-feedback text-sm text-error" />
						</div>
						<div className="p-2">
							<Field
								disabled={(isLoading || isSuccess)}
								placeholder="Senha"
								name="password"
								type="password"
								className={
									clsx('placeholder-black-600 form-control w-full rounded-lg border-2 input-primary bg-transparent p-2',
									(errors.password && touched.password ? 'is-invalid' : ''),
									(isLoading || isSuccess) && "input-disabled")
								}
							/>
							<ErrorMessage name="password" component="div" className="invalid-feedback text-sm text-error" />
						</div>
						<div className="p-2">
							<button type="submit" disabled={(isLoading || isSuccess)} className="btn-primary btn mr-2 w-full text-primary-content">
								{(isLoading || isSuccess) ? (
									<span className="loading loading-spinner loading-md" />
								) :"Entrar"}
							</button>
						</div>
					</Form>
				)}
			/>
		</div>
	)
}
export default FormLogin
