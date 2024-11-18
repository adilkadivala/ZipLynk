export const getBaseDomain = (redirectUrl) => {
  try {
    const url = new URL(redirectUrl);
    return url.origin;
  } catch (error) {
    console.error("Invalid URL:", redirectUrl);
    return redirectUrl;
  }
};

export const getFaviconUrl = (redirectUrl) => {
  try {
    const url = new URL(redirectUrl);
    return `${url.origin}/favicon.ico`;
  } catch (error) {
    console.error("Invalid URL:", redirectUrl);
    return "";
  }
};
