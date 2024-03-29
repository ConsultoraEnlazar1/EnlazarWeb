import React from "react";
import Image from "next/image";
import styles from "./Companies.module.css";
import { urlFor } from "@/lib/sanity";

export const CompaniesThatTrust = ({ companies }) => {
  return (
    <div className="w-full h-auto bg-grey py-10 md:py-20">
      <h2 className=" px-4 md:px-8 text-2xl lg:text-3xl font-bold text-center text-ellipsis text-dark">
        Empresas que confían en nosotros
      </h2>

      <div className=" w-full h-auto flex flex-row flex-wrap justify-center items-center p-6 gap-4 md:gap-6">
        {companies && companies.length ? (
          companies.map(({ _id, mainImage, title }) => (
            <div
              key={_id}
              className="flex justify-center items-center md:grayscale md:hover:grayscale-0 transition-all ease-in-out duration-300"
              style={{
                width: "clamp(7rem, 5.2645rem + 9.2562vw, 14rem)",
              }}
            >
              <Image
                className={styles.image}
                src={urlFor(mainImage).url()}
                width={150}
                height={150}
                alt={title}
              />
            </div>
          ))
        ) : (
          <>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/logo-pay.png"
                width={200}
                height={300}
                alt="payhous"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/BuenosAires.png"
                width={200}
                height={200}
                alt="BuenosAires"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/empujar.png"
                width={200}
                height={300}
                alt="empujar"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/coderhouse.png"
                width={200}
                height={200}
                alt="coderhouse"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/workn.png"
                width={200}
                height={50}
                alt="workn"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/henry.png"
                width={200}
                height={300}
                alt="henry"
              />
            </div>

            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/uba.png"
                width={200}
                height={200}
                alt="UBA"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/mudafy.png"
                width={200}
                height={200}
                alt="mudafy"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/duhire.png"
                width={200}
                height={100}
                alt="duhire"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/linkedIn.png"
                width={200}
                height={100}
                alt="linkedin"
              />
            </div>

            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/logo-pay.png"
                width={200}
                height={300}
                alt="payhous"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/BuenosAires.png"
                width={200}
                height={200}
                alt="BuenosAires"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/empujar.png"
                width={200}
                height={300}
                alt="empujar"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/coderhouse.png"
                width={200}
                height={200}
                alt="coderhouse"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/workn.png"
                width={200}
                height={50}
                alt="workn"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/henry.png"
                width={200}
                height={300}
                alt="henry"
              />
            </div>

            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/uba.png"
                width={200}
                height={200}
                alt="UBA"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/mudafy.png"
                width={200}
                height={200}
                alt="mudafy"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/duhire.png"
                width={200}
                height={100}
                alt="duhire"
              />
            </div>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src="/images/logos-empresas/linkedIn.png"
                width={200}
                height={100}
                alt="linkedin"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
