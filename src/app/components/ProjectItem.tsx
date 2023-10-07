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
      className="group relative overflow-hidden rounded border border-neutral-300"
    >
      <div className="h-96 w-full">
        <Image
          src={img_url}
          objectFit="cover"
          fill={true}
          alt="portfolio project"
          className=" cursor-pointer md:h-48"
        />
      </div>
      <div className="absolute bottom-0 w-full transform bg-neutral-300/70 p-4 backdrop-blur-sm transition duration-300 lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
      </div>
    </a>
  );
};

export default ProjectItem;
