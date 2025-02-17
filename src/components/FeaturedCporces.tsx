"use client";
import courcedata from "../data/music_coursec.json";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";

// for the data defining in typescript
interface Cource {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCources = () => {
  const featuredCources = courcedata.courses.filter(
    (cource: Cource) => cource.isFeatured
  );
  return (
    <div className="py-12 bg-grey-900 ">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Featured Cources
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Lear with the best
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCources.map((cource: Cource) => (
            <div key={cource.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {cource.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {cource.description}
                  </p>
                  <Link href={`/courses/${cource.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href="/courses">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Checkout Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCources;
