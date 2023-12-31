import Aside from "./components/layout/aside"
import Mobile from "./components/layout/mobile"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div  className="w-screen h-screen bg-[black] flex flex-col md:flex-row md:items-center text-[0.8rem] md:text-[0.6rem] 2xl:text-[0.8rem]">
        <Aside/>
        <Mobile/>
        <div className="w-full h-full mt-16 md:mt-0">
          {children}
        </div>
      </div>
    )
  }
  