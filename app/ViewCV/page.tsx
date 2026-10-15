 'use client'

import { useEffect, useState } from 'react'
import { client } from '../../sanity/lib/client'
import GET_DOWNLOAD_CV_BANNER from '../../sanity/queries/getdownloadCvBanner'
import DownloadCvBanner from '../../components/DownloadCvBanner'
import type { DownloadCvBannerProps } from '../../types/type'

export default function ViewCVPage() {
	const [bannerData, setBannerData] = useState<DownloadCvBannerProps | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchBanner = async () => {
			try {
				const result = await client.fetch<DownloadCvBannerProps | null>(GET_DOWNLOAD_CV_BANNER)
				setBannerData(result)
			} catch (fetchError) {
				console.error('Error fetching Download CV page data:', fetchError)
				setError('Failed to load CV content')
			} finally {
				setLoading(false)
			}
		}

		fetchBanner()
	}, [])

	if (loading) {
		return <div className="flex min-h-screen items-center justify-center text-lg text-gray-600">Loading...</div>
	}

	if (error || !bannerData) {
		return <div className="flex min-h-screen items-center justify-center text-lg text-red-600">{error || 'Failed to load content'}</div>
	}

	return <DownloadCvBanner {...bannerData} />
}
