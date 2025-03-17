import { AvatarImageProps } from "@/types/team"

const AvatarImage: React.FC<AvatarImageProps> = ({ className, src, alt = "", ...props }) => {
    return (
      <img
        className={`aspect-square h-full w-full ${className || ""}`}
        src={src || "/placeholder.svg"}
        alt={alt}
        {...props}
      />
    )
}

export default AvatarImage;
  