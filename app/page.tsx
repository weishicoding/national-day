"use client";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import background from "@/public/images/Chinese-National-1200x834.jpg";
import { MutableRefObject, useEffect, useRef } from "react";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const quoteRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const targetSection: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);

  const initAboutAnimation = (
    quoteRef: MutableRefObject<HTMLDivElement>,
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.3 },
    });

    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0.4 },
        { opacity: 1 }
      )
      .fromTo(
        quoteRef.current.querySelector(".t1"),
        { opacity: 0.4, delay: 2 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0.4,
        delay: 0.5,
      })

      .fromTo(
        quoteRef.current.querySelector(".about-2"),
        { opacity: 0.4 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".t2"), {
        backgroundPositionX: "100%",
        duration: 1,
      })
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0.4,
        delay: 1,
      })

      .fromTo(
        quoteRef.current.querySelector(".about-3"),
        { opacity: 0.4 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".t3"), {
        backgroundPositionX: "100%",
        duration: 1,
      })
      .to(quoteRef.current.querySelector(".about-3"), {
        opacity: 0.4,
        delay: 1,
      })

      .fromTo(
        quoteRef.current.querySelector(".about-4"),
        { opacity: 0.4 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-4"), {
        opacity: 0.4,
        delay: 1,
      })

      .fromTo(
        quoteRef.current.querySelector(".about-5"),
        { opacity: 0.4 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-5"), {
        opacity: 0.4,
        delay: 1,
      })

      .fromTo(
        quoteRef.current.querySelector(".about-6"),
        { opacity: 0.4 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-6"), {
        opacity: 0.4,
        delay: 1,
      })

      .fromTo(
        quoteRef.current.querySelector(".about-7"),
        { opacity: 0.4 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-7"), {
        opacity: 0.4,
        delay: 1,
      });

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top 80%",
      end: "bottom 40%",
      scrub: 0,
      animation: timeline,
    });

    return scrollTriggerInstance;
  };

  useEffect(() => {
    if (quoteRef && targetSection) {
      // @ts-ignore
      const aboutScrollTriggerInstance = initAboutAnimation(
        quoteRef,
        targetSection
      );
      return aboutScrollTriggerInstance.kill;
    }
  }, [quoteRef, targetSection]);
  return (
    <>
      <Image src={background} alt="Logo" />
      <section
        id="about"
        className="about my-24 w-full select-none scroll-m-10"
      >
        <div ref={targetSection}>
          <div
            ref={quoteRef}
            className="space-y-24 text-2xl sm:text-4xl md:text-5xl"
          >
            <h2 className="about-1 leading-tight">
              Kiina on tosi tosi vanha maa.
            </h2>

            <h2 className="about-2 leading-tight">
              Mutta{" "}
              <strong className="underline decoration-red-400 underline-offset-8">
                uusi Kiina
              </strong>{" "}
              perustettiin{" "}
              <strong className="underline decoration-red-400 underline-offset-8">
                1. lokakuuta 1949.
              </strong>
            </h2>

            <h2 className="about-3 leading-tight">
              Siksi{" "}
              <span className="text-highlight t3 font-bold">
                {" "}
                1. lokakuuta{" "}
              </span>
              on meidän
              <span className="text-highlight t3 font-bold">
                {" "}
                kansallispäivämme.
              </span>
            </h2>

            <h2 className="about-4 leading-tight">
              Meillä on{" "}
              <strong className="underline decoration-yellow-400 underline-offset-8">
                viikon loma
              </strong>
              {""}, joka alkaa 1. lokakuuta.
            </h2>

            <h2 className="about-5 leading-tight">
              Me{" "}
              <span className="text-highlight t3 font-bold"> juhlimme🎉, </span>
              <span className="text-highlight t3 font-bold">
                {" "}
                matkustamme🏕️,{" "}
              </span>
              ja{" "}
              <span className="text-highlight t3 font-bold">
                syömme herkullista ruokaa🍜.{" "}
              </span>
            </h2>
            <h2 className="about-6 leading-tight">
              Joskus ammumme
              ilotulitteita🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆🎇🎆.
            </h2>
            <h2 className="about-7 leading-tight">
              Viiden vuoden välein meillä on myös yksi{" "}
              <strong className="underline decoration-red-400 underline-offset-8">
                paraati.
              </strong>
            </h2>
          </div>
        </div>

        <div className="relative isolate mt-32">
          <Background />

          <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:grid-rows-1">
            <div className="relative aspect-square md:hidden">
              <Image
                src="/images/IMG_0872.jpg"
                alt=""
                loading="lazy"
                unoptimized
                fill
                className="rounded-lg drop-shadow-2xl"
              />
            </div>

            <div className="relative col-span-2 hidden md:block">
              <Image
                src="/images/IMG_0871.JPG"
                alt=""
                loading="lazy"
                fill
                className="rounded-lg object-cover drop-shadow-2xl"
              />
            </div>

            <div className="relative aspect-square ">
              <Image
                src="/images/IMG_0869.JPG"
                alt=""
                loading="lazy"
                fill
                className="m-auto aspect-square rounded-lg object-cover drop-shadow-2xl"
              />
            </div>

            <div className="relative hidden aspect-square md:block">
              <Image
                src="/images/IMG_0874.jpg"
                alt=""
                loading="lazy"
                fill
                className="m-auto rotate-3 rounded-lg drop-shadow-2xl transition-all duration-200 hover:rotate-0"
              />
            </div>

            <div className="relative hidden aspect-square md:block">
              <Image
                src="/images/IMG_0873.jpg"
                alt=""
                loading="lazy"
                fill
                className="m-auto aspect-square rounded-lg object-cover drop-shadow-2xl"
              />
            </div>

            <div className="relative aspect-square">
              <Image
                src="/images/IMG_0875.jpg"
                alt=""
                loading="lazy"
                fill
                className="m-auto -rotate-3 rounded-lg object-cover drop-shadow-2xl md:rotate-0"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-32">
        <h2 className="text-5xl leading-tight text-center">
          Kiina on <span className="text-highlight t3 font-bold"> iso, </span>
          <span className="text-highlight t3 font-bold"> iso </span>
          maa ja Kiinassa on paljon kaupunkeja.
        </h2>
        <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:grid-rows-1 mt-24">
          <div className="flex justify-center items-center">
            <h2 className="text-5xl text-highlight t3 font-bold text-red-400">
              Nanjing
              <br />
              (Oma kaupungin)
            </h2>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/IMG_0881.jpg"
              alt=""
              loading="lazy"
              fill
              className="m-auto -rotate-3 rounded-lg object-cover drop-shadow-2xl md:rotate-0"
            />
          </div>
          <div className="flex justify-center items-center">
            <h2 className="text-5xl text-highlight t3 font-bold text-purple-400">
              Shanghai
            </h2>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/IMG_0876.JPG"
              alt=""
              loading="lazy"
              fill
              className="m-auto -rotate-3 rounded-lg object-cover drop-shadow-2xl md:rotate-0"
            />
          </div>
          <div className="flex justify-center items-center">
            <h2 className="text-5xl text-highlight t3 font-bold text-orange-400">
              Chongqing
            </h2>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/IMG_0877.jpg"
              alt=""
              loading="lazy"
              fill
              className="m-auto -rotate-3 rounded-lg object-cover drop-shadow-2xl md:rotate-0"
            />
          </div>
          <div className="flex justify-center items-center">
            <h2 className="text-5xl text-highlight t3 font-bold text-blue-400">
              Wuhan
            </h2>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/IMG_0879.JPG"
              alt=""
              loading="lazy"
              fill
              className="m-auto -rotate-3 rounded-lg object-cover drop-shadow-2xl md:rotate-0"
            />
          </div>
        </div>
      </section>
      <section id="mentor" className="mt-32">
        <div className="max-w-3xl">
          <h2 className="font-bold text-neutral-900 text-5xl">MUUTA: </h2>
        </div>

        <div className="flex flex-col justify-between md:flex-row">
          <p className="my-8 text-neutral-900  md:w-6/12 text-4xl">
            Kiinassa on 1,4 miljardia ihmistä.
            <br />
            <br />
            <br />
            <br />
            Juhla- ja lomapäivinä kaikkialla on paljon ihmisiä ja autoa.
            <br />
            <br />
            <br />
            <br />
            Haluatko vielä matkustaa🤣?
          </p>
          <div className="mt-8 h-full md:w-6/12">
            <div className="grid grid-flow-row grid-cols-2 gap-8">
              <Image
                src="/images/1733338516892.JPG"
                alt=""
                loading="lazy"
                width={500}
                height={500}
                className="m-auto hidden -rotate-3 rounded-xl drop-shadow-2xl transition-all duration-200 hover:rotate-0 md:block"
              />

              <Image
                src="/images/IMG_0891.JPG"
                alt=""
                loading="lazy"
                width={500}
                height={500}
                className="m-auto rounded-lg drop-shadow-2xl"
              />
              <Image
                src="/images/IMG_0885.JPG"
                alt=""
                loading="lazy"
                unoptimized
                width={500}
                height={500}
                className="m-auto rounded-lg drop-shadow-2xl"
              />

              <Image
                src="/images/IMG_0886.JPG"
                alt=""
                loading="lazy"
                width={500}
                height={500}
                className="m-auto rounded-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="mentor" className="mt-32">
        <div className="max-w-3xl">
          <h2 className="font-bold text-neutral-900 text-5xl">
            Joten lomalla valitsen...{" "}
          </h2>
        </div>
        <div className="grid grid-flow-row grid-cols-4 gap-8 mt-12">
          <div>
            <h2 className="text-3xl font-semibold text-center mb-12">
              Nukun💤
            </h2>
            <Image
              src="/images/IMG_0887.JPG"
              alt=""
              loading="lazy"
              width={300}
              height={300}
              className="m-auto rounded-lg drop-shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-center mb-12">
              Pelaan peli🎮
            </h2>
            <Image
              src="/images/IMG_0888.JPG"
              alt=""
              loading="lazy"
              width={300}
              height={300}
              className="m-auto rounded-lg drop-shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-center mb-12">
              Makaan sohvalla🛋️
            </h2>
            <Image
              src="/images/IMG_0889.JPG"
              alt=""
              loading="lazy"
              unoptimized
              width={300}
              height={300}
              className="m-auto rounded-lg drop-shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-center mb-12">
              Katson televisiota📺
            </h2>
            <Image
              src="/images/IMG_0890.JPG"
              alt=""
              loading="lazy"
              width={300}
              height={300}
              className="m-auto rounded-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section id="mentor" className="mt-32">
        <div className="max-w-8xl">
          <h2 className="font-bold text-neutral-900 text-5xl">
            Haluatteko katsella paraativideota?
          </h2>
        </div>
        <div className="relative m-auto mt-16 items-center">
          {/* <CustomImange className="h-full object-cover" src={DecorativeImage} alt="TCL screenshot" /> */}
          <video width="800" height="600" controls preload="none">
            <source src="/images/video.mp4" type="video/mp4" />
            <track
              src="/images/video.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
        </div>
      </section>
      <div className="mt-20 text-sm text-center">
        &copy; Will, {new Date().getFullYear()}
      </div>
    </>
  );
}

function Background() {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className="absolute inset-0 -z-10 -m-40 max-w-[100vw] bg-[linear-gradient(to_right,#ffffff30_1px,transparent_1px),linear-gradient(to_bottom,#ffffff30_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)]"></div>
  );
}
