import Image from "next/image";

export const AppImage = ({
  src,

  alt,

  widthImg,

  heightImg,

  priority,

  objectPos,

  className,
}) => {
  return (
    <span className={`grid w-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={widthImg}
        height={heightImg}
        layout="responsive"
        priority={priority}
        objectFit="cover"
        objectPosition={objectPos}
      />
    </span>
  );
};
