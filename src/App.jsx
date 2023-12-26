import headImage from "./assets/images/illustration-article.svg";
import avatar from "./assets/images/image-avatar.webp";

export default function App() {
  return (
    <main className="bg-primary w-100 h-full grid place-content-center justify-center">
      <div className="border border-solid border-gray-900 p-4 bg-white rounded-lg max-w-321 mx-4 md:mx-0">
        <img src={headImage} className="rounded-lg" />
        <div className="p-1 my-2 bg-primary w-fit mt-5">
          <p className="text-xs font-bold px-1">Learning</p>
        </div>
        <p className="text-xs">Published 21 Dec 2023</p>
        <h3 className="font-bold my-3">HTML & CSS foundations</h3>
        <p className="text-sm text-gray-400 mb-4">These language are the backbone of every website, defining structure, content, and presentation</p>
        <div className="flex items-center gap-2">
          <img src={avatar} className="w-7 h-7" />
          <p className="text-xs font-bold">Greg Hooper</p>
        </div>
      </div>
    </main>
  )
}