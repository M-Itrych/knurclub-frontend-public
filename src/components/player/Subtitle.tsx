type SubtitleProps = {
  content?: string
}

const Subtitle = ({ content }: SubtitleProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 'calc(0.5rem + (100vw - 800px) / 100)',
      }}
    >
      <p
        style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'Inter',
          fontSize: 'calc(2rem + (100vw - 800px) / 100)',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
        }}
      >
        {content}
      </p>
    </div>
  )
}
export default Subtitle
