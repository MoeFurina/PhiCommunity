export const chartSource = () => {
	if (isCloudflarePages()) {
		return process.env.CHARTS_SOURCE_CF;
	} else if (isVercel()) {
		return process.env.CHARTS_SOURCE_VERCEL;
	} else if (isEdgeOne()) {
		return process.env.CHARTS_SOURCE_EO;
	} else {
		return process.env.CHARTS_SOURCE;
	}
}

function isCloudflarePages() {
	return window.location.hostname.includes('cf');
}
function isVercel() {
	return window.location.hostname.includes('vercel');
}
function isEdgeOne() {
	return window.location.hostname.includes('eo');
}