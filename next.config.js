module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/examples/landing' : '',
  images: {
	domains: ["drive.google.com"],
	formats: ["images/webp"],
  },
};
