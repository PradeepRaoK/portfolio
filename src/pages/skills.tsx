import { type NextPage } from "next";
import { stack } from "data/data";

const Skills: NextPage = () => {

  return (
    <div className="container mx-auto max-w-2xl px-2">
    <h2 className="text-3xl text-purple-300 mt-4">My abilities</h2>
        <div className="container mx-auto mt-12">
        <p className="text-lg text-purple-300 mb-3">{stack.head1}</p>
        <div className="w-full flex flex-wrap -m-2">
            {stack.lan.map((item, index) => (
            <span
                className="hover:bg-gradient-to-r hover:text-white from-cyan-500 to-blue-500 hover:scale-105 cursor-pointer border  border-lightText rounded-lg m-2 px-3 py-1"
                key={index}
            >
            {item}
            </span>
            ))}
        </div>
        <p className="text-lg text-purple-300 my-3">{stack.head2}</p>
        <div className="w-full flex flex-wrap -m-2">
            {stack.fr.map((item, index) => (
            <span
                className="hover:bg-gradient-to-r hover:text-white from-cyan-500 to-blue-500 hover:scale-105 cursor-pointer border  border-lightText rounded-lg m-2 px-3 py-1"
                key={index}
            >
            {item}
            </span>
            ))}
        </div>
        <p className="text-lg text-purple-300 my-3">{stack.head3}</p>
      <div className="w-full flex flex-wrap -m-2">
        {stack.tool.map((item, index) => (
          <span
            className="hover:bg-gradient-to-r hover:text-white from-cyan-500 to-blue-500 hover:scale-105 cursor-pointer border  border-lightText rounded-lg m-2 px-3 py-1"
            key={index}
          >
          {item}
          </span>
        ))}
      </div>
        </div>
        </div>
  )
}

export default Skills;