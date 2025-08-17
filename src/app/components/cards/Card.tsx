interface CardProps {
  title: string;
  subtitle: string;
  description: string[];
  icon: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  "data-aos"?: string;
  "data-aos-offset"?: string;
  "data-aos-delay"?: string;
  "data-aos-duration"?: string;
  "data-aos-easing"?: string;
  "data-aos-mirror"?: string;
  "data-aos-once"?: string;
  "data-aos-anchor"?: string;
  "data-aos-anchor-placement"?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  subtitle,
  description,
  className,
  backgroundColor,
  ...aosProps
}) => {
  return (
    <div
      className={`
      ${className || ""} 
       p-6  bg-[var(--background-color-off-white)] 
      flex flex-col items-center text-start 
    `}
      {...aosProps}
    >
      <div className="flex flex-row items-center gap-4 mb-4 w-full">
        <div
          className="icon w-[80px] h-[80px] flex items-center justify-center border-2 border-[#1f3149]"
          style={{ backgroundColor: backgroundColor || "#1f3149" }}
        >
          {icon}
        </div>
        <div className="flex flex-col items-start font-bold leading-[1.5em] text-[var(--text-color-title-blue)] ">
          <span className="text-[22px] font-sans">{title.toUpperCase()}</span>
          <span className="text-[18px]">{subtitle.toUpperCase()}</span>
        </div>
      </div>

      <div className="description text-start w-full">
        {description.map((paragraph, index) => (
          <p key={index} className="mb-4 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
