import ky from 'ky-universal';

const http = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set('X-API-KEY', <string>process.env.NEXT_PUBLIC_API_KEY);
      },
    ],
  },
});

export default http;
