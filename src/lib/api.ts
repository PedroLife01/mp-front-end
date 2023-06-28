const baseUrl = process.env.NEXT_PUBLIC_API_URL
const apiEndpoints = {
	BASE_URL: `${baseUrl}`,
	GET_ALL_PHOTOS: `${baseUrl}/photos`,
	GET_USER: `${baseUrl}/user`,
	MUTATE_PREFERENCES: `${baseUrl}/preferences`
} as const

export { apiEndpoints }
