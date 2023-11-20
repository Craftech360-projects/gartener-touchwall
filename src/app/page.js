import Image from "next/image";
import Link from "next/link";

const mainbg = "/assets/mainbg.png";
const beginBtn = "/assets/beginbtn.png";

export default function Home() {
  return (
    <main className="bg-[url('/assets/mainbg.png')]">
      <Image src={mainbg} fill />
      <div className="absolute top-[40%] left-[30%] flex justify-center items-center flex-col gap-6">
        <p className="text-white font-semibold text-4xl">
          Move from AI-Possible to AI-Proven
        </p>
        <Link href={"/dashb"}>
          <Image src={beginBtn} width={200} height={200} />
        </Link>
      </div>
    </main>
  );
}
