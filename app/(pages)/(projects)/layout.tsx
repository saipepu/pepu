import { ReactNode } from "react";

const Projects = ({ children } : { children: ReactNode }) => {

  return (
    <main className="h-full bg-[#2d2d2d]">
      {children}
    </main>
  )
}
export default Projects;