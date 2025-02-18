import { Profile } from "./components/Profile";
import { CoverLetter } from "./components/CoverLetter";
import { EmploymentHistory } from "./components/EmploymentHistory";

/**
 * Mock Info
 */
import userInfo from "@/mocks/userInfo";
import { Details } from "./components/Details";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Languages } from "./components/Languages";

export default function Home() {
  return (
    <main className="flex flex-col items-center m-5">
      <section className="w-full p-5 flex flex-row space-x-3" id="about">
        <Profile {...userInfo.about} />
      </section>
      <section className="grid grid-cols-6 gap-4 w-full">
        <div className="col-span-4 p-5 space-y-3">
          <CoverLetter>
            {userInfo.coverLetter.text}
          </CoverLetter>

          <EmploymentHistory experience={userInfo.experience} />
          <Education {...userInfo.education.school}/>
          <Languages {...userInfo.language}/>
        </div>
        <div className="col-span-2 p-5 space-y-3">
          <Details {...userInfo.details}/>
          <Skills skills={userInfo.skills} />
        </div>
      </section>
    </main>
  );
}
