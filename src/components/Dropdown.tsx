import React, { useRef, useState } from "react";
import Icons from "../assests/Icons";

interface SelectorProps {
  tags: string[];
}

const Selector: React.FC<SelectorProps> = ({ tags }) => {
  console.log(tags);
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const filteredTags = tags
  .filter((item) => typeof item === "string" && item.toLowerCase().includes(query.toLowerCase().trim()) && !selected.includes(item));


  const isDisable =
    !query.trim() ||
    selected.some(
      (item) => item.toLowerCase().trim() === query.toLowerCase().trim()
    );

  const handleAddTag = (tag: string) => {
    setSelected((prev) => [...prev, tag]);
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <div className="p-3">
      <div className="relative w-full max-w-md text-sm text-black">
        {selected.length > 0 && (
          <div className="bg-white w-full relative text-xs flex flex-wrap gap-1 p-2 mb-2 rounded-md shadow-md">
            {selected.map((tag) => (
              <div
                key={tag}
                className="rounded-full w-fit py-1.5 px-3 border border-gray-400 bg-gray-50 flex items-center gap-2"
              >
                {tag}
                <div
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setSelected(selected.filter((i) => i !== tag))}
                >
                  <Icons.Close />
                </div>
              </div>
            ))}
            <div className="w-full text-right">
              <span
                className="text-gray-600 cursor-pointer"
                onClick={() => {
                  setSelected([]);
                  inputRef.current?.focus();
                }}
              >
                Clear all
              </span>
            </div>
          </div>
        )}
        <div className="bg-white flex items-center justify-between p-3 w-full gap-2.5 rounded-md shadow-md">
          <Icons.Search />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search or Create tags"
            className="bg-transparent text-sm flex-1 caret-rose-600 outline-none"
            onFocus={() => setMenuOpen(true)}
            onBlur={() => setTimeout(() => setMenuOpen(false), 150)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isDisable) {
                handleAddTag(query);
              }
            }}
          />
          <button
            className="text-sm disabled:text-gray-300 text-black disabled:cursor-not-allowed"
            disabled={isDisable}
            onClick={() => {
              if (!isDisable) {
                handleAddTag(query);
              }
            }}
          >
            + Add
          </button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="bg-white absolute w-full max-h-52 mt-2 p-1 flex overflow-y-auto rounded-md shadow-md scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400">
            <ul className="w-full">
              {filteredTags.length > 0 ? (
                filteredTags.map((tag) => (
                  <li
                    key={tag}
                    className="p-2 cursor-pointer hover:bg-rose-50 hover:text-blue-400 rounded-md w-full"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      handleAddTag(tag);
                    }}
                  >
                    {tag}
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-600">No options available</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Selector;
