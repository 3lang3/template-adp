import url from './url';

const config = {
  api: {
    prefix: url.API_HOST,
    upload: `${url.API_HOST}/index.php?_url=/attachment/attachment/uploadImage`,
    uploadCert: `${url.API_HOST}/index.php?_url=/attachment/attachment/uploadCert`,
  },
  cdn: url.STATIC_PATH,
  shop: url.CHOST,
};

export default config;
