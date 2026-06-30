import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Kotisivut Yritykselle | Leo Digital Suomi'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d0d0d',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(240,240,240,0.3)' }} />
          <span style={{ color: '#a0a0a0', fontSize: '18px' }}>
            Nettisivut yritykselle · leodigital.fi
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              color: '#f0f0f0',
              fontSize: '88px',
              fontWeight: 700,
              lineHeight: '0.92',
              letterSpacing: '-2px',
            }}
          >
            <div>Enemmän kuin</div>
            <div>pelkkä nettisivu</div>
          </div>
          <div style={{ color: '#a0a0a0', fontSize: '26px', maxWidth: '760px', lineHeight: '1.5' }}>
            Räätälöidyt kotisivut alusta alkaen – nopea, mobiiliystävällinen ja hakukoneoptimointiin valmis.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#f0f0f0', fontSize: '32px', fontWeight: 700 }}>Leo Digital Suomi</span>
          <span
            style={{
              color: '#0d0d0d',
              background: '#f0f0f0',
              fontSize: '22px',
              fontWeight: 600,
              padding: '12px 28px',
              borderRadius: '100px',
            }}
          >
            alkaen 499 €
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
