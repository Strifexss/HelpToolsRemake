import Aside from "./components/layout/aside"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div  className="w-screen h-screen bg-[black] flex items-center">
        <Aside/>
        {children}
      </div>
    )
  }
  