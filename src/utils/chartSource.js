export const chartSource = isCloudflarePages()
	? 'https://cf.charts.phicm.focalors.ltd'
	: isVercel()
	? 'https://vercel.charts.phicm.focalors.ltd'
	: 'https://charts.phicm.focalors.ltd';

function isCloudflarePages() {
	return window.location.hostname.includes('cf');
}
function isVercel() {
	return window.location.hostname.includes('vercel');
}
