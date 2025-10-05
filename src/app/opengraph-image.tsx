import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Liceth Ovalles - Frontend Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #fce7f3 0%, #fdf2f8 50%, #fef7ff 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ec4899, #f472b6)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
          }}
        >
          Liceth Ovalles
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#831843',
            marginBottom: 40,
          }}
        >
          Senior Frontend Developer
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#9f1239',
            display: 'flex',
            gap: 20,
          }}
        >
          <span>React</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Next.js</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
