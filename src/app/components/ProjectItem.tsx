import Image from "next/image";

type Props = {
  title: string;
  description: string;
  img_url: string;
  link: string;
};

const ProjectItem = ({ title, description, img_url, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full overflow-hidden rounded border border-neutral-300 md:w-[calc(50%_-_.75rem)]"
    >
      <div className="h-96 w-full">
        <Image
          src={img_url}
          fill={true}
          alt="portfolio project"
          className=" cursor-pointer object-cover md:h-48"
        />
      </div>
      <div className="absolute bottom-0 w-full transform bg-neutral-300/70 p-4 backdrop-blur-sm transition duration-300 lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
      </div>
    </a>
  );
};

export default ProjectItem;
