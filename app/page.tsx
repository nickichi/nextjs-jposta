"use client"
import Image from "next/image";
import styles from "./page.module.css";
import {FormEvent, useState} from "react";
import {Address, getAddress} from "jposta";

export default function Home() {
  const [result, setResult] = useState<Address | null | undefined>(undefined);

  const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const zipCode = formData.get("zipcode") as string;
    console.log("zipCode:", zipCode);
    const address = await getAddress(zipCode);
    setResult(address);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="${BASE_PATH}/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="zipcode" />
          <button type="submit">Search</button>
        </form>
      </div>

      <div>
        <p>
          result: {result === undefined ? '(no input)' : result ? JSON.stringify(result, null, 2) : 'not found'}
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="${BASE_PATH}/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>


    </main>
  );
}
