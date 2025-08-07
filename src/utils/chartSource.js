export const chartSource = isCloudflarePages()
	? process.env.CHARTS_SOURCE_CF
	: isVercel()
	? process.env.CHARTS_SOURCE_VERCEL
	: isEdgeOne()
	? process.env.CHARTS_SOURCE_EO
	: process.env.CHARTS_SOURCE

function isCloudflarePages() {
	return window.location.hostname.includes('cf');
}
function isVercel() {
	return window.location.hostname.includes('vercel');
}
function isEdgeOne() {
	return window.location.hostname.includes('eo');
}