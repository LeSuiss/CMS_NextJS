interface SectionBackgroundProps {
  url: string | ImageDataSettings;
  children?: any;
  style?: any;
}

export const SectionBackground = ({
  url,
  children,
  style,
}: SectionBackgroundProps) => {
  return (
    <section
      style={{
        background: 'center no-repeat fixed',
        backgroundImage: `url(${url})`,
        backgroundSize: '100vw',
        height: '240px',
        minWidth: '100vw',
        overFlow: 'hidden',
        ...style,
      }}
    >
      {children}
    </section>
  );
};
