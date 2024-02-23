import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
  images: {
    domains: [
      "giphy.com",
      "media0.giphy.com",
      "media1.giphy.com",
      "media2.giphy.com",
      "media3.giphy.com",
      "media4.giphy.com",
    ],
  },
};

export default withPlaiceholder(nextConfig);
