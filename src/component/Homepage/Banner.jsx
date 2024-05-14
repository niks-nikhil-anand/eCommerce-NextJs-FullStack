"use client"
import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dots from '../../../public/banner/dots.svg';
import kid from '../../../public/banner/kid.png';

const Banner2 = ({ className }) => {
  const router = useRouter();

  return (
    <section className="mt-20">
      <Container className={className ? className : ""}>
        <div
          className="bg-yellow-50 h-full w-full rounded-primary relative flex flex-col gap-y-8 lg:p-24 p-8"
          style={{ backgroundImage: `url(${dots})` }}
        >
          <Image
            src={kid}
            alt="model"
            height={872}
            width={600}
            className="lg:absolute bottom-0 left-0 order-2"
          />
          <article className="flex flex-col justify-start items-end order-1">
            <div className="flex flex-col gap-y-4 max-w-lg z-50 lg:ml-auto lg:mr-0 mr-auto">
              <h1 className="md:text-6xl text-4xl">
                Special offer in kids products
              </h1>
              <p className="flex flex-row gap-x-0.5 items-center text-lg text-slate-500">
                Fashion is a form of self-expression and autonomy at a
                particular period and place.
              </p>
              <button className="px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4"
              onClick={() => router.push("https://devhasibulislam.vercel.app/")}>
                Discover More
              </button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Banner2;
