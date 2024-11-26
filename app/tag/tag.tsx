
import Link from "next/link";

// TagItem Component - Rounded and with reduced gap
export const TagItem = ({ tag }: { tag: { id: string; name: string } }) => {
  return (
    <div>
      <Link
        href={`/tag/${tag.name}`}
        className="text-primary font-medium text-lg py-2 px-6 border border-gray-300 rounded-full shadow-sm hover:shadow-md hover:border-primary-500 transition-all duration-200 ease-in-out"
      >
        #{tag.name}
      </Link>
    </div>
  );
};

